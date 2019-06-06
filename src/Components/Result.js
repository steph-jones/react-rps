import React from 'react';
import Winner from './Winner.js';
import { Container, Button, } from "semantic-ui-react";

class Result extends React.Component {
    state = { userChoice: null, compChoice: null, showResults: false};
  
    // optionClick = (option) => {
    //   debugger
    // };
  
    toggleShowResults = () => {
      this.setState({ showResults: !this.state.showResults, }); 
      this.setState( state => {
        return {showResults: !this.state.showResults };
      }) // use this syntax if you need to set state then access that new set state
    }

    render() {
        return (
        <Container style={{ marginTop: "25px", }}>
            {/* { this.state.showClock ? <Clock /> : null }  this says render something or null but you can write it differently too... */} 
            { this.state.showResults && <Winner /> } 
        
            <Button onClick={this.toggleShowResults}
            color="purple"
            color="purple">Toggle Winner</Button>

        </Container>
        )
    };
};

export default Result;
