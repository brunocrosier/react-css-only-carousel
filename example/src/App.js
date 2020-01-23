import React, { Component } from "react"

import Carousel from "react-css-only-carousel"

export default class App extends Component {
  render() {
    return (
      <Carousel
        images={[
          "https://i.picsum.photos/id/308/500/900.jpg",
          "https://i.picsum.photos/id/301/900/800.jpg",
          "https://i.picsum.photos/id/209/800/600.jpg",
          "https://i.picsum.photos/id/109/800/600.jpg",
          "https://i.picsum.photos/id/409/800/600.jpg"
        ]}
        slideHeight="500px" // @optional @default = "300px"
        gapBetweenSlides="0px" // @optional @default = "50px"
        arrowsColor="rgba(0,0,255,0.3)"
        scrollBarHeight="15px" // @optional @default = "10px"
        scrollBarTrackColor="rgba(0,0,0,0.1)" // @optional @default = "transparent"
        scrollBarThumbColor="orange" // @optional @default = "rgba(0,0,0,0.
        scrollBarBorderRadius="10px" // @optional (does not work on Firefox) @default = "10px"
        hideArrows
      />
    )
  }
}
