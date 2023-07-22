import { useState } from "react";
import { data } from "../../data";
import {
  Button,
  FormControl,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { CardGiftcardOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 10;

export const BirthdayTable = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Calcular el índice inicial y final de los registros para la página actual
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // Obtener los registros para la página actual
  const currentDataPage = data.slice(startIndex, endIndex);

  // Calcular la cantidad total de páginas
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  // Función para avanzar a la siguiente página
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  // Función para retroceder a la página anterior
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };


  return (
    <>
      <Grid container>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <FormControl className="d-flex mb-2 col-4" role="search">
            <TextField
              label="Buscar cumpleañero..."
              type="text"
              name="search"
              margin="dense"
              variant="outlined"
              color="error"
            />
          </FormControl>
        </Grid>

        <Typography>Todos los cumpleañeros 📅 🎉 🥳 🎂</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Cumpleaños</TableCell>
                <TableCell>Teléfono</TableCell>
                <TableCell>Enviar tarjeta</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentDataPage.map((person) => (
                <TableRow
                  key={person.nombre}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{person.id}</TableCell>
                  <TableCell>{person.nombre}</TableCell>
                  <TableCell>{person.cumpleanios}</TableCell>
                  <TableCell>{person.departamento}</TableCell>
                  <TableCell>
                    <Link to={`/greetingCard/${person.id}`} className="btn">
                      <Button
                        size="small"
                        variant="contained"
                        sx={{ color: grey[50] }}
                        startIcon={<CardGiftcardOutlined />}
                      >
                        Enviar tarjeta
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid>
          <Button onClick={goToPrevPage} disabled={currentPage === 0}>
            Anterior
          </Button>
          <Button
            onClick={goToNextPage}
            disabled={currentPage === totalPages - 1}
          >
            Siguiente
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
