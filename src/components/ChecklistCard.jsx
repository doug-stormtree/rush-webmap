import React from 'react';
import {
  Checkbox,
  Flex,
  HStack,
  Image,
  Text,
} from '@chakra-ui/react';

const ChecklistCard = ({
  image,
  name,
  nameScientific,
  nameIndigenous,
  description,
  onCheckChange,
  defaultChecked,
}) => {
  return (
    <Flex
      flex='1 1 21rem'
      direction='row'
      border='1.6px solid #EDF2F7'
      borderRadius='0.75rem'
      bgColor='#3b611a'
      padding='0.5rem'
      gap='1rem'
      //maxWidth='calc(50% - 0.25rem)'
      //minWidth='min(80%, 24rem)'
    >
      <Flex direction='column' shrink='0'>
        <a href={image} target='_blank' rel='noreferrer'>
          <Image
            alt={name}
            src={image}
            boxSize='120px'
            borderRadius='full'
            border='3px solid white'
            boxShadow='rgba(0, 0, 0, 0.25) 0px 14px 28px,
                       rgba(0, 0, 0, 0.22) 0px 10px 10px;'
          />
        </a>
        <Checkbox
          colorScheme='green'
          size='lg'
          onChange={onCheckChange}
          defaultChecked={defaultChecked}
        />
      </Flex>
      <Flex direction='column' color='white'>
        <Text
          textTransform='uppercase'
          fontFamily='var(--chakra-fonts-title)'
          fontWeight='800'
          fontSize='1.125rem'
        >
          {name}
        </Text>
        <HStack>
          <Text
            color='gray.400'
            fontFamily='var(--chakra-fonts-inter)'
            fontWeight='400'
            fontSize='0.75rem'
            fontStyle='italic'
          >
            <span style={{color: '#abce41'}}>{nameScientific}</span>
            {nameScientific && nameIndigenous ? ' / ' : ''}
            <span style={{color: '#ffaa2d'}}>{nameIndigenous}</span>
          </Text>
        </HStack>
        <Text>{description}</Text>
      </Flex>
    </Flex>
  )
}
export default ChecklistCard