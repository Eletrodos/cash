import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HistoryIcon from "@material-ui/icons/History";
import GroupIcon from "@material-ui/icons/Group";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      background: "#16a085"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    }
  })
);

export interface LayoutDrawerProps {
  children: React.ReactNode;
}

const Menu = () => (
  <List>
    <ListItem button>
      <ListItemIcon>
        <CardTravelIcon />
      </ListItemIcon>
      <ListItemText primary="Transação" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="Histórico" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <GroupIcon />
      </ListItemIcon>
      <ListItemText primary="Grupos" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Desconectar" />
    </ListItem>
  </List>
);

/** Desenha o layout principal compartilhado entre todas as páginas */
const LayoutDrawer: React.FC<LayoutDrawerProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const classes = useStyles();

  /** Exibe ou oculta o menu */
  const handleToggleMenuOpen = () => {
    setMenuOpen((lastState: boolean) => !lastState);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={handleToggleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Cash
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        open={menuOpen}
        anchor="left"
        onClose={handleToggleMenuOpen}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <Divider />
        {/** Menu principal */}
        <Menu />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default LayoutDrawer;
