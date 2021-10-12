import React, {useState, useRef} from "react";

function Input() {
    
    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    });

    const inputName=useRef();
    const {name,nickname}=inputs;

    const onChange=(e)=>{
        const {name,value}=e.target;
        setInputs({
            ...inputs,
            [name]:value
        });
    };

    const onReset=()=>{
        setInputs({
            name:' ',
            nickname:' '
        });
        inputName.current.focus();
    };

    return(
        <div>
            <input name='name' style={{margin:'10px'}} placeholder='name' onChange={onChange} value={name} ref={inputName}/>
            <input name='nickname' style={{margin:'10px'}} placeholder='nickname' onChange={onChange} value={nickname}/>
            <button onClick={onReset}>reset</button><br></br>
            <b>value: {name}, ({nickname}) </b>
        </div>
    )
}

export default Input