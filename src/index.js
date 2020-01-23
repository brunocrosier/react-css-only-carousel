import React from "react"

import styles from "./styles.css"

export default function App({
  images,
  slideHeight,
  scrollBarHeight,
  scrollBarTrackColor,
  scrollBarThumbColor,
  gapBetweenSlides,
  scrollBarBorderRadius,
  hideArrows,
  arrowsColor
}) {
  function ucv(prop, cssVar) {
    if (prop) {
      document.documentElement.style.setProperty(cssVar, prop)
    }
  }

  if (document && document.documentElement) {
    ucv(slideHeight, "--react-css-only-carousel-slide-height")
    ucv(scrollBarHeight, "--react-css-only-carousel-scrollbar-height")
    ucv(scrollBarTrackColor, "--react-css-only-carousel-scrollbar-track-color")
    ucv(scrollBarThumbColor, "--react-css-only-carousel-scrollbar-thumb-color")
    ucv(gapBetweenSlides, "--react-css-only-carousel-gap-between-slides")
    ucv(
      scrollBarBorderRadius,
      "--react-css-only-carousel-scrollbar-border-radius"
    )
    ucv(arrowsColor, "--react-css-only-carousel-arrows-color")
  }

  return (
    <div className={styles.slider}>
      <button id={styles.prevButton} className={styles.sliderButton}>
        {!hideArrows && (
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            className={styles.arrows}
          >
            <path d="M12,24c6.6,0,12-5.4,12-12S18.6,0,12,0S0,5.4,0,12S5.4,24,12,24z M13.2,5L15,6.8L9.8,12l5.3,5.3L13.2,19l-7-7L13.2,5z" />
          </svg>
        )}
      </button>
      <div className={styles.slides}>
        {images &&
          images.map((imgSrc, i, ar) => (
            <div key={i} id={`slide-${i + 1}`} className={styles.slide}>
              <a
                href={`#slide-${i === 0 ? ar.length : i}`}
                className={`${styles.slideLink} ${styles.slidePrev}`}
              ></a>
              <img
                alt="slider image"
                className={styles.slideImage}
                src={imgSrc}
              />
              <a
                href={`#slide-${i === ar.length - 1 ? 1 : i + 2}`}
                className={`${styles.slideLink} ${styles.slideNext}`}
              ></a>
            </div>
          ))}
      </div>
      <button id={styles.nextButton} className={styles.sliderButton}>
        {!hideArrows && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={styles.arrows}
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19l-1.782-1.75 5.25-5.25-5.25-5.25 1.782-1.75 6.968 7-6.968 7z" />
          </svg>
        )}
      </button>
    </div>
  )
}
