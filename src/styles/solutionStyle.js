import styled from "styled-components";

export const SolutionContainer = styled.div`
  display : flex;
  position: relative;
  flex-direction : column;
  align-items : center;

  hr{
    width : 80vw;
    height : 0.15rem;
    background-color : ${props => props.theme.colors.colorAccent};
    border : none;
  }

  h3 {
    margin : 3rem 0 2rem 0;
    font-size : 2.5rem;
    color : ${props => props.theme.colors.colorAccent};
  }
`

export const SolutionItemContainer = styled.div`
  width : 85vw;
  margin : 0 auto;
  padding : 1rem 5rem;
  display : grid;
  grid-template-columns : repeat(4, 1fr);
  grid-template-rows : repeat(2, 1fr);
  row-gap : 2rem;
  justify-items: center;

`
export const SolutionItemBox = styled.div`
  width : 25rem;
  height : 15rem;
  margin : 1rem 0;
  background-color : ${props => props.theme.colors.colorBg};
  color : ${props => props.theme.colors.colorMains};
  border : 0.2rem solid ${props => props.theme.colors.colorAccent};
  border-radius : 2rem;
  padding : 1rem 1.5rem;
  .hover {
    display : none;
  }

  .blogPlatform {
    color : ${props => props.theme.colors.blogPlatform};
    font-family : 'Poppins_Light';
    margin : 0 0 0.5rem;
    padding : 0 0.8rem;

  }
  .blogTitle {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size : 1.2rem;
    font-family : "Poppins_SemiBold";
    font-weight : bold;
    padding : 0 0.8rem;
  }
  .snippet {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 4 ;
    -webkit-box-orient: vertical;
    padding : 0 0.5rem;
  }

  &:hover {
    background-color : ${props => props.theme.colors.colorAccent}; 
    hr {background-color : ${props => props.theme.colors.colorBg};}
    .uploadDate {color : ${props => props.theme.colors.colorBg};}
    .notHover {display : none}
    .hover {display : block}
  }
`

export const SolutionImgBox = styled.div`
  height : 3rem;
  display : inline-flex;
  flex-direction : column;
  align-items : flex-end;
  justify-content: flex-end;
  margin : 0 0 2.5rem 0;
  div {
    position : relative;
    img {
      position : absolute;
      width : 5rem;
      border-radius : 10rem;
      top : -2.3rem;
      left : 0.5rem;
      background-color : #ffffff;
    }
  
    hr {
      width : 21.6rem;
      height : 0.15rem;
      background-color : ${props => props.theme.colors.solutionItemLine};
      border : none;
      margin : 0.3rem 0 0 0;
  }


`
