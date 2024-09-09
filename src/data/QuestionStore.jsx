import { create }  from 'zustand';

// Import all question modules
var questions = [];
const questionContext = require.context('./questions/', false, /\.jsx$/);
questionContext.keys().forEach((qcKey) => {
  const {key, ...rest} = questionContext(qcKey).default;
  questions.push([key, rest]);
});
questions = questions.sort();
questions.push(...questions.splice(questions.findIndex(v => v[0] === 'development'), 1));
const questionMap = new Map(questions);
questions = undefined;
export default questionMap;

// Question reducer
export const questionActions = { open: 'OPEN', close: 'CLOSE', makeYourMove: 'MOVE', rabbitHole: 'RABBIT' }
const questionReducer = (state, {question, focus}) => {
  const newState = {}
  if (questionMap.has(question) && state.activeQuestion !== question) {
    newState.activeQuestion = question
    newState.activeLayers = questionMap.get(question).layers
  }
  switch (focus) {
    case questionActions.open:
      newState.sectionFocus = 1
      return newState
    case questionActions.close:
      newState.sectionFocus = 0
      return newState
    case questionActions.makeYourMove:
      newState.sectionFocus = 2
      return newState
    case questionActions.rabbitHole:
      newState.sectionFocus = 3
      return newState
    default:
      return newState
  }
}

// Question State Store
export const useActiveQuestionStore = create((set, get) => ({
  activeQuestion: undefined,
  activeLayers: [],
  setActiveQuestion: (question) => {
    if (!questionMap.has(question)) return;
    set({
      activeQuestion: question,
      activeLayers: questionMap.get(question).layers
    })
  },
  toggleLayerActive: (layerId) => {
    set((state) => ({
        activeLayers: state.activeLayers.map((layer) => {
          const {active, ...rest} = layer
          return {
            active: layer.key === layerId ? !active : active,
            ...rest
          }
        })
    }))
  },
  sectionFocus: 0,
  setSectionFocus: (focus) => {
    if (focus >= 0 && focus <= 3) {
      set(() => ({ sectionFocus: focus }))
    }
  },
  dispatch: (args) => set((state) => questionReducer(state, args))
}))