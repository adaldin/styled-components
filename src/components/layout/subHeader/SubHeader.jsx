import React from "react";
import styled from "styled-components";
import SearcherBar from "../../organisms/searcherBar/SearcherBar";
import { colors, FlexBox } from "../../../styles/index";

// Quitarlo de la carpeta subheader
const SubHeaderStyled = styled(FlexBox)`
  padding: 1rem;
  background-color: ${colors.lightBlue1};
  border-top: solid 1px ${colors.lightBlue2};
  border-bottom: solid 1px ${colors.lightBlue2};
  gap: 1rem;
`;

function SubHeader() {
  return (
    <SubHeaderStyled justify="start" align="baseline" direction="row" padding>
      <SearcherBar />
    </SubHeaderStyled>
  );
}

export default styled(SubHeader)``;
