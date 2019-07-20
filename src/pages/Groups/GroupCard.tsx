import React from "react";

interface IGroupCardProps {
  name: string;
  members: number;
  userCoins: number;
}

/** Exibe as informações de um determinado grupo */
const GroupCard: React.FC<IGroupCardProps> = ({ name, members, userCoins }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{members}</div>
      <div>{userCoins}</div>
    </div>
  );
};
export default GroupCard;
