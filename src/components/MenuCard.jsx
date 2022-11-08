import React from 'react';
import { Box, useStyleConfig } from '@chakra-ui/react';

export default function MenuCard({ title, onClick, variant }) {
  const styles = useStyleConfig('MenuCard',{variant});

  return (
    <Box
      __css={styles}
      as='button'
      onClick={onClick}
    >
      {title}
    </Box>
  )
}