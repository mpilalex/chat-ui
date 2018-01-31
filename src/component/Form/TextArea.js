import React from "react";
import {FormTextArea} from "semantic-ui-react";

const TextArea = ({input, meta: {touched, error}}) => {
    return <FormTextArea
        onChange={input.onChange}
        value={input.value}
        error={touched && error}
    />
};

export default TextArea;