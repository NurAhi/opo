import styled from "styled-components";

const enum CSS {
  appPadding = "20px",
  headerBorderRadius = "20px 50px 30px 10px",
  headerTitleFontSize = "1.25rem",
}

export const AppStyled = styled.div`
  padding: ${CSS.appPadding};

  .c-app--list {
    list-style: none;
    padding: 0;
  }

  .c-app__date {
    padding-bottom: 20px;
    border-bottom: solid 1px #d9dddc;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
  }

  .c-app__date--text {
    padding-right: 5px;
  }
`;
