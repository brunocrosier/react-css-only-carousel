# react-css-only-carousel

> A beautifully simple CSS-only React component for a responsive image carousel

[![NPM](https://img.shields.io/npm/v/react-css-only-carousel.svg)](https://www.npmjs.com/package/react-css-only-carousel)

## Install

```bash
npm install --save react-css-only-carousel
```

## Usage

```javascript
import React from "react"

import Carousel from "react-css-only-carousel"

const Example = () => {
  return (
    <Carousel
      images={[
        "https://i.picsum.photos/id/308/500/900.jpg",
        "https://i.picsum.photos/id/301/900/800.jpg",
        "https://i.picsum.photos/id/209/1800/600.jpg",
        "https://i.picsum.photos/id/109/1200/600.jpg",
        "https://i.picsum.photos/id/409/1400/600.jpg"
      ]}
      slideHeight="500px" // @optional @default = "300px"
      gapBetweenSlides="0px" // @optional @default = "50px"
      arrowsColor="rgba(0,0,255,0.3)" // @optional @default = "rgba(255,255,255,0.4)"
      hideArrows={false} // @optional @default = false
      scrollBarHeight="15px" // @optional @default = "10px"
      scrollBarTrackColor="rgba(0,0,0,0.1)" // @optional @default = "transparent"
      scrollBarThumbColor="orange" // @optional @default = "rgba(0,0,0,0.
      scrollBarBorderRadius="10px" // @optional (does not work on Firefox) @default = "10px"
    />
  )
}
```

## Demo

[Live Example](https://d3nyw.csb.app)

## License

MIT © [brunocrosier](https://github.com/brunocrosier)
