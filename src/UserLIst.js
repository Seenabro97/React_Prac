import React from "react";

function User({User,onRemove}){
    return(
        <div>
            <b style={{margin:'5px'}}>{User.username}</b>
            <span>{User.email}</span>
            <button style={{margin:'5px'}} onClick={()=>{onRemove(User.id)}}>Del</button>
        </div>
    )
}

function UserList({users,onRemove}){
    
    return(
        users.map(user=>
            (<User User={user} key={user.id} onRemove={onRemove}></User>)
        )
    )
}

export default UserList;