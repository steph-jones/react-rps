import React from 'react';
import OptionBox from "./Components/OptionBox.js";
import rock from "./images/rock.png";
import paper from "./images/paper.png";
import scissors from "./images/scissors.jpg";
import CartoonModal from "./Components/Cartoon.js";
import Result from "./Components/Result.js";
import { Container, Header, Image, Grid, Popup, Modal } from "semantic-ui-react";


const style = {
  borderRadius: 0,
  opacity: 0.7,
  padding: '2em',
}

class App extends React.Component {
  state = { userChoice: null, compChoice: null, showResults: false};

  optionClick = (option) => {
    debugger
  };

  toggleShowMiddle = () => {
    this.setState({ showResults: !this.state.showResults, }); 
    this.setState( state => {
      return {showResults: !this.state.showResults };
    }) // use this syntax if you need to set state then access that new set state
  }

  render() {
    return(
      <Container style={{marginTop: "25px",  }} >
        <Grid container centered columns='equal'>
          <Grid.Row columns={1}>
            <Grid.Column centered>
              <Header size='huge' textAlign='center' color='teal'>Rock Paper Scissors</Header>
              <Header size='medium' color='teal' textAlign='center'> Wanna see a semi inappropriate cartoon? <CartoonModal /></Header> 
              <hr />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Popup
                trigger={<Grid.Column>
                          <OptionBox name="rock" img={rock} optionClick={this.optionClick} />
                        </Grid.Column>}
                content='This option is rock.'
                size='small'
                position='top center'
                style={style}
                inverted
            />
            <Popup
                trigger={<Grid.Column>
                          <OptionBox name="paper" img={paper} /> 
                        </Grid.Column>}
                content='This option is paper.'
                size='small'
                position='top center'
                style={style}
                inverted
            />
            <Popup
                trigger={<Grid.Column>
                          <OptionBox name="scissors" img={scissors} />
                        </Grid.Column>}
                content='This option is scissors.'
                size='small'
                position='top center'
                style={style}
                inverted
            />
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column >
              <Header size='large' textAlign='center' color='pink'> ^ Choose one ^ * have this disappear when next line shows </Header>
            </Grid.Column>
          </Grid.Row>
          {/* <Grid.Row columns={3}>
            <Grid.Column >
              <Header size='huge' textAlign='center' color='teal'>display your choice here</Header>
            </Grid.Column>
            <Grid.Column >
              <Header size='huge' textAlign='center' color='teal'>display who won here </Header>
            </Grid.Column>
            <Grid.Column >
              <Header size='huge' textAlign='center' color='teal'>display computer choice here </Header>
            </Grid.Column>
          </Grid.Row> */}
          <Grid.Row columns={1}>
            <Grid.Column >
              <hr/>
              <Header size='small' textAlign='center'>display counter here </Header> <Result/> 
            </Grid.Column>
          </Grid.Row>
        </Grid>


      </Container>
    );
  };
};

export default App;
