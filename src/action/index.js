import {SEND_MESSAGE, MESSAGE_RECEIVED} from "../constants/ActionType";
import LocalStore from "store";
import {STORE_KEY} from "../constants/Store";

export const sendMessage = (avatar, username, text) => {
    const savedValues = LocalStore.get(STORE_KEY);
    if(!savedValues.clientId){
        throw new Error("Client Id can not be empty");
    }
    return {
        type: SEND_MESSAGE,
        payload:{
            clientId:savedValues.clientId,
            avatar,
            username,
            text,
            timestamp: Date.now()
        }
    }
};

export const messageReceived = (payload) => {
    return {
        type: MESSAGE_RECEIVED,
        payload
    }
};