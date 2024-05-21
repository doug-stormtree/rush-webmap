import { useEffect, useState } from 'react';

const FIRST_VISIT_KEY = 'rush_first_visit'
const FIRST_VISIT_VAL = 'false'

export default function useFirstVisit() {
  const [isFirstVisit, setIsFirstVisit] = useState(undefined)

  useEffect(() => {
    if (
      storageAvailable("sessionStorage") &&
      sessionStorage.getItem(FIRST_VISIT_KEY) === FIRST_VISIT_VAL
    ) {
      // set isFirstVisit false if key exists in storage
      setIsFirstVisit(false)
    } else {
      setIsFirstVisit(true)
    }
  }, [])
  
  return [isFirstVisit, () => {
    sessionStorage.setItem(FIRST_VISIT_KEY, FIRST_VISIT_VAL)
  }]
}

// source: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
