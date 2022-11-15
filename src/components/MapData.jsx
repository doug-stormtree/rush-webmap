import React from 'react';

export const MapData = ({ question }) => {
  if (question && question.hasOwnProperty('mapLayers')) {
    return question.mapLayers;
  } else return (<></>);
}