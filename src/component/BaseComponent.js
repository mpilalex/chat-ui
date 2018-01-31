import React, {Component} from "react";
import shallowCompare from "react-addons-shallow-compare";

class BaseComponent extends Component{

    shouldComponentUpdate(nextProps, nextState){
        return shallowCompare(this, nextProps, nextState);
    }
}

export default BaseComponent;