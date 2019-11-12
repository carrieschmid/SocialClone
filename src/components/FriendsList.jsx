import React from "react";
import Friends from "./Friends";

var masterFriendsList = [
    {
        userName: 'Friend1'
    },
    {
        userName:'Friend2'
    }
];

function FriendsList(){
    return (
        <div>
            {masterFriendsList.map((friend, index) =>
            <Friends userName={friend.userName}
            key={index}/>
        )}
     </div>
     );
    }

    export default FriendsList;

