import {
  Button,
  CardContent,
  List,
  ListItem,
  TableCell,
  Typography,
} from "@mui/material";
import { data } from "../../data";
import { WhatsApp } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

function getBirthdaysOfMonth() {
  const month = new Date();
  const currentMonth = month.getMonth() + 1;
  return data.filter((person) => {
    const birthdayMonth = parseInt(person.cumpleanios.split("-")[1]);
    return birthdayMonth === currentMonth;
  });
}

export const BirthdaysOfMonth = () => {
  const months = getBirthdaysOfMonth();

  const sendWhatsMessage = (phone) => {
    const message = "¡Feliz cumpleaños!";
    const whatsURL = `https://api.whatsapp.com/send/?phone=+52${phone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsURL, "_blank");
  };
  return (
    <>
      <CardContent className="birth__month">
        <Typography variant="h4" gutterBottom>
          Cumpleaños del Mes
        </Typography>
        {months.length > 0 ? (
          <List>
            {months.map((person, i) => (
              <ListItem key={i}>
                <TableCell>{person.nombre}</TableCell>
                <TableCell>{person.cumpleanios}</TableCell>
                <TableCell align="center">
                  {person.telefono.trim() !== "" ? (
                    <Button
                      color="success"
                      size="small"
                      variant="contained"
                      sx={{ color: grey[50] }}
                      startIcon={<WhatsApp />}
                      onClick={() => sendWhatsMessage(person.telefono)}
                    >
                      Enviar WhatsApp
                    </Button>
                  ) : (
                    <Button
                      color="error"
                      size="small"
                      variant="contained"
                      sx={{ color: grey[50] }}
                    >
                      N/A
                    </Button>
                  )}
                </TableCell>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No hay cumpleaños este mes.</Typography>
        )}
      </CardContent>
    </>
  );
};
