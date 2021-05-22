import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { initialState, reducer } from "./store/reducer";
import LoginUsingGitlab from "./components/LoginUsingGitLab";


export const AuthContext = createContext();

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log(state)
  return (
      <AuthContext.Provider
      >
        <Router>
          <Switch>
            {/*<Route path="/login" component={Login}/>*/}
            <Route path="/login" component={LoginUsingGitlab}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
      </AuthContext.Provider>
  );
}

export default App;
