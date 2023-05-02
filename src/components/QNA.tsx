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
    </QNAcontainer>
  );
};

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
  background-color: red;
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
              <ListItem onClick={onOptionSisulClicked("fun city", 1)}>
                fun city
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("알앤비", 2)}>
                알앤비
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("랩", 3)}>랩</ListItem>
              <ListItem onClick={onOptionSisulClicked("락", 4)}>락</ListItem>
              <ListItem onClick={onOptionSisulClicked("트로트", 5)}>
                트로트
              </ListItem>
              <ListItem onClick={onOptionSisulClicked("인디", 6)}>
                인디
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
    background-color: whitesmoke;
    border: 1px solid gray;
  }
`;
