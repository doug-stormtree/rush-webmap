import React from 'react';
import { Avatar, AvatarGroup } from '@chakra-ui/react';

const LegendPatchPolygon = ({ pointClasses }) => {
  return (
    <AvatarGroup size='sm' max={2} spacing='-0.5rem'>
      {Object.keys(pointClasses).map(key => 
        <Avatar
          key={key}
          icon={pointClasses[key]?.icon}
          fill={pointClasses[key]?.fill}
          stroke={pointClasses[key]?.stroke}
          bg='gray.200'
        />
      )}
    </AvatarGroup>
  );
}
export default LegendPatchPolygon;