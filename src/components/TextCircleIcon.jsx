import React from 'react';

const TextCircleIcon = ({ label, bgColor = '#FFAA2D' }) => {
  const text = label.substring(0, 2)
  return (
    <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill={bgColor} />
      <text fill="black" x="16" y="24" fontWeight="bold" fontSize="22" textAnchor="middle">
        {text}
      </text>
    </svg>
  )
}
export default TextCircleIcon;