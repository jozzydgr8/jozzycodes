import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ConfettiEffect: React.FC = () => {
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} numberOfPieces={300} />;
};

export default ConfettiEffect;
