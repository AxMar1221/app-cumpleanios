import { CardContent, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

export const GreetingCardApp = () => {
  return (
    <>
      <CardContent className="" sx={{ paddingTop: 15 }}>
        <Typography align="center" variant="h4" sx={{ color: red[400] }}>
          📅 🎉 Envía una tarjeta de felicitación 🥳 🎂
        </Typography>
      </CardContent>
    </>
  );
};
