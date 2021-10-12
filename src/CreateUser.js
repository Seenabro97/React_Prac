import React from "react";

function CreateUser({name,email,onChange,onCreate}){
    return(
        <div> 
            <input name='name' style={{margin:'5px'}} placeholder='name' onChange={onChange} value={name}></input>
            <input name='email' style={{margin:'5px'}} placeholder='e-mail' onChange={onChange} value={email}></input>
            <button onClick={onCreate}>create</button>
        </div>
    );

}

export default CreateUser;