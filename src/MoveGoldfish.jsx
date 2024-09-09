import { useState } from "react";
import GoldFish from "./GoldFish.png";
import "./index.css";

export const MoveGoldfish = () => {
  //金魚の位置
  const [goldFishX, setGoldFishX] = useState();
  const [goldFishY, setGoldFishY] = useState();

  const onClick = (event) => {
    const x = event.clientX; // マウスのX座標
    const y = event.clientY; // マウスのY座標
    console.log(`マウス座標 - X: ${x}, Y: ${y}`);

    setGoldFishX(x);
    setGoldFishY(y);
    console.log(goldFishX, goldFishY);
  };

  return (
    <>
      <div className="aquarium" onClick={onClick}>
        <img src={GoldFish} alt="" height={"300px"} />
      </div>
    </>
  );
};
