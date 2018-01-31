import {MESSAGE_RECEIVED, SEND_MESSAGE} from "../constants/ActionType";
import _ from "underscore";

const initialState = {
    messages :[]
};

export default (state = initialState, action) => {

    if(action.type === MESSAGE_RECEIVED){
        const messages = _.extend([], state.messages);
        messages.push(action.payload);
        state = _.extend({}, {messages});
    }

    return state;
}