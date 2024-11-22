import React from 'react';
import {
  Box,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';

const lbContent = {
  topRainmaker: {
    name: 'Tom',
    score: '1123',
  },
  topClass: {
    name: 'Mrs. Stevens Grade Sevens',
    score: '1121343',
  },
  topSchool: {
    name: 'Claremont Most Excellent School',
    score: '1123',
  },
  total: {
    name: 'Total',
    score: '1123asdf'
  }
}

const textFieldOpts = {
  maxWidth:'114px',
  textOverflow:'ellipsis',
  whiteSpace:'nowrap',
  overflow:'hidden',
}

export default function Leaderboard() {
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
        <Box textAlign='left' {...textFieldOpts}>{lbContent.topRainmaker.name}</Box>
        <Box textAlign='right'>{lbContent.topRainmaker.score.substring(0,4)}</Box>
      </Flex>
      <Flex direction='row' justifyContent='space-between' marginBottom='0.8rem'>
        <Box textAlign='left' {...textFieldOpts}>{lbContent.topClass.name}</Box>
        <Box textAlign='right'>{lbContent.topClass.score.substring(0,4)}</Box>
      </Flex>
      <Flex direction='row' justifyContent='space-between'>
        <Box textAlign='left' {...textFieldOpts}>{lbContent.topSchool.name}</Box>
        <Box textAlign='right'>{lbContent.topSchool.score.substring(0,4)}</Box>
      </Flex>
      <Flex direction='row' justifyContent='space-between'>
        <Box textAlign='left' {...textFieldOpts}>{lbContent.total.name}</Box>
        <Box textAlign='right'>{lbContent.total.score.substring(0,4)}</Box>
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