// import React, { Component, useState } from "react";
// import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
   
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Start</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
      
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }
// }


// export default App;



import React, { useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
    const [renderBall, setRenderBall] = useState(false);
    const [ballPosition, setBallPosition] = useState(0);

    const buttonClickHandler = () => {
        setRenderBall(true);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight' || event.keyCode === 39) {
            setBallPosition(prevPosition => prevPosition + 5);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const renderBallOrButton = () => {
        if (renderBall) {
            return <div className="ball" style={{ left: `${ballPosition}px` }}></div>;
        } else {
            return <button className="start" onClick={buttonClickHandler}>Start</button>;
        }
    };

    return (
        <div className="playground">
            {renderBallOrButton()}
        </div>
    );
};

export default App;
