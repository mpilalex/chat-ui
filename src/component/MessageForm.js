import React from "react";
import Component from "./BaseComponent";
import PropTypes from "prop-types";
import {Form, Button} from "semantic-ui-react";
import {reduxForm, Field} from "redux-form";
import TextArea from "./Form/TextArea";
import {SEND_MESSAGE_FORM} from "../constants/Component";

const renderForm = (props) => {
    const {username, avatar} = props;
    return <div>
        <TextArea {...props} />
        <div className={"buttons"}>
            <Button primary disabled={!props.input.value || !username || !avatar}>Send</Button>
        </div>
    </div>
};

class MessageForm extends Component{

    render(){
        const {handleSubmit, invalid, username, avatar} = this.props;

        return <Form onSubmit={handleSubmit}>
            <Field username={username} avatar={avatar} name="text" component={renderForm} />
        </Form>
    }
}

MessageForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    username: PropTypes.string,
    avatar: PropTypes.string
};

const MsgForm = reduxForm({
    form: SEND_MESSAGE_FORM
})(MessageForm);

export default MsgForm;

