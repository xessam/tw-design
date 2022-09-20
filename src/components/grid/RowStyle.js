import styled, { css } from "styled-components";

const TWRowBase = styled.div`
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
`;

const TWRow = styled(TWRowBase)`
justify-content: ${({ justify }) => justify || "flex-start"};
align-items: ${({ align }) => align || "flex-start"};

 ${({ wrap }) =>
   wrap &&
   css`
     flex-wrap: wrap;
   `}
 };
`;

export { TWRow };
