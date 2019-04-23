import React from "react"

const Column = ({ item, length }) => (
  <div
    style={{
      width: `calc( 100% / ${length} )`,
      display: `inline-block`,
    }}
  >
    {item.type === "list" && item.texts && (
      <ul>
        {item.texts.map(text => (
          <li key={`text-${Math.random()}`}>{text}</li>
        ))}
      </ul>
    )}
    {item.type === "image" && item.images && (
      <ul>
        {item.images.map(image => (
          <li key={`image-${Math.random()}`}>{image}</li>
        ))}
      </ul>
    )}
  </div>
)

const Slide = ({ slide }) => (
  <>
    <h2>{slide.title}</h2>
    <>
      {slide.data.map((item, index) => (
        <Column item={item} length={slide.data.length} key={`column-${index}`} />
      ))}
    </>
  </>
)

const Slides = ({ data }) => (
  <>
    {data.map((slide, index) => (
      <Slide slide={slide} key={`slide-${index}`} />
    ))}
  </>
)

export default Slides
