import styled from "styled-components";
import React, { useState } from "react";

export const QNA = () => {
  const btnList = ["문의", "칭찬", "불만", "제안", "기타"];
  const [clicked, setClicked] = useState<string>(btnList[0]);

  const toggleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(e.currentTarget.innerText);
  };

  return (
    <QNAcontainer>
      <CategoryDropDown />
      <Detbox>질문 유형</Detbox>
      <ButtonContainer>
        {btnList.map((val, idx) => {
          return (
            <QuestionButton
              key={idx}
              className={clicked === val ? "active" : ""}
              onClick={toggleButton}
            >
              {val}
            </QuestionButton>
          );
        })}
      </ButtonContainer>
      <Titlebox>제목</Titlebox>
      <Titleinput></Titleinput>
      <Detailbox>내용</Detailbox>
      <Detailinput></Detailinput>
      <Namebox>이름</Namebox>
      <Nameinput></Nameinput>
      <Numberbox>휴대폰 번호</Numberbox>
      <Numberinput1></Numberinput1>
      <Numberinput2></Numberinput2>
      <Emailbox>이메일 주소</Emailbox>
      <Emailinput></Emailinput>
    </QNAcontainer>
  );
};

const Emailbox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

const Emailinput = styled.input`
  width: 88%;
  height: 30px;
  font-size: 20px;
  border-radius: 0px;
  border: 1px solid;
`;

const Numberinput1 = styled.input`
  width: 18%;
  height: 30px;
  font-size: 20px;
  border-radius: 0px;
  border: 1px solid;
  margin-right: 5%;
`;

const Numberinput2 = styled.input`
  width: 65%;
  height: 30px;
  font-size: 20px;
  border-radius: 0px;
  border: 1px solid;
`;

const Numberbox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

const Nameinput = styled.input`
  width: 88%;
  height: 30px;
  font-size: 20px;
  border-radius: 0px;
  border: 1px solid;
`;

const Namebox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

const Detailinput = styled.input`
  width: 88%;
  height: 100px;
  font-size: 20px;
  border-radius: 0px;
  border: 1px solid;
`;

const Detailbox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

const Titleinput = styled.input`
  width: 88%;
  height: 30px;
  font-size: 20px;
  border-radius: 0px;
  border: 1px solid;
`;

const Titlebox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

const QNAcontainer = styled.div`
  margin-top: 16px;
  width: 100%;
`;

const Detbox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
`;

const DropContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`;

const DropDownImg = styled.img<{ clicked: boolean }>`
  width: 20px;
  align-self: flex-end;
  margin-right: 10px;
  height: 25px;
  transform: ${(props) => (props.clicked ? "scaleY(-1)" : "")};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 20px 0px 20px;

  .active {
    background-color: rgb(221, 217, 195);
    border: 4px solid gray;
    color: black;
  }
`;

const QuestionButton = styled.button`
  border: none;
  background-color: #9d896a;
  color: white;
  width: 18%;
  height: 40px;
  margin: 0 auto;
`;

const CategoryDropDown = () => {
  const [isOpenSisul, setIsOpenSisul] = useState<boolean>(false);
  const [sisul, setSisul] = useState<string>("항목을 선택해 주세요");
  const [isOpenSebu, setIsOpenSebu] = useState<boolean>(false);
  const [sebu, setSebu] = useState<string>("항목을 선택해 주세요");
  const onToggleSisul = () => {
    setIsOpenSebu(false);
    setIsOpenSisul(!isOpenSisul);
  };
  const onToggleSebu = () => {
    setIsOpenSebu(!isOpenSebu);
  };

  const onOptionSisulClicked = (value: string, index: number) => () => {
    setSisul(value);
    setIsOpenSisul(false);
  };

  const onOptionSebuClicked = (value: string, index: number) => () => {
    setSebu(value);
    setIsOpenSebu(false);
  };

  return (
    <>
      <DropContainer>
        <span>시설</span>
        <CategoryMenuBox onClick={onToggleSisul}>
          {sisul}
          <DropDownImg
            clicked={isOpenSisul}
            alt="iPhone_01"
            src="img/down.png"
          />
        </CategoryMenuBox>
      </DropContainer>
      {isOpenSisul && (
        <DropDownBoxWrap>
          <DropDownContainer>
            <>
              <ListItem onClick={onOptionSisulClicked("PARADISE CITY", 1)}>
                PARADISE CITY
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("HOTEL PARADISE", 2)}>
                HOTEL PARADISE
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("HOTEL ART PARADISO", 3)}>
                HOTEL ART PARADISO
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("CASINO", 4)}>
                CASINO
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("CIMER", 5)}>
                CIMER
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("CHROMA", 6)}>
                CHROMA
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("WONDERBOX", 7)}>
                WONDERBOX
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("PLAZA", 8)}>
                PLAZA
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("PARADISE ART SPACE", 9)}>
                PARADISE ART SPACE
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("STUDIO PARADISE", 10)}>
                STUDIO PARADISE
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("GROUP & WEDDINGS", 11)}>
                GROUP & WEDDINGS
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("MEMBERSHIP", 12)}>
                MEMBERSHIP
              </ListItem>
            </>
          </DropDownContainer>
        </DropDownBoxWrap>
      )}
      <div style={{ height: "5px" }}></div>
      <DropContainer>
        <span>세부 시설</span>
        <CategoryMenuBox onClick={onToggleSebu}>
          {sebu}
          <DropDownImg
            clicked={isOpenSebu}
            alt="iPhone_01"
            src="img/down.png"
          />
        </CategoryMenuBox>
      </DropContainer>
      {isOpenSebu && (
        <DropDownBoxWrap>
          <DropDownContainer>
            <ListItem onClick={onOptionSebuClicked("발라드", 1)}>
              발라드
            </ListItem>
            <ListItem onClick={onOptionSebuClicked("알앤비", 2)}>
              알앤비
            </ListItem>
            <ListItem onClick={onOptionSebuClicked("랩", 3)}>랩</ListItem>
            <ListItem onClick={onOptionSebuClicked("락", 4)}>락</ListItem>
            <ListItem onClick={onOptionSebuClicked("트로트", 5)}>
              트로트
            </ListItem>
            <ListItem onClick={onOptionSebuClicked("인디", 6)}>인디</ListItem>
          </DropDownContainer>
        </DropDownBoxWrap>
      )}
    </>
  );
};

export default CategoryDropDown;

const CategoryMenuBox = styled.div`
  width: 259px;
  font-weight: 80%;
  font-size: 18px;
  text-align: left;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

const DropDownBoxWrap = styled.div`
  position: absolute;
  width: 400px;
  padding-right: 30px;
  display: flex;
  justify-content: flex-end;
`;

const DropDownContainer = styled.ul`
  width: 70%;
  height: 100%;
  z-index: 1;
  list-style: none;
  overflow-y: scroll;
`;

const ListItem = styled.li`
  position: relative;
  text-align: left;
  width: 100%;
  font-size: 18px;
  padding-left: 10px;
  z-index: 1;
  background: white;
  border-style: solid;
  border-color: black;
  border-width: 0px 1px 1px 1px;

  :hover {
    background-color: #9d896a;
    border: 1px solid gray;
    color: white;
  }
`;
