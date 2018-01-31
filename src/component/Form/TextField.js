import React from "react";
import {Input} from "semantic-ui-react";

const TextField = ({input, meta: {touched, error}}) => {
    return <Input
        onChange={input.onChange}
        value={input.value}
        error={touched && error}
    />
};

export default TextField;