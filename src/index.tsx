import React from "react";
import ReactDOM from "react-dom";
import { userRepository } from "./app/providers";
import UserModel from "./models/UserModel";

// import App from "./App";

const App = () => {
  const [user, setUser] = React.useState<UserModel>();

  const fetchUser = async () => {
    const result = await userRepository.getById("sample");
    setUser(result as any);
  }

  React.useEffect(() => { fetchUser() }, []);

  return <>
    hello world
    {user && <div>{JSON.stringify(user.toObject())}</div>}
  </>
}


console.log(`[APP] running in ${process.env.NODE_ENV} mode.`);
if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(registration => {
        console.log("[SW] service Worker is registered", registration.scope);
      })
      .catch(err => {
        console.error("[SW] service Worker registration failed:", err);
      });
  }
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
