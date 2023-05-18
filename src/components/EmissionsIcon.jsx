import React from 'react';

const GHGIcon = ({ percentGHG, color = ['rgb(7,72,174)','rgb(248,56,8)'] }) => {
  const text = Math.abs(percentGHG).toFixed(1) + '%';
  const sign = percentGHG > 0 ? '+' : '-';
  const fillColor = percentGHG > 0 ? color[1] : color[0];
  return (
    <svg viewBox="0 0 82 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text stroke='rgba(227,232,240,0.8)' strokeWidth='0.2em' x="11" y="74" fontWeight="bold" fontSize="22">{text}</text>
      <text fill={fillColor} x="11" y="74" fontWeight="bold" fontSize="22">{text}</text>
      <path fill={fillColor} stroke='rgba(227,232,240,0.8)' strokeWidth='0.1em' d="M22.493 31.973c2.395 1.089 8.016 1.747 12.188.554 7.756-2.216 11.08-7.2 11.08-7.2 13.637 5.538 36.203-.414 35.783-12.187C81.138 1.788 63.49-.16 52.964.949c-11.27 1.189-17.652 8.29-18.836 10.527-2.765-.132-9.166.696-13.297 3.325-6.093 3.878-6.214 10.666-6.214 10.666-4.113.457-6.916 6.104-6.02 10.857l-3.171-.034-.251 2.367L.45 83.318h19.971v.004l18.993-.004-.534-5.235H6.272l3.858-36.51 8.565.096.998 12.962h16.798l-.466-4.577c.084.011.131.024.131.024 5.102.814 9.49-3.174 9.49-3.174 8.242 3.349 22.96 1.947 22.705-5.169-.245-6.862-10.913-8.04-17.276-7.37-6.814.719-10.672 5.012-11.388 6.364-1.67-.08-3.31-.2-5.807 1.39-3.684 2.345-3.988 5.584-3.988 5.584-1.255.138-2.607.99-3.48 2.195l-1.705-.018-1.234-13.392-5.383-.06c.255-4.26 4.403-4.455 4.403-4.455Z" />
      <text fill="#fff" x="58" y="22" fontWeight="bold" fontSize="30" textAnchor='middle'>{sign}</text>
      <text fill="#fff" x="30" y="29" fontWeight="bold" fontSize="22" textAnchor='middle'>{sign}</text>
      <text fill="#fff" x="55" y="46" fontWeight="bold" fontSize="18" textAnchor='middle'>{sign}</text>
    </svg>
  )
}
export default GHGIcon;