import React from 'react'

interface Tag {
  text: string
  backgroundColor?: string
  borderColor?: string
  textColor?: string
}

const MarqueeTags: React.FC<Tag> = ({ text, backgroundColor, borderColor, textColor }) => {
  const marqueeStyles: React.CSSProperties = {
    backgroundColor: backgroundColor || 'white', // Default to blue if not provided
    borderColor: borderColor || 'white', // Default to black if not provided
    color: textColor || 'black', // Default to white if not provided
  }
  return (
    <>
      <span
        style={marqueeStyles}
        className="inline-block px-8 py-4 mr-10 rounded-[54px] border text-3xl leading-none"
      >
        {text}
      </span>
    </>
  )
}

export default MarqueeTags
