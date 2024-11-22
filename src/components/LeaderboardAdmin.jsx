import React, { useEffect, useState } from 'react';
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { produce } from 'immer';
import { LeaderboardComponent } from './Leaderboard';
import { set, ref } from 'firebase/database';

const lbContent = {
  topRainmaker: {
    name: 'Test',
    score: '0',
  },
  topClass: {
    name: 'Test',
    score: '0',
  },
  topSchool: {
    name: 'Test',
    score: '0',
  },
}

const isNameInvalid = (name) => {
  return (name.length > 20 || name.length <= 0)
}

const isScoreInvalid = (score) => {
  return (score.length > 4 || score.length <= 0 || isNaN(score))
}

const validateForm = (content) => {
  return content.topRainmaker.name.length < 20 &&
    content.topClass.name.length < 20 &&
    content.topSchool.name.length < 20 &&
    !isScoreInvalid(content.topRainmaker.score) &&
    !isScoreInvalid(content.topClass.score) &&
    !isScoreInvalid(content.topSchool.score)
}

export default function LeaderboardAdmin({ db }) {
  const [content, setContent] = useState(lbContent);
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const [isValid, setIsValid] = useState(false)
  const [message, setMessage] = useState('')
  
  useEffect(() => {
    setIsValid(validateForm(content))
  }, [content, setIsValid])

  const submitForm = () => {
    set(ref(db, 'leaderboard/'), content)
    .then(setMessage('Upload successful.'))
    .catch((error) => {
      setMessage(error.message)
    })
  }

  return (
    <Center height='100svh'>
      <Flex direction='column' gap='1rem'>
        <LeaderboardComponent content={{ total: { name: 'Total', score: '0' }, ...content}}/>
        <SimpleGrid columns={2} gap='1rem'>
          <FormControl isRequired>
            <FormLabel>Top Rainmaker</FormLabel>
            <Input
              placeholder='Top Rainmaker name...'
              onChange={(e) => setContent(produce(content, (draftState) => {
                draftState.topRainmaker.name = e.target.value
              }))}
              isInvalid={isNameInvalid(content.topRainmaker.name)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Score</FormLabel>
            <Input
              placeholder='score...'
              htmlSize={4}
              width='auto'
              onChange={(e) => setContent(produce(content, (draftState) => {
                draftState.topRainmaker.score = e.target.value
              }))}
              isInvalid={isScoreInvalid(content.topRainmaker.score)}
            />
          </FormControl>
          
          <FormControl isRequired>
            <FormLabel>Top Class</FormLabel>
            <Input
              placeholder='Top class name...'
              onChange={(e) => setContent(produce(content, (draftState) => {
                draftState.topClass.name = e.target.value
              }))}
              isInvalid={isNameInvalid(content.topClass.name)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Score</FormLabel>
            <Input
              placeholder='score...'
              htmlSize={4}
              width='auto'
              onChange={(e) => setContent(produce(content, (draftState) => {
                draftState.topClass.score = e.target.value
              }))}
              isInvalid={isScoreInvalid(content.topClass.score)}
            />
          </FormControl>
          
          <FormControl isRequired>
            <FormLabel>Top School</FormLabel>
            <Input
              placeholder='Top school name...'
              onChange={(e) => setContent(produce(content, (draftState) => {
                draftState.topSchool.name = e.target.value
              }))}
              isInvalid={isNameInvalid(content.topSchool.name)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Score</FormLabel>
            <Input
              placeholder='score...'
              htmlSize={4}
              width='auto'
              onChange={(e) => setContent(produce(content, (draftState) => {
                draftState.topSchool.score = e.target.value
              }))}
              isInvalid={isScoreInvalid(content.topSchool.score)}
            />
          </FormControl>
        </SimpleGrid>

        <FormControl isRequired>
          <FormLabel>Admin Password</FormLabel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              onChange={(e) => setContent(produce(content, (draftState) => {
                draftState.password = e.target.value
              }))}
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
          onClick={submitForm}
          colorScheme='green'
          disabled={!isValid}
        >
          Submit
        </Button>
        <Text>{message}</Text>
      </Flex>
    </Center>
  )
}