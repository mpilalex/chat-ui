import Model from "./Model";


class Message extends Model{

    getAvatar(){
        return this.getProp("avatar")
    }

    getUserName(){
        return this.getProp("username")
    }

    getText(){
        return this.getProp("text")
    }

    getTimestamp(){
        return this.getProp("timestamp")
    }

}

export default Message;