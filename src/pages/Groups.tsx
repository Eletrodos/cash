import React, { useState } from "react";
import LayoutDrawer from "../components/LayoutDrawer";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Fab,
  makeStyles,
  Modal,
  Typography,
  Input,
  InputAdornment,
  FormControl,
  InputLabel,
  Button
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { firestore } from "../services/fb";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  paper: {
    position: "absolute",
    width: 400,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  },
  modalDivider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  margin: {
    marginTop: theme.spacing(1)
  },
  right: {
    float: "right"
  }
}));

/** Página de visualização de grupos */
const Groups: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [minCoins, setMinCoins] = useState("0");
  const [maxCoins, setMaxCoins] = useState("300");
  const [groups, setGroups] = useState([]);

  firestore
    .collection("groups")
    .get()
    .then(function(querySnapshot) {
      const groupsFiltered = [];
      querySnapshot.forEach(doc => {
        groupsFiltered.push({
          name: doc.data().name
        });
      });
      setGroups(groupsFiltered);
    });

  const classes = useStyles();

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeMinCoins = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinCoins(event.target.value);
  };

  const handleChangeMaxCoins = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxCoins(event.target.value);
  };

  const handleCreateGroup = async () => {
    await firestore.collection("groups").add({
      maxCoins,
      minCoins,
      name
    });
    setModalOpen(false);
  };

  return (
    <LayoutDrawer>
      <List>
        {groups.map(group => {
          return (
            <ListItem>
              <ListItemAvatar>
                <Avatar>{group.name.substring(0, 1)}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={group.name} />
            </ListItem>
          );
        })}
      </List>

      <Fab className={classes.fab} color="primary" onClick={handleModalOpen}>
        <AddIcon />
      </Fab>

      <Modal open={modalOpen} onClose={handleModalClose}>
        <div className={classes.paper}>
          <Typography variant="h6">Criar novo grupo</Typography>
          <Divider className={classes.modalDivider} />
          <Typography variant="subtitle2">
            Você pode alterar todos os dados posteriormente
          </Typography>

          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="adornment-name">Nome do grupo</InputLabel>
            <Input
              id="adornment-name"
              onChange={handleChangeName}
              value={name}
            />
          </FormControl>

          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="adornment-min-coins">
              Quantidade minima de moedas
            </InputLabel>
            <Input
              id="adornment-min-coins"
              onChange={handleChangeMinCoins}
              value={minCoins}
              startAdornment={
                <InputAdornment position="start">¢</InputAdornment>
              }
            />
          </FormControl>
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="adornment-max-coins">
              Quantidade maxima de moedas
            </InputLabel>
            <Input
              id="adornment-max-coins"
              onChange={handleChangeMaxCoins}
              value={maxCoins}
              startAdornment={
                <InputAdornment position="start">¢</InputAdornment>
              }
            />
          </FormControl>
          <Button
            className={[classes.margin, classes.right].join(" ")}
            onClick={handleCreateGroup}
            variant="contained"
            color="primary"
          >
            Criar
          </Button>
        </div>
      </Modal>
    </LayoutDrawer>
  );
};
export default Groups;
