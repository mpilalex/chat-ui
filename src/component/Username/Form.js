import React from "react";
import PropTypes from "prop-types";
import Component from "./../BaseComponent";
import {Icon, Form, Button} from "semantic-ui-react";
import TextField from "../Form/TextField";
import {reduxForm, Field} from "redux-form";

class UsernameForm extends Component{
    render(){
        const {handleSubmit} = this.props;
        return <Form className={"username-form"} onSubmit={handleSubmit}>
            <Field name="username" component={TextField} />
            <Button icon><Icon name={"checkmark"} /></Button>
        </Form>
    }
}

UsernameForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: "username"
})(UsernameForm);