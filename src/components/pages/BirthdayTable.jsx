import { useState } from "react";
import { data } from "../../data";
import {
  Button,
  CardContent,
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
import {
  CakeOutlined,
  CardGiftcardOutlined,
  CelebrationOutlined,
  NavigateBeforeOutlined,
  NavigateNextOutlined,
  WhatsApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const itemsPerPage = 10;

export const BirthdayTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const rowStart = currentPage * itemsPerPage + 1;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const searchFilter = (searchTerm) => {
    return data.filter((ele) => {
      if (
        ele.nombre
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        ele.cumpleanios
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return ele;
      }
    });
  };

  const searchTerm = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    const searchResult = searchFilter(searchTerm);
    setFilterData(searchResult);
    setCurrentPage(0);
  };

  const displayData = search ? filterData : data;
  const currentDataPages = displayData.slice(startIndex, endIndex);


  const sendWhatsMessage = (phone) => {
    const message = '¡Feliz cumpleaños!';
    const whatsURL = `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(whatsURL, "_blank");
  };

  return (
    <>
      <CardContent className="birth__table">
        <Typography align="center" variant="h4" color="error">
          📅 🎉 Todos los cumpleañeros 🥳 🎂
        </Typography>

        <Grid container>
          <Grid
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <FormControl className="d-flex mb-2 col-6" role="search">
              <TextField
                label="Buscar cumpleañero... 🔍"
                type="text"
                name="search"
                margin="dense"
                value={search}
                variant="outlined"
                color="error"
                onChange={searchTerm}
                focused
              />
            </FormControl>
          </Grid>
          <Grid
            container
            direction="row"
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell align="center">Cumpleaños</TableCell>
                    <TableCell align="center">Teléfono</TableCell>
                    <TableCell align="center">Enviar tarjeta</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentDataPages.map((person, index) => (
                    <TableRow
                      key={person.nombre}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{rowStart + index}</TableCell>
                      <TableCell align="left">{person.nombre}</TableCell>
                      <TableCell align="center">
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
                      <TableCell align="center">
                        <Link to={`/greetingCard/${person.nombre}`} className="btn">
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
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Button
                color="error"
                sx={{ border: 1, margin: 1 }}
                onClick={goToPrevPage}
                disabled={currentPage === 0}
                variant="contained"
              >
                <NavigateBeforeOutlined />
                Anterior
              </Button>
              <Button
                color="error"
                sx={{ border: 1, margin: 1 }}
                onClick={goToNextPage}
                disabled={currentPage === totalPages - 1}
                variant="contained"
              >
                Siguiente <NavigateNextOutlined />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
};
