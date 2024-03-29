import React from 'react'

interface MapIframeProps {
  src: string
  width?: string
  height?: string
}

const MapIframe = ({ src, width, height }: MapIframeProps) => {
  const iframeStyles = {
    border: '0',
    width: width || '100%',
    height: height || '800px',
  }

  const iframeOptions = {
    allowFullScreen: true,
    referrerPolicy: 'no-referrer-when-downgrade',
  }

  return (
    <div className="map-iframe">
      <iframe
        src={src}
        style={iframeStyles}
        {...(iframeOptions as React.DetailedHTMLProps<
          React.IframeHTMLAttributes<HTMLIFrameElement>,
          HTMLIFrameElement
        >)}
      ></iframe>
    </div>
  )
}

export default MapIframe
