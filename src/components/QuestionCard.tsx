import React from 'react'
import {
  AspectRatio,
  Box,
  Image,
  Text,
  useStyleConfig,
} from '@chakra-ui/react'

export interface QuestionCardProps {
  title: string
  subtitle: string
  imageURL: string
  sections: {
    title: string
    listItems: string[]
  }[]
  selected: boolean
}

interface QuestionButtonProps extends QuestionCardProps {
  onClick: () => void
}

const QuestionCard: React.FC<QuestionButtonProps> = ( props ) => {
  return props.selected ? (
    <QuestionCardExpanded {...props} onClick={props.onClick} />
  ) : (
    <QuestionButton {...props} onClick={props.onClick} />
  )
}
export default QuestionCard

const QuestionButton: React.FC<QuestionButtonProps> = ( props ) => {
  return (
    <Box
      bg="#333"
      borderRadius="xl"
      color="#FFF"
      position='relative'
      minHeight='120px'
      maxHeight='120px'
      minWidth='120px'
      maxWidth='120px'
      as='button'
      textAlign="center"
      onClick={props.onClick}
      overflow='hidden'
    >
      <Image
        src={props.imageURL}
        fit="cover"
        width="100%"
        height="100%"
        opacity="0.9"
      />
        <Text
          position="absolute"
          bottom="0.5em"
          left="50%"
          transform="translateX(-50%)"
          as="b"
          textShadow="1px 1px 2px black, 1px 1px 1px black"
          fontSize='sm'
        >
          {props.title}
        </Text>
    </Box>
  )
}

const QuestionCardTitle: React.FC<QuestionButtonProps> = ( props ) => {
  return (
    <Box
      bg="#333"
      borderRadius="xl"
      color="#FFF"
      position='relative'
      minHeight='120px'
      maxHeight='120px'
      minWidth='280px'
      overflow='hidden'
      onClick={props.onClick}
    >
      <Image
        src={props.imageURL}
        fit="cover"
        width="100%"
        height="100%"
        opacity="0.9"
      />
        <Box
          position="absolute"
          top="0.4em"
          left="0.7em"
          paddingRight='0.4em'
          as="b"
          textShadow="1px 1px 2px black, 1px 1px 1px black"
          fontSize='sm'
        >
          <Text fontSize='xl' mb='0.5em'>{props.title}</Text>
          <Text>{props.subtitle}</Text>
        </Box>
    </Box>
  )
}

const QuestionCardExpanded: React.FC<QuestionButtonProps> = ( props ) => {
  return (
    <Box
      bg="#333"
      borderRadius="xl"
      color="#FFF"
      position='relative'
      minHeight='120px'
      minWidth='280px'
      overflow='hidden'
      onClick={props.onClick}
    >
      <Image
        src={props.imageURL}
        fit="cover"
        width="100%"
        height="100%"
        opacity="0.9"
      />
        <Box
          position="absolute"
          top="0.4em"
          left="0.7em"
          paddingRight='0.4em'
          as="b"
          textShadow="1px 1px 2px black, 1px 1px 1px black"
          fontSize='sm'
        >
          <Text fontSize='xl' mb='0.5em'>{props.title}</Text>
          <Text>{props.subtitle}</Text>
        </Box>
    </Box>
  )
}