import React, { useEffect, useState } from "react";

export const CountdownTimer = ({ duration = 3 * 24 * 60 * 60 }) => {
  // Default is 3 days in seconds
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = String(Math.floor(timeLeft / (60 * 60 * 24))).padStart(2, "0");
  const hours = String(Math.floor((timeLeft / (60 * 60)) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft / 60) % 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <p style={{ fontWeight: "bold",  fontSize: "1.1rem" }}>
      {days} : {hours} : {minutes} : {seconds}
    </p>
  );
};
