import React, { useEffect } from 'react';
import { 
  Box,
  Flex,
  Heading,
  IconButton,
  StackDivider,
  useBoolean,
  HStack
} from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Questions } from './MapData';

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
      divider={<StackDivider borderColor='gray.200' />}
      spacing={2}
      p={2}
      h='0'
      minH='100%'
      {...props}
    >
      <Flex direction='column' h='100%'>
        <IconButton
          flex='1'
          variant='ghost'
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
  const BoxVariants = {
    default: {
      borderWidth: '1px',
    },
    selected: {
      borderWidth: '4px',
      borderColor: '#A8A04D',
    }
  }

  return (
    <Flex 
      direction='column'
      h='100%'
      w='md'
      overflowY='scroll'
    >
      {Object.values(Questions).map(q =>
          <Box
            as='button'
            key={q.title}
            borderRadius='lg'
            p={4}
            my={2}
            _hover={{
              bg: "#ECEAD5"
            }}
            _active={{
              bg: '#dddfe2',
              transform: 'scale(0.98)',
              borderColor: '#bec3c9',
            }}
            {...(activeQuestionTitle === q.title 
              ? BoxVariants.selected
              : BoxVariants.default
            )}
            onClick={() => {setQuestion(q)}}
          >
            <Heading>{q.title}</Heading>
          </Box>
        )
      }
    </Flex>
  )
}