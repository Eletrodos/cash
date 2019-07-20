import React from "react";
import PeopleIcon from "@material-ui/icons/People";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import {
  Divider,
  Card,
  Typography,
  CardContent,
  makeStyles,
  Box,
  Chip,
  Tooltip
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    width: "100%"
  },
  chip: {
    marginTop: 10,
    marginRight: 4
  }
}));

interface IGroupCardProps {
  name: string;
  members: number;
  userCoins: number;
  isAdmin?: boolean;
}

/** Exibe as informações de um determinado grupo */
const GroupCard: React.FC<IGroupCardProps> = ({
  isAdmin,
  name,
  members,
  userCoins
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="subtitle2">{name.toUpperCase()}</Typography>
        <Divider variant="fullWidth" />
        <Box>
          <Tooltip title="Quantidade membros que frequentam este grupo">
            <Chip
              className={classes.chip}
              size="small"
              icon={<PeopleIcon />}
              label={members}
            />
          </Tooltip>
          <Tooltip title={"Quantidade de moedas que você possui neste grupo"}>
            <Chip
              className={classes.chip}
              size="small"
              icon={<AttachMoneyIcon />}
              label={userCoins}
            />
          </Tooltip>
          {isAdmin && (
            <Tooltip title={"Você é administrador deste grupo"}>
              <Chip
                className={classes.chip}
                size="small"
                icon={<VerifiedUserIcon />}
                label="admin"
              />
            </Tooltip>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};
export default GroupCard;
