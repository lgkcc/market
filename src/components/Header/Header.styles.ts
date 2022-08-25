import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #FCFBFF;
  height: 75px;
  position: fixed;
  top: 0;
  right: 0;
  left: 90px;
  z-index: 100001;
  box-shadow: 6px 2px 4px 2px #00000040;
`
export const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Logo = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-left: 70px;
`
export const RightBar = styled.div`
  display: flex;
  align-items: center;
`
export const HeaderMenu = styled.div`
  background-color: #ff7a7a;
  width: 90px;
  height: 75px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  &:after {
    border: 1px black solid;
    position: absolute;
    content: "";
    height: 40px;
  }
`
export const Image = styled.img`
  cursor: pointer;
  padding: 10px 3px;
  max-width: 34px;
  border-radius: 10px;
  &:hover {
    background: rgba(0, 0, 0, 0.10);
  }
`



