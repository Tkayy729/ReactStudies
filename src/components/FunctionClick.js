import React from 'react'

export default function FunctionClick() {

    function clickMe(){
        console.log("button clicked");
    }

    return (
        <div>
            <button onClick={clickMe}>Click</button>
        </div>
    )
}
