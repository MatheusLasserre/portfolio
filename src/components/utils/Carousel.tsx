import React, { useEffect, useRef } from 'react'
import { FlexColumn, FlexRow, IconBackgroundNormalizer } from './Utils'
import { LeftArrowIcon, RightArrowIcon } from './Icons'
type CarouselProps = {
  children: React.ReactNode[]
}
export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null)
  const translateRef = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = React.useState(0)
  const [itemWidth, setItemWidth] = React.useState(0)
  const handleResize = () => {
    if (ref.current) {
      setItemWidth(ref.current.offsetWidth)
      console.log(ref.current.offsetWidth)
    }
  }
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [ref.current])

  const handleCarouselClick = (direction: 'left' | 'right') => {
    if (!translateRef.current) return
    if (direction === 'left') {
      if (translateX === 0) return
      const toTranslate = translateX + itemWidth
      setTranslateX(toTranslate)
      console.log(toTranslate)
      translateRef.current.style.transform = `translateX(${toTranslate}px)`
    } else if (direction === 'right') {
      if ((translateX * -1) + itemWidth === translateRef.current.offsetWidth) return
      const toTranslate = translateX - itemWidth
      setTranslateX(toTranslate)
      console.log(toTranslate)
      translateRef.current.style.transform = `translateX(${toTranslate}px)`
    }
  }

  return (
    <FlexColumn
      width='100%'
      height='100%'
      maxWidth='unset'
      styles={{
        overflow: 'hidden',
        
      }}
      ref={ref}
    >
      <FlexRow
        width='auto'
        height='100%'
        maxWidth='unset'
        gap='0'
        horizontalAlign='flex-start'
        verticalAlign='flex-start'
        styles={{
          overflow: 'visible',
          opacity: itemWidth === 0 ? 0 : 1,
        transition: 'transform 250ms var(--BEZIER',
        }}
        ref={translateRef}
      >
        {children.map((child, index) => {
          return (
            <div style={{ width: `${itemWidth}px` }} key={index}>
              {child}
            </div>
          )
        })}
      </FlexRow>
      <FlexRow height='50px' verticalAlign='center'>
        <IconBackgroundNormalizer backgroundColor='white-90' color='neutral-400'padding='6px' width='30px'>
          <LeftArrowIcon onClick={() => handleCarouselClick('left')} />
        </IconBackgroundNormalizer>
        <IconBackgroundNormalizer backgroundColor='white-90' color='neutral-400' padding='6px' width='30px'>
          <RightArrowIcon onClick={() => handleCarouselClick('right')} />
        </IconBackgroundNormalizer>
      </FlexRow>
    </FlexColumn>
  )
}
