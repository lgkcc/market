import styled from "styled-components";

export const LeftSideBarWrapper = styled.div<{ isOpen: boolean }>`
  width: 90px;
  height: ${props => props.isOpen ? "80px" : "100vh"};
  box-shadow: ${props => props.isOpen ? "2px 2px 4px 2px #00000040" : "2px 0 4px 2px #00000040"};
  overflow: hidden;
  position: fixed;
  background-color: #FCFBFF;
  top: 0;
  left: 0;
  transition: 1s;
`
export const LeftSideBarInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 1.55vh 0;

  &:hover {
    background: rgba(255, 0, 0, 0.63);
  }
`
export const Image = styled.img`
  transform: scale(1.2);

`
export const BurgerMenu = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  transition-duration: 1s;
  margin: 35px auto 0 auto;
  cursor: pointer;
`
export const BurgerMenuInner = styled.span<{ isOpen: boolean }>`
  height: 7px;
  width: 60px;
  background-color: ${props => props.isOpen ? "rgb(0,0,0)" : "transparent"};
  border-radius: 20px;
  position: absolute;
  transition-duration: ${props => props.isOpen ? ".25s" : ".1s"};
  transition-delay: .25s;
  &:before{
    left: 0;
    position: absolute;
    top: ${props => props.isOpen ? "-15px" : "0"};
    height: 7px;
    width: 60px;
    background-color: rgb(0,0,0);
    content: "";
    border-radius: 20px;
    transition-duration: .25s;
    transition: ${props => props.isOpen ? "transform .25s, top .25s .25s" : "top .25s, transform .25s .25s"};
    transform: ${props => props.isOpen ? "" : "rotateZ(-45deg)"};
  }
  &:after{
    left: 0;
    position: absolute;
    top: ${props => props.isOpen ? "15px" : "0"};
    height: 7px;
    width: 60px;
    background-color: rgb(0,0,0);
    content: "";
    border-radius: 20px;
    transition-duration: .25s;
    transition: ${props => props.isOpen ? "transform .25s, top .25s .25s" : "top 0.4s, transform .25s .25s"};
    transform: ${props => props.isOpen ? "" : "rotateZ(45deg)"};
  }
`