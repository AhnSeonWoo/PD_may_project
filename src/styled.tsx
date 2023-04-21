import styled from "styled-components";

export const H1 = styled.h1`
  display: block;

  margin-bottom: 5px;
  text-align: center;
  letter-spacing: 5px;
  font-size: 16px;
  font-weight: 600;
`;

export const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  padding: 0 30px 0 30px;
  & > button {
    padding-bottom: 2px;
    border: none;
    text-decoration: none;
    background: none;
    padding-left: 7px;
    padding-right: 7px;

    .clicked {
      border-bottom: "3px solid #f00";
    }
  }
`;
