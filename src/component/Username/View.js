import React from "react";
import PropTypes from "prop-types";
import Component from "./../BaseComponent";
import {Button, Icon} from "semantic-ui-react";


class UsernameView extends Component{
    render(){
        const {username, editMode} = this.props;
        return <div className={"username-view"}>
            {username}
            <Button icon onClick={editMode}><Icon name={"write"} /></Button>
        </div>
    }
}

UsernameView.propTypes = {
    username: PropTypes.string.isRequired,
    editMode: PropTypes.func.isRequired
};

export default UsernameView;