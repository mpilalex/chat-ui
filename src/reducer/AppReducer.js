import _ from "underscore";
import {SAVED_DATA_LOADED} from "../constants/ActionType";

const initialState = {
    dataLoaded: false,
    username: null,
    avatar: null
};

export default (state = initialState, action) => {

    if(action.type === SAVED_DATA_LOADED){
        const {payload} = action;
        state = _.extend({}, state, {
            username: payload.username,
            avatar: payload.avatar,
            dataLoaded: true
        });
    }

    return state;

}