import {
  Button,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { data } from "../../data";
import {
  CakeOutlined,
  CelebrationOutlined,
  WhatsApp,
} from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";

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
    const message = "¡Feliz cumpleaños! 🥳 🎂";
    const whatsURL = `https://api.whatsapp.com/send/?phone=+52${phone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsURL, "_blank");
  };

  return (
    <>
      <CardContent className="birth__month" sx={{ paddingTop: 10 }}>
        <Typography align="left" variant="h5" color="error">
          📅 🎉 Cumpleaños del Mes 🥳 🎂
        </Typography>

        <Grid container direction="row" item xs={9} sm={9} md={7} lg={7} xl={7}>
          {months.length > 0 ? (
            <TableContainer sx={{ padding: 2 }}>
              <Table sx={{ minWidth: 650 }} size="small">
                <TableBody>
                  {months.map((person, i) => (
                    <TableRow key={i}>
                      <TableCell sx={{ color: grey[50] }}>
                        <Button
                          color="secondary"
                          size="small"
                          variant="contained"
                          sx={{ color: grey[50] }}
                        >
                          {person.nombre}
                        </Button>
                      </TableCell>
                      <TableCell sx={{ color: grey[800] }}>
                        <Button
                          size="small"
                          variant="contained"
                          sx={{ color: grey[50] }}
                          startIcon={<CelebrationOutlined />}
                        >
                          {person.cumpleanios}
                          <CakeOutlined fontSize="small" />
                        </Button>
                      </TableCell>
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography
              mt={16}
              align="justify"
              variant="h3"
              sx={{ color: blue[900] }}
            >
              No hay cumpleaños este mes.
            </Typography>
          )}
        </Grid>
      </CardContent>
    </>
  );
};
