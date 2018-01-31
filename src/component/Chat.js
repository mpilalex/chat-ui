import React from "react";
import Component from "./BaseComponent";
import MessageFeed from "./MessageFeed";
import {sendMessage} from "../action";
import WriteMessage from "./WriteMessage";
import LocalStorage from "store";
import {STORE_KEY} from "../constants/Store"
import {getRandomNumber} from "../utils/NumberUtils";
import avatars from "../assets/avatars.json";
import {connect} from "react-redux";
import {change} from "redux-form";
import {SEND_MESSAGE_FORM} from "../constants/Component";
import {Image} from "semantic-ui-react";
import Username from "./Username";

class Chat extends Component {

    state = {
        username: null,
        avatar: null,
        clientId: null
    };

    componentWillMount(){
        let savedValues = LocalStorage.get(STORE_KEY);

        if(!savedValues){
            savedValues = {};
        }

        const username = savedValues.username;
        let avatar = savedValues.avatar;
        let clientId = savedValues.clientId;

        if(!avatar){
            const index = getRandomNumber(0, 4);
            avatar = avatars[index];
            savedValues.avatar = avatar;
        }
        if(!clientId){
            clientId = `chat-client-${getRandomNumber(0, 1000000)}`;
            savedValues.clientId = clientId;
        }
        LocalStorage.set(STORE_KEY, savedValues);

        this.setState({
            username,
            avatar,
            clientId
        })
    }

    updateUsername(values){
        const {username} = values;
        let savedData = LocalStorage.get(STORE_KEY);
        if(!savedData){
            savedData = {};
        }
        savedData.username = username;
        LocalStorage.set(STORE_KEY, savedData);
        this.setState({username});
    }



    render() {
        const {avatar, username, clientId} = this.state;
        const {messages, sendMessage} = this.props;
        return <div className={"chat"}>
            <div className={"top"}>
                <Image src={avatar} avatar />
                <Username username={username} onUpdate={this.updateUsername.bind(this)}/>
            </div>
            <MessageFeed clientId={clientId} messages={messages} />
            <div className={"bottom"}>
                <WriteMessage
                    avatar={avatar}
                    username={username}
                    updateUsername={this.updateUsername.bind(this)}
                    sendMessage={sendMessage}
                />
            </div>
        </div>
    }
}

export default connect(
    (state) => {
        return {
            messages: state.message.messages
        }
    },
    (dispatch) => {
        return {
            sendMessage({avatar, username, text}){
                dispatch(sendMessage(avatar, username, text));
                dispatch(change(SEND_MESSAGE_FORM,"text",null));
            }
        }
    }
)(Chat);