import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { data } from "../../data";

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
  return (
    <>
      <div>
        <Typography variant="h4" gutterBottom>
          Cumpleaños del Mes
        </Typography>
        {months.length > 0 ? (
          <List>
            {months.map((person, i) => (
              <ListItem key={i}>
                <ListItemText
                  primary={person.nombre}
                  secondary={`Feca de cumpleaños: ${person.cumpleanios}, Departamento: ${person.departamento}`}
                />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No hay cumpleaños este mes.</Typography>
        )}
      </div>
    </>
  );
};
