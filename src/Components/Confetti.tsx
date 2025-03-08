import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ConfettiEffect: React.FC = () => {
  const { width, height } = useWindowSize();

  return <Confetti  style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 9999 }} width={width} height={height} numberOfPieces={300} />;
};

export default ConfettiEffect;
