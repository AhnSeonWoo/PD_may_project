import styled from "styled-components";
import React, { useState } from "react";
import { title } from "process";

export const QNA = () => {
  const btnList = ["문의", "칭찬", "불만", "제안", "기타"];
  const [clicked, setClicked] = useState<string>(btnList[0]);
  const [form, setForm] = useState({
    title: "",
    detail: "",
    name: "",
    number1: "",
    number2: "",
    email: "",
  });

  const toggleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(e.currentTarget.innerText);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name.includes("number")) {
      if (/^\d*$/.test(e.target.value) && e.target.value.length <= 8) {
        setForm({ ...form, [e.target.name]: e.target.value });
      }
    } else setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setForm({
      title: "",
      detail: "",
      name: "",
      number1: "",
      number2: "",
      email: "",
    });
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
      <Titleinput
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
      ></Titleinput>
      <Detailbox>내용</Detailbox>
      <Detailinput
        type="text"
        name="detail"
        value={form.detail}
        onChange={handleChange}
      ></Detailinput>
      <Namebox>이름</Namebox>
      <Nameinput
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      ></Nameinput>
      <Numberbox>휴대폰 번호</Numberbox>
      <Numberinput1
        type="number"
        name="number1"
        value={form.number1}
        onChange={handleChange}
      ></Numberinput1>
      <Numberinput2
        type="tel"
        name="number2"
        value={form.number2}
        onChange={handleChange}
      ></Numberinput2>
      <Emailbox>이메일 주소</Emailbox>
      <Emailinput
        type="email"
        name="email"
        value={form.email}
        placeholder="Paradise@paradian.com"
        onChange={handleChange}
      ></Emailinput>
      <SubmitBtn
        type="submit"
        onClick={() => {
          alert("정상적으로 등록되었습니다");
          clearForm();
        }}
      >
        등록
      </SubmitBtn>
    </QNAcontainer>
  );
};

const SubmitBtn = styled.button`
  width: 88%;
  height: 60px;
  background-color: rgb(221, 217, 195);
  margin-top: 30px;
  border: none;

  :hover {
    opacity: 0.7;
  }
`;

const Emailbox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

const Emailinput = styled.input`
  width: 88%;
  height: 30px;
  font-size: 14px;
  padding-left: 8px;
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

  & > input {
    text-align: left;
  }
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

  .disabled {
      background-color: lightgray;
    }
  }
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

  const category = {
    "항목을 선택해 주세요": ["항목을 선택해 주세요"],
    "PARADISE CITY": ["객실", "상품/이벤트", "시설", "다이닝", "기타"],
    "HOTEL PARADISE": ["상품/이벤트", "시설", "다이닝", "기타"],
    "HOTEL ART PARADISO": ["시설", "다이닝", "기타"],
    CASINO: ["객실", "상품/이벤트", "시설", "다이닝"],
    CIMER: ["객실", "상품/이벤트", "시설"],
    CHROMA: ["객실", "상품/이벤트", "시설", "다이닝", "기타"],
    WONDERBOX: ["객실", "상품/이벤트", "시설", "다이닝", "기타"],
    PLAZA: ["객실", "상품/이벤트", "시설", "다이닝", "기타"],
    "PARADISE ART SPACE": ["객실", "시설", "다이닝", "기타"],
    "STUDIO PARDISE": ["객실", "기타"],
    "GROUP & WEDDINGS": ["시설", "다이닝", "기타"],
    MEMBERSHIP: ["객실", "상품/이벤트", "시설", "기타"],
  };

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
            {Object.keys(category).map((el, i) => {
              return (
                <ListItem key={i} onClick={onOptionSisulClicked(el, i + 1)}>
                  {el}
                </ListItem>
              );
            })}
          </DropDownContainer>
        </DropDownBoxWrap>
      )}
      <div style={{ height: "5px" }}></div>
      <DropContainer>
        <span>세부 시설</span>
        <CategoryMenuBox
          onClick={onToggleSebu}
          className={sisul === "항목을 선택해 주세요" ? "disabled" : ""}
        >
          {sebu}
          <DropDownImg
            clicked={isOpenSebu}
            alt="iPhone_01"
            src="img/down.png"
          />
        </CategoryMenuBox>
      </DropContainer>
      {isOpenSebu && sisul !== "항목을 선택해 주세요" && (
        <DropDownBoxWrap>
          <DropDownContainer>
            {sisul &&
              //@ts-ignore
              category[sisul].map((el, i) => {
                return (
                  <ListItem onClick={onOptionSebuClicked(el, i + 1)}>
                    {el}
                  </ListItem>
                );
              })}
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
