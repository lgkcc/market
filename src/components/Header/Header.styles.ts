import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #FCFBFF;
  height: 80px;
  position: fixed;
  top: 0;
  right: 0;
  left: 90px;
  z-index: 2;
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
export const SearchWrapper = styled.div<{openSearch: boolean}>`
  position: relative;
  &:after {
    border: 1px solid rgba(0, 0, 0, 0.54);
    position: absolute;
    content: "";
    height: 28px;
    display: ${props => props.openSearch ? "block" : "none"};
    right: 35px;
    bottom: 5px;
    
  }
`
export const Search = styled.input<{openSearch: boolean}>`
  cursor: ${props => props.openSearch ? "text" : "pointer"};
  transition: .6s;
  width: ${props => props.openSearch ? "500px" : "38px"};
  box-shadow: 0 2px 4px 2px #00000040 inset;
  padding: ${props => props.openSearch ? "8px 40px" : "8px 5px"}; 
  border-radius: 10px;
  font-size: 18px;
  position: relative;
`

export const Navigation = styled.nav`
  margin: 0 70px;
`
export const NavList = styled.ul`
  list-style: none;
  display: flex;
`
export const List = styled.li`
  margin-right: 22px;
  font-size: 24px;
  text-transform: uppercase;
  &:last-child{
    margin-right: 0;
  }
`
export const HeaderMenu = styled.div`
  background-color: rgba(255, 0, 0, 0.63);
  width: 90px;
  height: 80px;
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
export const ImageSearch = styled.img<{openSearch?: boolean}>`
  z-index: 1;
  &:first-of-type{
    cursor: pointer;
    position: absolute;
    display: ${props => props.openSearch ? "block" : "none"};
    left: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
  }
  &:last-of-type{
    min-width: 20px;
    min-height: 20px;
    display: block;
    cursor: pointer;
    position: absolute;
    right: 8px;
    top: 10px;
  }
`


