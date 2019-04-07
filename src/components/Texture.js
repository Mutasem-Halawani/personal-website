import React from "react"
import Lines from "react-svg-textures/es/Paths"

/**
 * {@link https://github.com/mattboldt/typed.js}
 */
const Texture = () => (
  <svg className="svg">
    <Lines
      id='footerPattern'
      d='woven'
      stroke='gray'
      strokeWidth={1}
      orientation='vertical'
      size={7}
      shapeRendering='circle'
      background='#3B4DD1'
    />
    <circle cx='50%' cy='90%' r='100%' fill='url(#footerPattern)' />
  </svg>
);

export default Texture