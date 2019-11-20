import React from "react";
import ReactDOM from "react-dom";
import {runWithAdal} from 'react-adal';
import { authContext } from './azureadConfig';


import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";


const DO_NOT_LOGIN = false;
 
runWithAdal(authContext, () => {
   require('./index.js');
},DO_NOT_LOGIN);

ReactDOM.render(<App/>, document.getElementById("root"));

serviceWorker.unregister();
