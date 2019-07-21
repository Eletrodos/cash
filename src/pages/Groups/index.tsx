import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Fab,
  makeStyles,
  Snackbar,
  IconButton,
  CircularProgress
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

import LayoutDrawer from "../../components/LayoutDrawer";
import GroupCard from "./GroupCard";
import { saveGroup, getGroups } from "../../services/fbGroups";
import { IGroupData } from "../../services/types";
import GroupCreator from "./GroupCreator";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
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
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  loading: {
    margin: "50% 50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center"
  }
}));

/** Página de visualização de grupos */
const Groups: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState<IGroupData[]>([]);
  const [error, setError] = useState("");
  const classes = useStyles();

  /** Comportamento para criar um novo grupo. Já recebe os dados validados */
  const handleCreateGroup = async (data: IGroupData) => {
    setIsCreating(false);
    setIsLoading(true);
    try {
      await saveGroup(data);
    } catch (groupsError) {
      setError(groupsError);
    }
    setIsLoading(false);
  };

  /** Comportamento para modal de erro fechado */
  const handleErrorClose = () => {
    setError("");
  };

  /** Comportamento para fechar/exibir o criador de grupos */
  const handleGroupCreatorToggle = (value: boolean) => () => {
    setIsCreating(value);
  };

  /** Carrega a lista de grupos ou exibe a mensagem de erro */
  const loadGroups = async () => {
    setIsLoading(true);
    try {
      const groups = await getGroups();
      setGroups(groups);
    } catch (groupsError) {
      setError(groupsError);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadGroups();
  }, []);

  return (
    <LayoutDrawer>
      {/** Indicador de carregamento */}
      {isLoading && (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      )}

      {/** Visualização dos grupos */}
      {!isLoading && (
        <List>
          {groups.map((group, index) => {
            const { name } = group;
            return (
              <ListItem key={index}>
                <GroupCard name={name} members={8} userCoins={100} />
              </ListItem>
            );
          })}
        </List>
      )}

      {/** Botão para criar um novo grupo */}
      <Fab
        className={classes.fab}
        color="primary"
        onClick={handleGroupCreatorToggle(true)}
      >
        <AddIcon />
      </Fab>

      {/** Componente para criar um novo grupo */}
      <GroupCreator
        open={isCreating}
        onCreate={handleCreateGroup}
        onClose={handleGroupCreatorToggle(false)}
      />

      {/** Mensagens de erro */}
      <Snackbar
        open={error !== ""}
        onClose={handleErrorClose}
        message={error}
        autoHideDuration={6000}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleErrorClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </LayoutDrawer>
  );
};
export default Groups;
