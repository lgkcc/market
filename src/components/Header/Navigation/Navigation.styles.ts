import styled from "styled-components";

export const NavigationWrapper = styled.nav`
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