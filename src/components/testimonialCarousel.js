import React, { useState } from "react"
import styled from "styled-components"
import StarRatings from "react-star-ratings"
import { device } from '../helpers/mediaQueries';
import { useKeenSlider } from 'keen-slider/react'
import testimonials from '../data/testimonials.json';

const TestimonialHeadline = styled.h1`
  padding: 50px 80px 0 80px;
  font-size: 47px;
  letter-spacing: 10px;
  color: white;
  font-weight: 300;
  text-transform: uppercase;
  @media ${device.mobileS} {
    text-align: center;
  }
  @media ${device.laptop} {
    text-align: right;

  }
`

const SlidesWrapper = styled.div`
  height: 100%;
  display: flex;
  margin-bottom: 50px;
`

const CardWrapper = styled.div `
  display: flex;
  padding: 50px;
  justify-content: center;
`

const Card = styled.div`
  border: 1px solid #707070;
  border-radius: 12px;
  background-color: black;
  color: #707070;
`

const CardHeader = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #707070;
  font-family: "Exo 2", sans-serif;
`

const CardHeaderName = styled.p`
  font-size: 16px;
  font-weight: bold;

`

const CardHeaderDate = styled.p`
  font-size: 16px;
  font-weight: 300;
`
const CardBody = styled.p`
  position: relative;
  padding: 15px;
  font-size: 16px;
  font-family: "Exo 2", sans-serif;
`

const StyledArrow = styled.button`
  position: absolute;
  font-size: 35px;
  top: 50%;
  width: 54px;
  height: 54px;
  transform: translate(0, -50%);
  cursor: pointer;
  border: 1px solid #707070;
  border-radius: 50%;
  outline: 0;
  background-color: black;
  color: #707070;
  z-index: 1;
`
const StyledNextArrow = styled(StyledArrow)`
  right: 20px;
`

const StyledPrevArrow = styled(StyledArrow)`
  left: 20px;
  z-index: 10;
`

function NextArrow(props) {
  const { onClick } = props
  return <StyledNextArrow onClick={onClick}>&gt;</StyledNextArrow>
}

function PrevArrow(props) {
  const { onClick } = props
  return <StyledPrevArrow onClick={onClick}>&#60;</StyledPrevArrow>
}

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    spacing: 0,
    slidesPerView: 1,
    mode: "snap",
    breakpoints: {
      '(min-width: 1200px)': {
        slidesPerView: 3,
      }
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  return (
    <>
      <TestimonialHeadline>OPINIE</TestimonialHeadline>
      <SlidesWrapper ref={sliderRef} className='keen-slider'>
        {testimonials.map((testimonial, idx) => (
          <CardWrapper className='keen-slider__slide' key={idx}>
            <Card>
              <CardHeader>
                <div>
                  <CardHeaderName>{testimonial.name}</CardHeaderName>
                  <CardHeaderDate>{testimonial.date}</CardHeaderDate>
                </div>
                <StarRatings
                  rating={testimonial.rating}
                  starRatedColor="#FFFFFF"
                  starDimension="15px"
                  starSpacing="5px"
                  starEmptyColor="#545454"
                />
              </CardHeader>
              <CardBody>
                {testimonial.description}
              </CardBody>
            </Card>
          </CardWrapper>
        ))}
        {slider && (
          <>
            {
              currentSlide !== 0 && 
              <PrevArrow
                onClick={e => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />
            }
            {
              currentSlide !== slider.details().size -1 && 
              <NextArrow
                onClick={e => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
              />
            }
          </>
        )}
      </SlidesWrapper>
      
    </>
  )
}

export default TestimonialCarousel
