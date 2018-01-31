import React from "react";
import Component from "./BaseComponent";
import PropTypes from "prop-types";
import {Form, FormTextArea, Button, Image} from "semantic-ui-react";
import Username from "./Username";
import MessageForm from "./MessageForm";

class WriteMessage extends Component {

    render() {
        const {username, avatar, updateUsername, sendMessage} = this.props;
        return <div className={"write-message"}>
            <MessageForm
                onSubmit={sendMessage}
                username={username}
                avatar={avatar}
                initialValues={{
                    username,
                    avatar
                }}
            />
        </div>
    }
}

WriteMessage.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    updateUsername: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired
};

export default WriteMessage;