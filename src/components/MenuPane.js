import React, { useEffect } from 'react';
import { 
  Flex,
  IconButton,
  StackDivider,
  useBoolean,
  HStack
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Questions } from './MapData';
import MenuCard from './MenuCard';

export default function MenuPane({
  onToggle,
  activeQuestion,
  setQuestion,
  ...props
}) {
  const [openFlag, setOpenFlag] = useBoolean(true);

  useEffect(() => {
    onToggle();
  }, [openFlag, onToggle])

  return (
    <HStack
      h='0'
      minH='100%'
      bg='rush.50'
      {...props}
    >
      <Flex direction='column' h='100%' bg='rush.500'>
        <IconButton
          flex='1'
          variant='ghost'
          borderRadius='0'
          icon={openFlag ? <FaChevronRight /> : <FaChevronLeft />}
          onClick={setOpenFlag.toggle}
        />
      </Flex>
      {openFlag ? (
        <QuestionsList
          activeQuestionTitle={activeQuestion.title}
          setQuestion={setQuestion}
        />
      ) : null}
    </HStack>
  )
}

function QuestionsList({activeQuestionTitle, setQuestion}) {
  return (
    <Flex 
      direction='column'
      h='100%'
      w='md'
      overflowY='scroll'
      gap={2}
      p={2}
    >
      {Object.values(Questions).map(q => 
        <MenuCard
          key={q.title}
          title={q.title}
          variant={activeQuestionTitle === q.title ? 'selected' : 'default'}
          onClick={() => {setQuestion(q)}}
        />
      )}
    </Flex>
  )
}