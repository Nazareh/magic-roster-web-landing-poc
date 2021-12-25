import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledLink = styled(Button, {
  name: "StyledLink",
  slot: "Wrapper",
})`
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
