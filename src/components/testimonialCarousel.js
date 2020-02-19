import React from "react"
import styled from "styled-components"
import Slider from "react-slick"
import StarRatings from "react-star-ratings"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

const TestimonialHeadline = styled.h1`
  text-align: right;
  padding: 50px 80px 0 80px;
  font-family: "Unica One", cursive;
  font-size: 47px;
  letter-spacing: 10px;
  color: white;
  font-weight: 300;
`

const SliderContainer = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  background-color: black;
  color: white;
`
const CardWrapper = styled.div`
  padding: 50px;
`

const Card = styled.div`
  border: 1px solid #707070;
  border-radius: 12px;
`

const CardHeader = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 15px;
  border-bottom: 1px solid #707070;
`

const CardHeaderName = styled.p`
  font-size: 16px;
  font-weight: bold;
  font-family: "Exo 2", sans-serif;
`

const CardHeaderDate = styled.p`
  font-size: 16px;
  font-weight: 300;
  font-family: "Exo 2", sans-serif;
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
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  cursor: pointer;
  border: 1px solid #707070;
  border-radius: 50%;
  outline: 0;
  background-color: black;
  color: #707070;
`
const StyledNextArrow = styled(StyledArrow)`
  right: -20px;
`

const StyledPrevArrow = styled(StyledArrow)`
  left: -20px;
  z-index: 10;
`

function NextArrow(props) {
  const { onClick } = props
  return <StyledNextArrow onClick={onClick}>></StyledNextArrow>
}

function PrevArrow(props) {
  const { onClick } = props
  return <StyledPrevArrow onClick={onClick}>&#60;</StyledPrevArrow>
}

const TestimonialCarousel = () => {
  const settings = {
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }
  return (
    <React.Fragment>
      <TestimonialHeadline>OPINIE</TestimonialHeadline>
      <SliderContainer>
        <Slider {...settings}>
          <CardWrapper>
            <Card>
              <CardHeader>
                <div>
                  <CardHeaderName>Jose Stanley</CardHeaderName>
                  <CardHeaderDate>01/01/1961</CardHeaderDate>
                </div>
                <StarRatings
                  rating={3}
                  starRatedColor="#FFFFFF"
                  starDimension="15px"
                  starSpacing="5px"
                  starEmptyColor="#545454"
                />
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt.
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  color="white"
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    right: "15px",
                  }}
                />
              </CardBody>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <CardHeader>
                <div>
                  <CardHeaderName>Jose Stanley</CardHeaderName>
                  <CardHeaderDate>01/01/1961</CardHeaderDate>
                </div>
                <StarRatings
                  rating={3}
                  starRatedColor="#FFFFFF"
                  starDimension="15px"
                  starSpacing="5px"
                  starEmptyColor="#545454"
                />
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt.
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  color="white"
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    right: "15px",
                  }}
                />
              </CardBody>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <CardHeader>
                <div>
                  <CardHeaderName>Jose Stanley</CardHeaderName>
                  <CardHeaderDate>01/01/1961</CardHeaderDate>
                </div>
                <StarRatings
                  rating={3}
                  starRatedColor="#FFFFFF"
                  starDimension="15px"
                  starSpacing="5px"
                  starEmptyColor="#545454"
                />
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt.
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  color="white"
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    right: "15px",
                  }}
                />
              </CardBody>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <CardHeader>
                <div>
                  <CardHeaderName>Jose Stanley</CardHeaderName>
                  <CardHeaderDate>01/01/1961</CardHeaderDate>
                </div>
                <StarRatings
                  rating={3}
                  starRatedColor="#FFFFFF"
                  starDimension="15px"
                  starSpacing="5px"
                  starEmptyColor="#545454"
                />
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt.
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  color="white"
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    right: "15px",
                  }}
                />
              </CardBody>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <CardHeader>
                <div>
                  <CardHeaderName>Jose Stanley</CardHeaderName>
                  <CardHeaderDate>01/01/1961</CardHeaderDate>
                </div>
                <StarRatings
                  rating={3}
                  starRatedColor="#FFFFFF"
                  starDimension="15px"
                  starSpacing="5px"
                  starEmptyColor="#545454"
                />
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt.
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  color="white"
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    right: "15px",
                  }}
                />
              </CardBody>
            </Card>
          </CardWrapper>
          <CardWrapper>
            <Card>
              <CardHeader>
                <div>
                  <CardHeaderName>Jose Stanley</CardHeaderName>
                  <CardHeaderDate>01/01/1961</CardHeaderDate>
                </div>
                <StarRatings
                  rating={3}
                  starRatedColor="#FFFFFF"
                  starDimension="15px"
                  starSpacing="5px"
                  starEmptyColor="#545454"
                />
              </CardHeader>
              <CardBody>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt.
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  color="white"
                  style={{
                    position: "absolute",
                    bottom: "-5px",
                    right: "15px",
                  }}
                />
              </CardBody>
            </Card>
          </CardWrapper>
        </Slider>
      </SliderContainer>
    </React.Fragment>
  )
}

export default TestimonialCarousel
