import React from "react";

class ClassClick extends React.Component {

    classClick(){
        console.log("clicked");
    }
    render() { 

        return <div>
            <button onClick={this.classClick}>Click me</button>
        </div>;
    }
}
 
export default ClassClick ;