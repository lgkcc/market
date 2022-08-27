import styled from "styled-components";

export const AuthWrapper = styled.div`
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  background: #FCFBFF;
  box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`
export const AuthInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`
export const Tabs = styled.ul`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px black solid;
  padding: 10px 5px;
`
export const Tab = styled.li<{ status: boolean }>`
  font-weight: 600;
  color: ${props => props.status && "#ff7a7a"};
  cursor: pointer;
`
export const Label = styled.label`
  display: block;
  margin-bottom: 15px;
`
export const Input = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 7px 10px;
  border: 1px #adadad solid;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #ff7a7a;
  }

  &:last-child {
    margin-bottom: 0;
  }
`
export const Password = styled.div`
  position: relative;
`
export const PasswordChange = styled.div`
  position: absolute;
  cursor: pointer;
  right: 0;
  top: 12px;
`
export const Submit = styled.button`
  width: 100%;
  background: #ff7a7a;
  border-radius: 4px;
  border: none;
  font-weight: 700;
  font-size: 20px;
  padding: 8px;
`
export const Error = styled.span`
  color: red;
  font-size: 12px;
`
