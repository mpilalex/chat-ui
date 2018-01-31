import React from 'react';
import Username from '../src/component/Username';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import reduxStore from "./../src/store";

test('username render', () => {

    const usernameFormComponent = renderer.create(<Provider store={reduxStore}><Username onUpdate={() => {}} /></Provider>);
    const usernameFormTree = usernameFormComponent.toJSON();
    expect(usernameFormTree).toMatchSnapshot();

    const usernameViewComponent = renderer.create(<Provider store={reduxStore}><Username username={"epictetus"} onUpdate={() => {}} /></Provider>)
    const usernameViewTree = usernameViewComponent.toJSON();
    expect(usernameViewTree).toMatchSnapshot();

});
