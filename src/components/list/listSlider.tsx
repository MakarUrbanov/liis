import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IStatesProps } from '@components/list/listInterfaces'

const ListSlider = () => {
  const cityPictures: any = useSelector<IStatesProps>(
    (state) => state.cityPictures
  )
  const [maxWidth, setMaxWidth] = useState(0)
  const [position, setPosition] = useState(0)
  //-460
  const [isMoveRight, setIsMoveRight] = useState(false)
  const [isMoveLeft, setIsMoveLeft] = useState(false)

  useEffect(() => {
    setMaxWidth(cityPictures.length * 170 - 186 * 3)
  }, [])

  useEffect(() => {
    if (isMoveRight) {
      const myInterval = setInterval(() => {
        if (position > -maxWidth) {
          setPosition((prev) => prev - 10)
        }
      }, 70)
      return () => clearInterval(myInterval)
    }
  }, [isMoveRight])

  useEffect(() => {
    if (isMoveLeft) {
      const myInterval = setInterval(() => {
        if (position < 0) {
          setPosition((prev) => prev + 10)
        }
      }, 70)
      return () => clearInterval(myInterval)
    }
  }, [isMoveLeft])

  useEffect(() => {
    if (position < -maxWidth) {
      return setIsMoveRight(false)
    }
    if (position >= 0) {
      return setIsMoveLeft(false)
    }
  }, [position])

  // @ts-ignore
  return (
    <div className="list__slider">
      <div
        style={{ opacity: position <= -maxWidth ? 0 : 1 }}
        className="list__slider_shadow-right"
        onMouseEnter={() => setIsMoveRight(true)}
        onMouseLeave={() => setIsMoveRight(false)}
      />
      <div
        className="list__slider_shadow-left"
        style={{ opacity: !position ? 0 : 1 }}
        onMouseEnter={() => setIsMoveLeft(true)}
        onMouseLeave={() => setIsMoveLeft(false)}
      />
      <div style={{ left: position }} className="list__slider-wrapper">
        {cityPictures.map((item: string, id: number) => {
          return (
            <div
              key={id}
              style={{
                background: `url(${item}) center center no-repeat`,
                backgroundSize: 'cover',
                width: '160px',
              }}
              className="list__slider-item"
            />
          )
        })}
      </div>
    </div>
  )
}

export default ListSlider
