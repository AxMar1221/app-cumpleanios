/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { data } from "../../data";
import { Box, CardContent, Typography } from "@mui/material";
import { CakeOutlined } from "@mui/icons-material";

const getRandomPosition = () => ({
  x: Math.random() * (window.innerWidth - 100),
  y: Math.random() * (window.innerHeight - 100),
});

const colors = ["blue", "red", "green", "purple", "violet", "orange"];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export const HomeApp = () => {
  const [currentBubbleIndex, setCurrentBubbleIndex] = useState(-1); 
  const [todayBirthdays, setTodayBirthdays] = useState([]);

    
    useEffect(() => {
      const interval = setInterval(() => {
      const currentDate = new Date();
      const birthdaysToday = data.filter((person) => {
        const [day, month] = person.cumpleanios?.split("-") || [];
        return (
          currentDate.getDate() === parseInt(day) &&
          currentDate.getMonth() + 1 === parseInt(month)
          );
        });
        
        setTodayBirthdays(birthdaysToday);
        setCurrentBubbleIndex((prevIndex) => (prevIndex + 1) % Math.max(1, birthdaysToday.length));
      }, 3500);
      
      return () => clearInterval(interval);
    }, []);
    
    return todayBirthdays.length > 0 ? (
    <BirthdayBubble person={todayBirthdays[currentBubbleIndex]} />
  ) : (
    <BirthdayBubble person={null} />
  );
};

const BirthdayBubble = ({ person }) => {
  const [position, setPosition] = useState({ x: window.innerWidth / 2 - 60, y: window.innerHeight / 2 - 60 });
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
      setColor(getRandomColor());
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  if (person === null) {
    // Show message if there are no birthdays today
    return (
      <CardContent className="births" sx={{ paddingTop: 20 }}>
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            left: "55%",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            backgroundColor: color,
            color: "white",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            fontWeight: "bold",
          }}
        >
          <Typography variant="h4">Hoy no hay cumpleaños</Typography>
        </Box>
      </CardContent>
    );
  }

  return (
    <CardContent className="births" sx={{ paddingTop: 20 }}>
      <Box
        sx={{
          position: "absolute",
          top: position.y,
          left: position.x,
          width: "160px",
          height: "160px",
          borderRadius: "65% 45% 85% 45%",
          backgroundColor: color,
          color: "white",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontWeight: "bold",
        }}
      >
        <CakeOutlined fontSize="large" />
        <Typography variant="h5">{person.nombre}</Typography>
        <Typography variant="h5">{person.cumpleanios}</Typography>
      </Box>
    </CardContent>
  );
};
