import React from "react";
import './hello.css';

function hello() {
    const test='something wrong';
    const style={
        backgroundColor: 'yellow',
        color: 'black',
        fontSize: '1em',
        padding:'5px'

    }
    return (
        <>
            <div style={style}>
                {test}
            </div>
            <div className='red_box'>

            </div>
        </>
    )
}

export default Hello;