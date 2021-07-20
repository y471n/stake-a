import styled from "styled-components";

export const StyledPage = styled.div`
  text-align: center;
  max-width: 400px;
  margin: auto;
  padding-top: 3rem;
`;

interface ISpacerProps {
  margin?: string;
  padding?: string;
}
export const Spacer = styled.div<ISpacerProps>`
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  min-height: 0.5rem;
`;
