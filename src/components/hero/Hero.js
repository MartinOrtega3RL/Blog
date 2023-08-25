import React from "react";
import { Box, Typography, styled } from "@mui/material";
import BannerBlog from "../../static/BannerBlog.png";
// import Atropos component
import Atropos from 'atropos/react';
import "../../Assets/atropos.css";
import 'atropos/css' 
const Hero = () => {




  return (
    <>
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Blog<b style={{ color: "red" }}>Informativo</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        Encontraras varios conceptos Utiles!
      </Typography>

      <Atropos>
      <Box
        sx={{
          backgroundImage: `url(https://www.tuyu.es/wp-content/uploads/2017/07/security23.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        
          <Box
            sx={{
              width: { xs: "100%", sm: "50%", md: "40%" },
              padding: { xs: 3, sm: 2, md: 20 },
            }}
          >
            <Box sx={{ background: "black", opacity: "0.7" }}>
              <Typography variant={"h6"} color="white" align="center" pt={8}>
              </Typography>
              <Typography variant="h4" color="white" align="center">
              Computacion y Sociedad
              </Typography>
              <Typography variant="body1" color="white" align="center" pb={8}>
                Impacto social de la informática en la sociedad.
              </Typography>
            </Box>
          </Box>
          
        </Box>
        </Atropos>
    </Box>
  </>
  );
};

export default Hero;
