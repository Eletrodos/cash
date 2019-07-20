import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import {
  Divider,
  Card,
  Typography,
  CardContent,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    width: "100%"
  }
}));

interface IGroupCardProps {
  name: string;
  members: number;
  userCoins: number;
}

/** Exibe as informações de um determinado grupo */
const GroupCard: React.FC<IGroupCardProps> = ({ name, members, userCoins }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography>{name}</Typography>
        <Divider variant="fullWidth" />
        <div>
          Membros: {members} <PeopleIcon />
        </div>
        <div>Seu saldo: {userCoins}¢</div>
      </CardContent>
    </Card>
  );
};
export default GroupCard;
