import { Divider } from "@mui/material";
import React from "react";
import Stack from "@mui/material/Stack";
import { StyledLink } from "./base/StyledLink";
import { styled } from "@mui/system";

const Wrapper = styled(Divider, {
  name: "Wrapper",
  slot: "Wrapper",
})`
  flex-direction: row;
  position: sticky;
  padding: 2em;
`;

const Header = () => (
  <Wrapper>
    <Stack spacing={2} direction="row" >
      <StyledLink>Home</StyledLink>
      <StyledLink>Product</StyledLink>
      <StyledLink>Pricing</StyledLink>
      <StyledLink>About</StyledLink>
      <StyledLink>Contact</StyledLink>
    </Stack>
  </Wrapper>
);

export default Header;
