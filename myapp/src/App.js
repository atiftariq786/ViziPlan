import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import API from "./services/utils/API";
import { authActions } from "./store/auth-slice";
import WrappedRoutes from "./hoc/WrappedRoutes/WrappedRoutes";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [queryIsDone, setQueryStatus] = useState(false);

  useEffect(() => {
    API.isUserLoggedin()
      .then((response) => {
        setQueryStatus(true);

        if (response.data.state === "success") {
          dispatch(
            authActions.isLoggedInUser({
              isSignedin: true,
              loggedInUsername: response.data.user.firstname,
            })
          );
        }
      })
      .catch(() => {
        setQueryStatus(true);
      });
  }, []);

  return (
    <Fragment>
      {!queryIsDone && (
        <div
          style={{
            margin: "25% 50% 0 50%",
            position: "relative",
          }}
        >
          <Spinner animation="border" variant="info" />
        </div>
      )}
      {queryIsDone && <WrappedRoutes />}
    </Fragment>
  );
}
export default App;
