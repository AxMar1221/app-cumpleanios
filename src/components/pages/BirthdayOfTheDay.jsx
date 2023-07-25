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
import { blue, grey } from "@mui/material/colors";
import {
  CakeOutlined,
  CelebrationOutlined,
  WhatsApp,
} from "@mui/icons-material";
import { getBirthdaysOfDay, sendWhatsMessage } from "../../helpers";

export const BirthdayOfTheDay = () => {
  const days = getBirthdaysOfDay();

  return (
    <>
      <CardContent className="birth__month" sx={{ paddingTop: 10 }}>
        <Typography align="left" variant="h5" color="error">
          📅 🎉 Cumpleaños de hoy 🥳 🎂
        </Typography>

        <Grid container direction="row" item xs={9} sm={9} md={6} lg={6} xl={6}>
          {days.length > 0 ? (
            <TableContainer sx={{ padding: 2 }}>
              <Table sx={{ minWidth: 650 }} size="small">
                <TableBody>
                  {days.map((person, i) => (
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
              No hay cumpleaños en este día.
            </Typography>
          )}
        </Grid>
      </CardContent>
    </>
  );
};
