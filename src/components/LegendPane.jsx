import React from 'react';
import { Box, Heading, useBreakpointValue } from '@chakra-ui/react';
import LegendItem from './LegendItem';
import { useMapLayerStore } from '../data/Questions';

const LegendPane = ({ activeQuestion }) => {
  const smallDisplay = useBreakpointValue({
    lg: false,
    base: true,
  },{ssr:false, fallback:true});

  const layers = useMapLayerStore((state) => state.layers);
  const legendEntries = [];
  for (const key of layers.keys()) {
    if (layers.get(key).question === activeQuestion) {
      legendEntries.push(<LegendItem key={key} layerId={key} mb={1} />);
    }
  }

  return (
    <>
      {
        smallDisplay ? (
          <></>
        ) : (
          <Box w='lg' p={2} paddingInlineStart={4} overflowY='scroll'>
            <Heading size='md' align='center' >Legend</Heading>
            {legendEntries}
          </Box>
        )
      }
    </>
  );
}
export default LegendPane;
