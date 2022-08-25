import styled from "styled-components";


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
export const SearchInput = styled.input<{openSearch: boolean}>`
  cursor: ${props => props.openSearch ? "text" : "pointer"};
  transition: .6s;
  width: ${props => props.openSearch ? "500px" : "38px"};
  box-shadow: 0 2px 4px 2px #00000040 inset;
  padding: ${props => props.openSearch ? "8px 40px" : "8px 5px"}; 
  border-radius: 10px;
  font-size: 18px;
  position: relative;
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