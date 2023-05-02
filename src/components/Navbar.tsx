import { Navbar as Nb } from "../styled";
import { useState } from "react";
import "./Navbar.css";

interface Props {
  clicked: number;
  children?: string;
  setClicked: (num: number) => void;
  setHeader: (str: string) => void;
  onClick?: () => void;
  className?: string;
}

interface StringNumberObject {
  [key: string]: number;
}
interface StringStringObject {
  [key: string]: string;
}

const NavButton = ({
  setClicked,
  setHeader,
  children,
  clicked,
  className,
}: Props) => {
  let buttonStyle = {};

  if (
    (children === "FAQ" && clicked === 1) ||
    (children === "Q&A" && clicked === 2) ||
    (children === "문의내역" && clicked === 3)
  ) {
    buttonStyle = { borderBottom: "3px solid rgb(221, 217, 195)" };
  }

  const tagToNum: StringNumberObject = {
    FAQ: 1,
    "Q&A": 2,
    문의내역: 3,
  };
  const tagToHeader: StringStringObject = {
    FAQ: "고객지원",
    "Q&A": "1:1문의하기",
    문의내역: "문의내역",
  };

  const handleNavButtonClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    if (!target) {
      return;
    }
    const header = target.innerText;
    console.log(tagToNum[header], header);
    setClicked(tagToNum[header] ? tagToNum[header] : -1);
    setHeader(tagToHeader[header]);
  };

  return (
    <button
      className={className}
      style={buttonStyle}
      onClick={handleNavButtonClick}
    >
      {children}
    </button>
  );
};

export const Navbar = ({ setHeader, setClicked, clicked }: Props) => {
  return (
    <Nb>
      <NavButton
        setClicked={setClicked}
        setHeader={setHeader}
        clicked={clicked}
      >
        FAQ
      </NavButton>
      |
      <NavButton
        setClicked={setClicked}
        setHeader={setHeader}
        clicked={clicked}
      >
        Q&A
      </NavButton>
      |
      <NavButton
        className="weight"
        setClicked={setClicked}
        setHeader={setHeader}
        clicked={clicked}
      >
        문의내역
      </NavButton>
    </Nb>
  );
};
