import styled from "styled-components";

export const Item = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;
  box-shadow: 0 4px 4px 0 #00000040;
  border-radius: 6px;
  overflow: hidden;
  :hover:after {
    content: "";
    background: rgba(0, 0, 0, .085);
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
  }
`
export const Image = styled.img`
  width: 100%;
`
export const ItemTitle = styled.h2`
  position: absolute;
  z-index: 2;
  width: 100%;
  bottom: 0;
  text-align: center;
  font-weight: 400;
  background: #FFFFFFF2;
  padding: 7px 0;
  transition: all .2s ease-in-out;
  ${Item}:hover &{
    padding-bottom: 20px;
  }
`