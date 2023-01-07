import React from 'react';
import { Box } from '@chakra-ui/react';
import LegendItem from './LegendItem';
import LegendPatchPolygon from './LegendPatchPolygon';
import LegendPatchPoints from './LegendPatchPoints';

import { ReactComponent as IconA } from '../data/naturehood/5c311b3537407e1f05ac3946.svg';

const LegendPane = () => {
  return (
    <Box w='md' p={2}>
      <LegendItem name='Layer Name' description='This layer shows the red areas. Data provided by the ministry of red areas.'>
        <LegendPatchPolygon fill='#ae163e' />
      </LegendItem>
      <LegendItem name='Layer Name' description='This layer shows the red areas. Data provided by the ministry of red areas.'>
        <LegendPatchPoints pointClasses={{
          'Class 1': { icon: (<IconA />), fill: '#4c9f38', stroke: '#4c9f38', legendText: "SDG 3 - Good Health and Well Being" },
          'Class 2': { icon: (<IconA />), fill: '#4c9f38', stroke: '#4c9f38', legendText: "SDG 3 - Good Health and Well Being" },
          'Class 3': { icon: (<IconA />), fill: '#4c9f38', stroke: '#4c9f38', legendText: "SDG 3 - Good Health and Well Being" },
          'Class 4': { icon: (<IconA />), fill: '#4c9f38', stroke: '#4c9f38', legendText: "SDG 3 - Good Health and Well Being" },
        }} />
      </LegendItem>
    </Box>
  );
}
export default LegendPane;