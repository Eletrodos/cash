import React, { useContext } from "react";
import { Grid, Avatar, Paper, Link, Box, Zoom, Slide } from "@material-ui/core";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import firebase from "firebase";

import { auth } from "../services/fb";
import AuthContext from "../services/hooks/auth";

import backgroundImage from "../images/background.jpeg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%"
  },
  paper: {
    margin: theme.spacing(20, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#16a085"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

/**
 * Página padrão de autenticação,
 * será redirecionado para cá sempre que não estiver logado
 **/
const SignIn: React.FC = () => {
  const classes = useStyles();
  const authData = useContext(AuthContext);

  const fbUiConfig: firebaseui.auth.Config = {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={false} md={7}>
        <Slide timeout={500} direction="right" in mountOnEnter unmountOnExit>
          <div className={classes.image} />
        </Slide>
      </Grid>
      <Grid item xs={12} sm={12} md={5} component={Paper}>
        <div className={classes.paper}>
          <Zoom in mountOnEnter unmountOnExit>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
          </Zoom>
          <Zoom
            in
            mountOnEnter
            unmountOnExit
            style={{ transitionDelay: "200ms" }}
          >
            <Typography component="h1" variant="h5">
              Entre
            </Typography>
          </Zoom>
          <Zoom
            in
            mountOnEnter
            unmountOnExit
            style={{ transitionDelay: "400ms" }}
          >
            <div>
              <StyledFirebaseAuth uiConfig={fbUiConfig} firebaseAuth={auth} />
            </div>
          </Zoom>
          <Zoom
            in
            mountOnEnter
            unmountOnExit
            style={{ transitionDelay: "600ms" }}
          >
            <Box mt={5}>
              <Typography variant="body2" color="textSecondary" align="center">
                {"Feito com amor por "}
                <Link color="inherit" href="https://github.com/Eletrodos">
                  Eletrodos
                </Link>
              </Typography>
            </Box>
          </Zoom>
        </div>
      </Grid>
    </Grid>
  );
};
export default SignIn;
