import styled from "styled-components";

export const SubmitBtn = styled.button`
  width: 88%;
  height: 60px;
  background-color: rgb(221, 217, 195);
  margin-top: 30px;
  border: none;

  :hover {
    opacity: 0.7;
  }
`;

export const Emailbox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

export const Emailinput = styled.input`
  width: 88%;
  height: 30px;
  font-size: 14px;
  padding-left: 8px;
  border-radius: 0px;
  border: 1px solid;
`;

export const Numberinput1 = styled.input`
  width: 18%;
  height: 30px;
  font-size: 20px;
  border-radius: 0px;
  border: 1px solid;
  margin-right: 5%;
`;

export const Numberinput2 = styled.input`
  width: 65%;
  height: 30px;
  font-size: 20px;
  border-radius: 0px;
  border: 1px solid;
`;

export const Numberbox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

export const Nameinput = styled.input`
  width: 88%;
  height: 30px;
  font-size: 20px;
  border-radius: 0px;
  border: 1px solid;
`;

export const Namebox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

export const Detailinput = styled.input`
  width: 88%;
  height: 100px;
  font-size: 20px;

  border-radius: 0px;
  border: 1px solid;
`;

export const Detailbox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

export const Titleinput = styled.input`
  width: 88%;
  height: 30px;
  font-size: 20px;
  border-radius: 0px;
  border: 1px solid;
`;

export const Titlebox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
  margin-bottom: 6px;
`;

export const QNAcontainer = styled.div`
  margin-top: 16px;
  width: 100%;

  & > input {
    text-align: left;
  }
`;

export const Detbox = styled.div`
  display: flex;
  padding-left: 30px;
  margin-top: 12px;
`;

export const DropContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;

  .disabled {
      background-color: lightgray;
    }
  }
`;

export const DropDownImg = styled.img<{ clicked: boolean }>`
  width: 20px;
  align-self: flex-end;
  margin-right: 10px;
  height: 25px;
  transform: ${(props) => (props.clicked ? "scaleY(-1)" : "")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px 20px 0px 20px;

  .active {
    background-color: rgb(221, 217, 195);
    border: 4px solid gray;
    color: black;
  }
`;

export const QuestionButton = styled.button`
  border: none;
  background-color: #9d896a;
  color: white;
  width: 18%;
  height: 40px;
  margin: 0 auto;
`;

export const CategoryMenuBox = styled.div`
  width: 259px;
  font-weight: 80%;
  font-size: 18px;
  text-align: left;
  padding-left: 10px;
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
`;

export const DropDownBoxWrap = styled.div`
  position: absolute;
  width: 400px;
  padding-right: 30px;
  display: flex;
  justify-content: flex-end;
`;

export const DropDownContainer = styled.ul`
  width: 70%;
  height: 100%;
  z-index: 1;
  list-style: none;
  overflow-y: scroll;
`;

export const ListItem = styled.li`
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
