import { useState } from "react";
import { data } from "../../data";

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
    <div>
      <h2>Todos los Registros (Tabla Paginada)</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Departamento</th>
            <th>Fecha de Ingreso</th>
            <th>Cumpleaños</th>
          </tr>
        </thead>
        <tbody>
          {currentDataPage.map((person) => (
            <tr key={person.nombre}>
              <td>{person.id}</td>
              <td>{person.nombre}</td>
              <td>{person.departamento}</td>
              <td>{person.fechaIngreso}</td>
              <td>{person.cumpleanios}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={goToPrevPage} disabled={currentPage === 0}>
          Anterior
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
