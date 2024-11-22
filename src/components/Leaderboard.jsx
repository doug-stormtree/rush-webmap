import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { ref, onValue } from 'firebase/database';

const lbContent = {
  topRainmaker: {
    name: 'None',
    score: '0',
  },
  topClass: {
    name: 'None',
    score: '0',
  },
  topSchool: {
    name: 'None',
    score: '0',
  },
}

const textFieldOpts = {
  maxWidth:'114px',
  textOverflow:'ellipsis',
  whiteSpace:'nowrap',
  overflow:'hidden',
}

export default function Leaderboard({ db, initContent = lbContent }) {
  const [ content, setContent ] = useState(initContent);

  // store Rain Garden count separately to fetch from OGM
  const [ total, setTotal ] = useState('0')
  const getTotalRainGardens = useMemo(() => async () => {
    // Fetch count of Rain Gardens from OGM
    fetch('https://greenmap.org/api-v1/maps/63e6939eabcc260100514352/meta')
      .then((response) => response.json())
      .then((json) => {
        setTotal(json.publicFeatures.toString())
      })
  }, [])

  useEffect(() => {
    getTotalRainGardens()
  }, [getTotalRainGardens])
  
  useEffect(() => {
    if (db === undefined) return;

    // Listen for DB changes
    const lbRef = ref(db, 'leaderboard/');
    onValue(lbRef, (snapshot) => {
      const data = snapshot.val()
      setContent(data)
    })
  }, [setContent, db])

  return (
    <LeaderboardComponent content={{total: { name: 'Total', score: total }, ...content}} />
  )
}

export function LeaderboardComponent({ content }) {
  const { isOpen, onOpen, onClose } = useDisclosure({defaultIsOpen: true})

  return isOpen ? (
    <Flex
      backgroundImage="url('/Leaderboard.svg')"
      width='200px'
      height='344px'
      direction='column'
      // positioning
      paddingX='1.75rem'
      paddingTop='4.5rem'
      //paddingTop='11.75rem'
      gap='1.3rem'
      // text styles
      fontFamily='var(--chakra-fonts-leaderboard)'
      fontWeight='400'
      color='white'
      textShadow='-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
      fontSize='1rem'
      // interaction
      onClick={onClose}
    >
      <Flex direction='row' justifyContent='space-between' marginBottom='0.8rem'>
        <Box textAlign='left' {...textFieldOpts}>{content.topRainmaker.name}</Box>
        <Box textAlign='right'>{content.topRainmaker.score.substring(0,4)}</Box>
      </Flex>
      <Flex direction='row' justifyContent='space-between' marginBottom='0.8rem'>
        <Box textAlign='left' {...textFieldOpts}>{content.topClass.name}</Box>
        <Box textAlign='right'>{content.topClass.score.substring(0,4)}</Box>
      </Flex>
      <Flex direction='row' justifyContent='space-between'>
        <Box textAlign='left' {...textFieldOpts}>{content.topSchool.name}</Box>
        <Box textAlign='right'>{content.topSchool.score.substring(0,4)}</Box>
      </Flex>
      <Flex direction='row' justifyContent='space-between'>
        <Box textAlign='left' {...textFieldOpts}>{content.total.name}</Box>
        <Box textAlign='right'>{content.total.score.substring(0,4)}</Box>
      </Flex>
    </Flex>
  ) : (
    <Box
      backgroundImage="url('/LeaderboardBanner.svg')"
      width='200px'
      height='52px'
      onClick={onOpen}
    />
  )
}