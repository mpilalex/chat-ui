import React from "react";
import Component from "../BaseComponent";
import PropTypes from "prop-types";
import View from "./View";
import Form from "./Form";

class Username extends Component{

    state = {
        edit: false
    };

    componentWillMount(){
        const {username} = this.props;
        if(!username){
            this.setState({edit: true})
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.username && !this.props.username){
            this.setState({edit: false})
        }
    }

    editMode(){
        this.setState({edit: true})
    }

    viewMode(){
        this.setState({edit: false})
    }

    onUpdate(values){
        const {onUpdate} = this.props;
        onUpdate(values);
        this.viewMode();
    }

    render(){
        const {edit} = this.state;
        const {username} = this.props;
        if(edit){
            return <Form
                initialValues={{
                    username
                }}
                onSubmit={this.onUpdate.bind(this)}
            />
        }
        return <View
            editMode={this.editMode.bind(this)}
            username={username} />
    }
}

Username.propTypes = {
    username: PropTypes.string,
    onUpdate: PropTypes.func.isRequired
};


export default Username;