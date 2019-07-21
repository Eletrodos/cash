import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Fab,
  makeStyles,
  Snackbar,
  IconButton,
  SnackbarContent
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

import LayoutDrawer from "../../components/LayoutDrawer";
import GroupCard from "./GroupCard";
import { firestore } from "../../services/fb";
import { saveGroup } from "../../services/fbGroups";
import { IGroupData } from "../../services/types";
import GroupCreator from "./GroupCreator";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "absolute",
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
  }
}));

/** Página de visualização de grupos */
const Groups: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [groups, setGroups] = useState<IGroupData[]>([]);
  const [error, setError] = useState("");
  const classes = useStyles();

  /** Comportamento para criar um novo grupo. Já recebe os dados validados */
  const handleCreateGroup = async (data: IGroupData) => {
    setIsCreating(false);
    try {
      await saveGroup(data);
    } catch (error) {
      setError(error);
    }
  };

  /** Comportamento para modal de erro fechado */
  const handleErrorClose = () => {
    setError("");
  };

  /** Comportamento para fechar/exibir o criador de grupos */
  const handleGroupCreatorToggle = (value: boolean) => () => {
    setIsCreating(value);
  };

  useEffect(() => {
    return () => {
      firestore
        .collection("groups")
        .get()
        .then(function(querySnapshot) {
          const groupsFiltered: IGroupData[] = [];
          querySnapshot.forEach(doc => {
            groupsFiltered.push({
              name: doc.data().name
            });
          });
          setGroups(groupsFiltered);
        });
    };
  }, []);

  return (
    <LayoutDrawer>
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

      <Fab
        className={classes.fab}
        color="primary"
        onClick={handleGroupCreatorToggle(true)}
      >
        <AddIcon />
      </Fab>

      <GroupCreator
        open={isCreating}
        onCreate={handleCreateGroup}
        onClose={handleGroupCreatorToggle(false)}
      />
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
