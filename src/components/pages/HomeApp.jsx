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
  const [currentBubbleIndex, setCurrentBubbleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const todayBirthdays = data.filter((person) => {
        const [day, month] = person.cumpleanios.split("-");
        return (
          currentDate.getDate() === parseInt(day) &&
          currentDate.getMonth() + 1 === parseInt(month)
        );
      });

      if (todayBirthdays.length > 0) {
        setCurrentBubbleIndex(
          (prevIndex) => (prevIndex + 1) % Math.max(1, todayBirthdays.length)
        );
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <BirthdayBubble
      person={
        data.filter((person) => {
          const [day, month] = person.cumpleanios.split("-");
          const currentDate = new Date();
          return (
            currentDate.getDate() === parseInt(day) &&
            currentDate.getMonth() + 1 === parseInt(month)
          );
        })[currentBubbleIndex]
      }
    />
  );
};

const BirthdayBubble = ({ person }) => {
  const [position, setPosition] = useState(getRandomPosition());
  const [color, setColor] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getRandomPosition());
      setColor(getRandomColor());
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPosition(getRandomPosition());
    setColor(getRandomColor());
  }, [person]);

  return (
    <CardContent className="births" sx={{ paddingTop: 20 }}>
      <Box
        sx={{
          position: "absolute",
          top: position.y,
          left: position.x,
          width: "175px",
          height: "175px",
          borderRadius: "65% 45% 85% 45%",

          backgroundColor: color,
          color: "white",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        <CakeOutlined fontSize="large" />
        <Typography>{person.nombre}</Typography>
        <Typography>{person.cumpleanios}</Typography>
      </Box>
    </CardContent>
  );
};
