import { useState } from "react";
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
import {
  CakeOutlined,
  CelebrationOutlined,
  NavigateBeforeOutlined,
  NavigateNextOutlined,
  WhatsApp,
} from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";
import { getBirthdaysOfMonth, sendWhatsMessage } from "../../helpers";

export const BirthdaysOfMonth = () => {
  const months = getBirthdaysOfMonth();
  const itemsPerPage = 5;
  const totalPages = Math.ceil(months.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleMonths = months.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <CardContent className="birth__month" sx={{ paddingTop: 10 }}>
        <Typography align="left" variant="h5" color="error">
          📅 🎉 Cumpleaños del Mes 🥳 🎂
        </Typography>

        <Grid container direction="row" item xs={9} sm={9} md={7} lg={7} xl={7}>
          {visibleMonths.length > 0 ? (
            <TableContainer sx={{ padding: 2 }}>
              <Table sx={{ minWidth: 650 }} size="small">
                <TableBody>
                  {visibleMonths.map((person, i) => (
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
              <div style={{ display: "flex", justifyContent: "right", marginTop: "10px" }}>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                <NavigateBeforeOutlined />
                  Anterior
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  style={{ marginLeft: "10px" }}
                >
                  Siguiente <NavigateNextOutlined />
                </Button>
              </div>
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
