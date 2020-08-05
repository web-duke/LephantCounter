import React from "react";
import { cards } from "../../consts/cards";
import { ScoreButton } from "./ScoreButton";

export const ScoreButtonsList = ({
  isAdding,
  currentPlayerData,
  playersData,
  setPlayersData,
  isDisabled,
}) => {
  return cards.map((card) => (
    <ScoreButton
      key={card.key}
      value={card.value}
      label={card.key}
      isAdding={isAdding}
      currentPlayerData={currentPlayerData}
      playersData={playersData}
      setPlayersData={setPlayersData}
      isDisabled={isDisabled}
    />
  ));
};
