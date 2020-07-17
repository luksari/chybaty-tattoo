import React from 'react';
import Image from 'gatsby-image';
import styled, { css } from 'styled-components';
import {
  motion
} from "framer-motion";

const ImageWrapper = styled.div`
  .gatsby-image-wrapper {
      width: 100%;
      height: 100%;
      overflow: hidden;
      &::after {
        content: '';
        z-index: 1;
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
        &::after {
          opacity: 0.3;
        }
        &::before {
          transform: scale(1.1);
        }
        img {
          transform: scale(1.3);
        }
      }
      ${({ onClick, isClickable }) => isClickable 
         ? css`
            cursor: ${onClick ? 'pointer' : 'not-allowed'};
         ` 
         : css`
            cursor: 'default';
         `
      
      }
      ${({ onClick, isClickable }) => !onClick && isClickable && css`
        &::before {
          transform-origin: center center;
          transform: scale(0);
          transition: transform 200ms ease-out;
          z-index: 2;
          color: #fff;
          font-size: 72px;
          text-transform: uppercase;
          font-family: 'Unica One', sans-serif;
          content: 'Wkrótce';
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}
  }
`

export const CustomImage = ({ 
  className, 
  onClick, 
  id, 
  isClickable, 
  ...rest
 }) => {  
  return (
    <ImageWrapper
      isClickable={isClickable}
      onClick={onClick ? onClick : undefined} 
      id={id}
      className={className}
    >
      <Image {...rest}/>
    </ImageWrapper>
  )
}
