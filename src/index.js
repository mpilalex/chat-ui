import React from "react";
import ReactDOM from "react-dom";
import Chat from "./component/Chat";
import {Provider} from "react-redux";
import ReduxStore from "./store";
import {connect} from "./datasource/socket";
import "./assets/scss/main.scss";



ReactDOM.render(<Provider store={ReduxStore}>
    <Chat />
</Provider>, document.getElementById("root"));

connect();
