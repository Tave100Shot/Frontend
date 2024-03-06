import styled from "styled-components";

export const TaveAnimationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 40rem;
  margin : 5rem 0 3rem 0;

  .text {
    font-size: 9.5rem;
    height : 15rem;
    letter-spacing: -.01em;
    line-height: 100%;
    padding: 0 0 0 8rem;
    
    width: 100%;
    color: ${props => props.theme.colors.colorMain};
    background: linear-gradient(to right, ${props => props.theme.colors.colorAccent}, ${props => props.theme.colors.colorAccent}) no-repeat;
    background-clip: text;
    background-size: 0%;
    transition: background-size cubic-bezier(.1,.5,.5,1) 0.5s;
    
    border-bottom: none;
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
  }

  button {
    position: absolute;
    left : 0;
    padding : 0 0 0 8rem;
    height: 100%;
    background-color: ${props => props.theme.colors.colorAccent};
    color: ${props => props.theme.colors.colorOpposite};
    font-size: 9.5rem;
    border : none;
    cursor : pointer;
    
    clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
    transform-origin: center;
    transition: all cubic-bezier(.1,.5,.5,1) 0.7s;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text1 {
    button {
      width: 55%;
    }
  }
  .text2 {
    button {
      width: 75%;
    }
  }
  .text3 {
    button {
      width: 95%;
    }
  }
  
  .text:hover > button {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }

`