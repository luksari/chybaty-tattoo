import React from 'react'
import styled, { css } from 'styled-components';
import Image from 'gatsby-image';
import { navigate } from 'gatsby';
import { device } from '../helpers/mediaQueries';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`

const StyledImage = styled(Image)`
  width: 100%;
  img {
    padding: 0 45px;
    padding-bottom: 45px;
  }

  @media ${device.laptop} {
    width: 50%;
    margin-left: auto;
    img {
      padding: 0;
    }

    ${({ index }) => index % 2 === 1 && css`
      margin-left: 0;
      margin-right: auto;
    `}
  
    ${({ index }) => [1,3,5].includes(index) && css`
      margin-left: 70px;
      img {
        padding-right: 70px;
      }
    `}
    ${({ index }) => [4,6].includes(index) && css`
      margin-right: 70px;
      img {
        padding-left: 70px;
      }
    `}
  
    ${({ index }) => index === 0 && css`
      margin-top: -80px;
      width: 45%;
    `}
  
    ${({ index }) => index === 1 && css`
      width: 55%;
      margin-top: -350px;
    `}
  
    ${({ index }) => index === 2 && css`
      width: 60%;
      margin-top: 35px;
    `}
  
    ${({ index }) => index === 3 && css`
      width: 40%;
    `}
  
    ${({ index }) => index === 4 && css`
      width: 60%;
      position: relative;
      margin-top: -400px;
      margin-right: 150px;
      img {
        padding-left: 150px;
      }
    `}
  
    ${({ index }) => index === 5 && css`
      width: 50%;
      height: 800px
    `}
  
    ${({ index, total }) => index === total - 1 && css`
      width: 75%;
    `}
  }
  
`

export const BackgroundImage = styled(Image)`
  z-index: -1;
  position: absolute !important;
  ${({ index }) => index === 0 && css`
    width: 55%;
    height: 900px;
    left: 0;
    top: 0;
  `}

  ${({ index }) => index === 3 && css`
    width: 60%;
    height: 700px;
    right: 0;
    top: 1800px;
  `}

  ${({ index }) => index === 6 && css`
    width: 70%;
    height: 1100px;
    left: 0;
    bottom: 0;
  `}
`

const CTAContainer = styled.div`
  background: #fff;
  padding: 100px 72px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 25px -10px #000;
  justify-content: center;
  align-items: center;
  right: 50%;
  bottom: 0;
  z-index: 5;
  margin: 0 45px;
  margin-bottom: 45px;
  @media ${device.laptop} {
    position: absolute;
    margin: 0;
    bottom: 1000px;
    padding: 100px 72px;
    right: 300px;
  }
`

const CTATitle = styled.h2`
  width: 100%;
  color: #000;
  font-family: 'Unica One', sans-serif;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: 64px;
  font-weight: 400;
  text-align: center;
`

const CTAButton = styled.button`
  width: 100%;
  color: #000;
  font-family: 'Unica One', sans-serif;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: 18px;
  font-weight: 400;
  background: #fff;
  border: 1px solid #000;
  padding: 20px 8px;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.15s ease-out, color 0.15s ease-out;
  &:hover, &:focus {
    color: #fff;
    background: #000;
    outline: none;
  }
  @media ${device.laptop} {
    width: 70%;
  }
`

export const ArtistPhotosGrid = ({ photos, backPhotos }) => {
  return (
    <Wrapper>
      {photos.map(({ node }, index) => (
        <>
          <StyledImage 
            key={node.name}
            fluid={node.childImageSharp.fluid}
            index={index}
            total={photos.length}
          />
          {index === 0 && <BackgroundImage key={backPhotos[0].node.name} fluid={backPhotos[0].node.childImageSharp.fluid} index={index} />}
          {index === 3 && <BackgroundImage key={backPhotos[1].node.name} fluid={backPhotos[1].node.childImageSharp.fluid} index={index} />}
          {index === 5 && (
            <CTAContainer >
              <CTATitle>Chcesz podobny?</CTATitle>
              <CTAButton onClick={() => navigate('/contact')}>Skontaktuj się z nami</CTAButton>
            </CTAContainer>)
          }
          {index === 6 && <BackgroundImage key={backPhotos[2].node.name} fluid={backPhotos[2].node.childImageSharp.fluid} index={index} />}
        </>
      
      ))}
    </Wrapper>
  )
}
