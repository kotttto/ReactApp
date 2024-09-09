import { useState } from "react";

import kingyo from "./kingyo.png";
import "./index.css";

export const MoveGoldfish = () => {
  //gold fish position
  const [goldFishX, setGoldFishX] = useState(0);
  const [goldFishY, setGoldFishY] = useState(0);
  const [angle, setAngle] = useState(0);

  const onClick = (event) => {
    const x = event.clientX; // mouse's x position
    const y = event.clientY; // mouse's y position
    console.log(`マウス座標 - X: ${x}, Y: ${y}`);

    const nextX = x - 150;
    const nextY = y - 150;

    setGoldFishX(nextX);
    setGoldFishY(nextY);

    const newAngle =
      Math.atan2(nextY - goldFishY, nextX - goldFishX) * (180 / Math.PI);
    console.log(nextY - goldFishY, nextX - goldFishX);

    setAngle(newAngle);
  };

  return (
    <>
      <div className="aquarium" onClick={onClick}>
        <img
          src={kingyo}
          alt=""
          id="GoldFish"
          style={{
            position: "absolute",
            transform: `rotate(${angle + 90}deg)`,
            left: `${goldFishX}px`,
            top: `${goldFishY}px`,
            transition: "transform 1s, left 1s 1s, top 1s 1s ",
          }}
        />
      </div>
    </>
  );
};
