import React from 'react';
import {
  Box,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import InitiativeCard from './InitiativeCard';

export default function ContentPanel({
  title,
  subtitle,
  items,
  initiatives,
  children
}) {
  // theme
  const styles = useMultiStyleConfig('ContentPanel')

  const content = children ?? []
  
  if (items !== undefined) {
    items.forEach((list, index) => {
      content.push(
        <Box key={index}>
          {list?.heading}
          <ul style={{
            listStylePosition: 'outside',
            paddingInlineStart: '1.5rem',
          }}>
            {list.items ? list.items.map((item, index) => {
              return (
                <li key={index} style={{
                }}>{item}</li>
              )
            }):null}
          </ul>
        </Box>
      )
    })
  }

  if (initiatives !== undefined) {
    initiatives.forEach((item, index) =>
      content.push(
        <InitiativeCard
          key={item.title}
          initiative={item}
          flip={index%2===0}
          flex='0'
        />
      )
    )
  }

  return (
    <Box __css={styles.container}>
      {title ? <Box __css={styles.title}>{title}</Box> : null}
      {subtitle ? <Box __css={styles.subtitle}>{subtitle}</Box> : null}
      <Box __css={styles.body}>
        {content}
      </Box>
    </Box>
  )
}