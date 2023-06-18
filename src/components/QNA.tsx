import styled from "styled-components";
import React, { useState } from "react";
import { title } from "process";
import {
  ButtonContainer,
  CategoryMenuBox,
  Detailbox,
  Detailinput,
  Detbox,
  DropContainer,
  DropDownBoxWrap,
  DropDownContainer,
  DropDownImg,
  Emailbox,
  Emailinput,
  ListItem,
  Namebox,
  Nameinput,
  Numberinput1,
  Numberinput2,
  QNAcontainer,
  QuestionButton,
  SubmitBtn,
  Titlebox,
  Titleinput,
} from "../styled-components/styledQNA";
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
      <Namebox>휴대폰 번호</Namebox>
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

const CategoryDropDown = () => {
  const [isOpenSisul, setIsOpenSisul] = useState<boolean>(false);
  const [sisul, setSisul] = useState<string>("항목을 선택해 주세요");
  const [isOpenSebu, setIsOpenSebu] = useState<boolean>(false);
  const [sebu, setSebu] = useState<string>("시설을 선택해 주세요");

  const category = {
    "항목을 선택해 주세요": ["항목을 선택해 주세요"],
    "HOTEL PARADISE": ["객실", "상품/이벤트", "시설", "다이닝", "기타"],
    "HOTEL ART PARADISO": ["객실", "상품/이벤트", "시설", "다이닝", "기타"],
    CASINO: ["게임", "상품/이벤트", "카지노멤버십/포인트", "기타서비스"],
    CIMER: [
      "상품/이벤트",
      "F&B",
      "입장권/요금",
      "제휴할인",
      "이벤트/액티비티",
      "기타",
    ],
    WONDERBOX: [
      "시설이용",
      "이벤트/액티비티",
      "입장권/요금",
      "F&B",
      "제휴할인",
      "기타",
    ],
    PLAZA: ["매장이용", "입점문의", "기타"],
    "PARADISE ART SPACE": ["전시", "입장권/요금", "이벤트/액티비티", "기타"],
    "STUDIO PARDISE": ["행사/이벤트", "대관", "시설", "기타"],
    WEDDINGS: ["견적", "서비스", "기타"],
    MEMBERSHIP: [
      "파라다이스 리워즈 포인트",
      "파라다이스 시그니처",
      "크로마 VIP",
      "카지노",
      "EVENT MEMBERSHIP CLUB",
    ],
    기타: ["기타"],
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
