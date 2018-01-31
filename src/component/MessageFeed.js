import React from "react";
import Component from "./BaseComponent";
import PropTypes from "prop-types";
import {Feed, FeedContent, FeedEvent, FeedSummary, FeedLabel, FeedDate, FeedExtra} from "semantic-ui-react";
import _ from "underscore";
import moment from "moment"

class MessageFeed extends Component {

    componentDidUpdate(prevProps){
        if(this.props.messages.length !== prevProps.messages.lenght){
            this.refs.messageFeed.scrollTop = this.refs.messageFeed.scrollHeight;
        }
    }

    render() {
        let {messages, clientId} = this.props;
        messages = _.sortBy(messages, "timestamp");
        messages.reverse();
        return <div className={"message-feed"} ref={"messageFeed"}>
            <Feed>
                {
                    _.map(messages, message => {
                        const className = message.clientId === clientId ? "mine" : "user";
                        return <FeedEvent className={className} key={message.id}>
                            <FeedLabel>
                                <img src={message.avatar}/>
                            </FeedLabel>
                            <FeedContent>
                                <FeedSummary>
                                    {message.username}
                                    <FeedDate>{moment(message.timestamp).fromNow()}</FeedDate>
                                </FeedSummary>
                                <FeedExtra text>
                                    {message.text}
                                </FeedExtra>
                            </FeedContent>
                        </FeedEvent>
                    })
                }
            </Feed>
        </div>
    }
}

MessageFeed.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    clientId: PropTypes.string.isRequired
};


export default MessageFeed;