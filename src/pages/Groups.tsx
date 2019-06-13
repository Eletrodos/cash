import * as React from "react";
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
  TextField
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";

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
  }
}));

const Groups = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const classes = useStyles();

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <LayoutDrawer>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar src="https://image.freepik.com/fotos-gratis/beleza-jovem-caucasiano-feminino-modelo-menina-tocando-seu-rosto-pele-bochechas-maos-dedos_1258-3081.jpg" />
          </ListItemAvatar>
          <ListItemText primary="José Pereira" secondary="150¢" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar src="https://image.freepik.com/fotos-gratis/beleza-jovem-caucasiano-feminino-modelo-menina-tocando-seu-rosto-pele-bochechas-maos-dedos_1258-3081.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Mayara" secondary="104¢" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar src="https://image.freepik.com/fotos-gratis/beleza-jovem-caucasiano-feminino-modelo-menina-tocando-seu-rosto-pele-bochechas-maos-dedos_1258-3081.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Matheus Moura" secondary="96¢" />
        </ListItem>
      </List>

      <Fab className={classes.fab} color="primary" onClick={handleModalOpen}>
        <AddIcon />
      </Fab>

      <Modal open={modalOpen} onClose={handleModalClose}>
        <div className={classes.paper}>
          <Typography variant="h6">Criar novo grupo</Typography>
          <Divider />
          <Typography variant="subtitle2">
            Você pode alterar todos os dados posteriormente
          </Typography>
          <TextField placeholder="Nome" />
          <TextField type="" placeholder="Valor maximo" />
          <TextField placeholder="Valor mínimo" />
          <TextField placeholder="Valor mínimo" />
        </div>
      </Modal>
    </LayoutDrawer>
  );
};
export default Groups;
