import React from 'react';

const LegendPatchPolygon = ({ fill }) => {
  return (
    <div style={{
      width: '1.5em',
      height: '1.25em',
      background: fill,
    }} />
  );
}
export default LegendPatchPolygon;