import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Container } from "@mui/material";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 3,
};

const CompanyValue = ({ src, title, description }) => (
  <Grid item xs={12} md={4}>
    <Box sx={item}>
      <Box component="img" src={src} alt="graph" sx={{ height: 55 }} />
      <Typography variant="h5" sx={{ my: 5 }}>
        {title}
      </Typography>
      <Typography variant="h6">{description}</Typography>
    </Box>
  </Grid>
);

function ProductValues() {
  return (
    <Box component="section" sx={{ display: "flex", overflow: "hidden" }}>
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <CompanyValue
            title={"Flexibile"}
            description={
              "Healthcare, Retail or Hospitality, it can seamessly integrate with any industry "
            }
            src={"/static/themes/onepirate/productValues1.svg"}
          />
          <CompanyValue
            title={"Fully Automated"}
            description={
              "Define the set of rules that best suit your business model and let our engine do all the hard work..."
            }
            src={"/static/themes/onepirate/productValues2.svg"}
          />
          <CompanyValue
            title={"Pay as you go"}
            description={
              "No lock-in contract or hiden fees. Our SaaS solution resides in cloud environments that are scalable...You don't have to buy another server or software"
            }
            src={"/static/themes/onepirate/productValues3.svg"}
          />
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
