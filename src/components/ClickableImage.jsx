import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  .gatsby-image-wrapper {
    cursor: pointer;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &::before {
      z-index: 1;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #000;
      top: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.2s ease-out;
    }
    img {
      transform: scale(1);
      transform-origin: center center;
      transition: transform 0.2s ease-out, opacity 500ms ease !important;
    }
    &:hover {
      &::before {
        opacity: 0.3;
      }
      img {
        transform: scale(1.3);
      }
    }
  }
`

export const ClickableImage = ({ className, onClick, ...rest }) => {
  return (<ImageWrapper onClick={onClick} className={className}>
    <Image {...rest}/>
  </ImageWrapper>)
}
