import React from 'react';
import MessageFeed from '../src/component/MessageFeed';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import reduxStore from "./../src/store";
import avatars from "../src/assets/avatars.json";

const messages = [
    {
        id: "id1",
        clientId:"clientId1",
        text: "Hi",
        avatar: avatars[0],
        username:"user1",
        timestamp: Date.now()
    },
    {
        id: "id2",
        clientId:"clientId2",
        text: "Hi",
        avatar: avatars[0],
        username:"user2",
        timestamp: Date.now() - 3600
    }
];

test('username render', () => {

    const messageFeedNoMessages = renderer.create(<Provider store={reduxStore}><MessageFeed clientId={"clientId1"} messages={[]} /></Provider>);
    const usernameFeedNoMessagesTree = messageFeedNoMessages.toJSON();
    expect(usernameFeedNoMessagesTree).toMatchSnapshot();

    const messageFeedOneMessage = renderer.create(<Provider store={reduxStore}><MessageFeed clientId={"clientId1"} messages={[messages[0]]} /></Provider>);
    const usernameFeedOneMessageTree = messageFeedOneMessage.toJSON();
    expect(usernameFeedOneMessageTree).toMatchSnapshot();

    const messageFeedMultipleMessage = renderer.create(<Provider store={reduxStore}><MessageFeed clientId={"clientId1"} messages={messages} /></Provider>);
    const usernameFeedMultipleMessagesTree = messageFeedMultipleMessage.toJSON();
    expect(usernameFeedMultipleMessagesTree).toMatchSnapshot();

});
