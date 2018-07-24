import React from 'react'

var Image = (props) => {
    const src = props.image.src
    const alt = props.image.alt
    const width = props.image.width
    const height = props.image.height
    return (
      <img src={src} alt={alt} width={width} height={height} className="image"/>
    );
}

export default Image