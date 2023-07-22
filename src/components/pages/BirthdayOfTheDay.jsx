import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { data } from "../../data";

function getBirthdaysOfDay() {
  const today = new Date();
  const currentDay = today.getDate();

  return data.filter((person) => {
    const birthdayToday = parseInt(person.cumpleanios.split("-")[0]);
    return birthdayToday === currentDay;
  });
}

export const BirthdayOfTheDay = () => {
  const months = getBirthdaysOfDay();
  return (
    <>
      <div>
        <Typography variant="h4" gutterBottom>
          Cumpleaños del hoy
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
