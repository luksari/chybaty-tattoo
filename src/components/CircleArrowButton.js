import React, { memo } from 'react';
import styled from "styled-components"

export const Arrow = styled.span`
    font-size: 64px;
    width: 100%;
    height: 100%;
    color: #707070;
    font-weight: 300;
`;

export const CircleOutline = styled.button`
    transform: ${({ rotation }) => `rotate(${ rotation }deg)`};
    background: transparent;
    border: 1px solid #707070;
    outline: none;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    transition: background .3s ease-out;
    cursor: pointer;
    &:hover, &:focus {
      border-color: #fff;
      color: #fff;
      background: #7070702b;
      ${Arrow} {
        color: #fff;
      }
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const BtnLabel = styled.p`
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: 400;
    font-family: 'Unica One';
    color: white;
    text-transform: uppercase;
    text-align: center;
    width: 80%;
`
export const CircleArrowButton = memo(({ rotation = 90, label, handleClick, className }) => (
    <BtnContainer className={className}>
        {label && <BtnLabel>{label}</BtnLabel>}
        <CircleOutline onClick={handleClick} rotation={rotation}>
            <Arrow >
                >
            </Arrow>
        </CircleOutline>
    </BtnContainer>
));
