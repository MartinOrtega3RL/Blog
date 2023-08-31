import React from "react";
import menImage from "../../static/fondo.svg";
import { Box, Stack, styled, Typography } from "@mui/material";

const StyledBox = styled(Box)({
  height: "20rem",
  width: "80rem",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});
const StyledTypography = styled(Typography)({
  margin: "13% 50px 25% 90px",
  opacity: "0.9",
  color:"white",
});
const Categories = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        mt={4}
      >
        <StyledBox sx={{ backgroundImage: `url(${menImage})` }}>
          <StyledTypography align="center" variant="h5">
            Introduccion
          </StyledTypography>
        </StyledBox>
      </Stack>
    </Box>
  );
};

export default Categories;
