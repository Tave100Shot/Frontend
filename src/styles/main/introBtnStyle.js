import styled, { keyframes } from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

export const IntroBtn = styled.button`
    width : 5.5rem;
    height : 5.5rem;
    background-color : ${props => props.theme.colors.colorBg};
    border : none;
    position : absolute;
    cursor : pointer;
    bottom : 10rem;
    right : 5rem;

    img {
      width : 100%;
      height : 100%;
    }
`
export const floatingMotion = keyframes`
    0% {bottom : 10rem;} 
	100% {bottom: 11rem;}
`

export const IntroModalBox = styled.div`
    width : 36rem;
    height : 17rem;
    background-color : ${props => props.theme.colors.colorBg};
    box-shadow:  0 0 0.5rem 0.5rem ${props => props.theme.colors.colorShadow};
    border-radius : 2rem;
    position : absolute;
    cursor : pointer;
    bottom : 10rem;
    right : 5rem;
    cursor : default;
    padding : 1.8rem;
    animation: ${floatingMotion} 1s linear infinite alternate;
    &:hover {
        animation: none;
    }

`

export const TitleBox = styled.div`
    width : 100%;
    justify-content : space-around;
    display : flex;
    margin : 0 0 1.5rem 0;
    align-items : center;

    h2 {
        font-family : 'WantedSans_Medium';
        font-size : 1.7rem;
        letter-spacing : 0.05rem;
    }
`
export const TextContainer = styled.div`
    margin : 0 0 1.5rem 0;

`
export const TextBox = styled.div`
    width : 100%;
    display : flex;
    margin : 0 0 0.5rem 0;
    align-items : center;
    p {
        font-family : 'WantedSans_Regular';
        font-size : 1.35rem;
        letter-spacing : 0.05rem;
    }
`
export const IntroPageBox = styled.div`
    width : 100%;
    display : flex;

    button {
        width : 13rem;
        height : 3rem;
        background-color : ${props => props.theme.colors.colorAccent};
        color : ${props => props.theme.colors.colorBg};
        border : none;
        border-radius : 1rem;
        font-size : 1.5rem;
        font-family : 'WantedSans_SemiBold';
        letter-spacing : 0.05rem;

    }
    img {
        position : absolute;
        width : 9.5rem;
        right : 1rem;
        bottom : 0rem;
    }
`

export const ModalCloseBtn = styled(IoIosCloseCircle)`
    font-size : 2rem;
    color : ${props => props.theme.colors.colorShadow};
`
export const CheckIcon = styled(IoIosCheckmarkCircle)`
    font-size : 2.3rem;
    color : ${props => props.theme.colors.colorAccent};
    margin : 0 1rem 0 0;
`
