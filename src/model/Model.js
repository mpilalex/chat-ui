import _ from "underscore";

class Model{

    constructor(){
        Object.defineProperties(this, {
            props:{
                writable: false,
                enumerable: false,
                val: {}
            }
        })
    }

    getProp(prop){
        return this.props[prop];
    }

    getProps(){
        return _.extend({}, this.props);
    }

    setProp(name, val){
        this.props[name] = val;
    }

    setProps(props){
        _.each(props, (val, name) => {
            this.props[name] = val;
        });
    }

}

export default Model;