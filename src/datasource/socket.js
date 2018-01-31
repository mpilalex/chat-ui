import config from "./../config/char-server.json";
import io from "socket.io-client";
import {SEND_MESSAGE} from "../constants/ActionType";
import {messageReceived} from "../action";
import ReduxStore from "../store";
import {getRandomNumber} from "../utils/NumberUtils";
import {stripTags} from "../utils/StringUtils";

const socket = io(config.host);

socket.on('spotim/chat', data => {
    ReduxStore.dispatch(messageReceived(data));
});

export const connect = () => {
    socket.connect();
};

export const disconnect = () => {
    socket.disconnect();
};

export const send = (message) => {
    message.id = `msg-${getRandomNumber(0, 1000000)}`;
    message.text = stripTags(message.text);
    socket.emit('spotim/chat', message);
};

export const middleware = store => next => action => {
    if(action.type === SEND_MESSAGE){
        send(action.payload);
    }
    next(action)
};


