import { Box, CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import detailsImage from "../../static/fondo.svg";
import postImage from "../../static/image3.jpg";
import Rightbar from "../rightbar/Rightbar";
const Details = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${detailsImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color={"white"}
          variant="h2"
          sx={{ fontWeight: 900, padding: 10 }}
        >
          La IA en la Programacion
        </Typography>
      </Box>
      <Container>
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            <Typography
              m={4}
              align="center"
              color={"white"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Hemos leído muchas noticias sobre los efectos que tecnologías como la Inteligencia Artificial pueden tener en el mundo laboral. Aunque se sabe que estas herramientas también crearán nuevos puestos de trabajo y que, echando la vista atrás, la tecnología siempre ha creado más oferta laboral que la que destruye, las alarmas están ahí
            </Typography>
            <CardMedia
              component="img"
              height="300px"
              image={postImage}
              alt="green iguana"
            />
            <Typography align="center" variant="h4" mt={2} color="common.white">
            La IA hará parte de mi trabajo, pero no me preocupa
            </Typography>
            <Typography
              m={4}
              color={"white"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
   Hemos hablado con varios desarrolladores y todos coinciden en que sí, que su trabajo también se verá afectado por las herramientas de Inteligencia Artificial. Pero, lejos de verlo como un problema o con miedo por su futuro laboral, todos ellos lo ven como algo positivo: desde el trabajo aburrido que les va a eliminar hasta la oportunidad de centrarse en lo que verdaderamente les gusta o la posibilidad de seguir creciendo a nivel profesional.




Como todo proceso, la llegada de herramientas de Inteligencia Artificial al mundo del desarrollo de software no se producirá de la noche a la mañana. De hecho, estos profesionales ya ven cómo en ciertos terrenos la IA está ya presente en las herramientas que emplean en su día a día.
VS Code, por ejemplo, es un editor que les sugiere nombre de variables y funciones. Hay herramientas de Machine Learning capaces de analizar el contexto en el que trabajan los desarrolladores y escribir código por ellos. También compara y hace recomendaciones a la hora de escribir código, lo que, en opinión de Ferreiro, ahorra tiempo a la hora de escribir. Otras herramientas, como Codota, completa líneas de código basadas en millones de programas Java y su contexto, lo que le ayuda a codificar más rápido con menos errores.

            </Typography>
          </Box>
          <Box flex={1}>
            <Rightbar />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Details;
