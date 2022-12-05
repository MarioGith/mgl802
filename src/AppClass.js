import React from 'react';
import logo from './logo.svg';
import './App.css';

class AppClass extends React.Component {
  
    constructor() {
        super();
        this.state = {
            marioPoint: 0,
            emoji: ""
        }
    }

    setEmoji = () => {
        if (this.state.marioPoint < 5) {
            this.setState({
                emoji: "😭"
            })
        }
        else if (this.state.marioPoint < 10) {
            this.setState({
                emoji: "😢"
            })
        }
        else if (this.state.marioPoint < 15) {
            this.setState({
                emoji: "😄"
            })
        }
        else if (this.state.marioPoint < 19) {
            this.setState({
                emoji: "🥳"
            })
        }
    }

    render() {
        return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={() => {
                this.setState({
                    marioPoint: this.state.marioPoint+1
                });
                this.setEmoji();
            }}>Give Mario some points on his presentation</button>
            <h2>For the moment I have {this.state.marioPoint}/20</h2>
            <h2>{this.state.emoji}</h2>
            </header>
        </div>
        );
    };
  }
  
  export default AppClass;
  