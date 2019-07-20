import React from "react";
import LayoutDrawer from "../components/LayoutDrawer";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider
} from "@material-ui/core";

/** Página inicial */
const Home: React.FC = () => {
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
    </LayoutDrawer>
  );
};
export default Home;
