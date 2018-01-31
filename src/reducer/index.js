import AppReducer from "./AppReducer";
import MessageReducer from "./MessageReducer";
import {reducer as formReducer} from "redux-form";

export default {
    app: AppReducer,
    message: MessageReducer,
    form: formReducer
}