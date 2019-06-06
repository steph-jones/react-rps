import React from 'react';
import { Container, Header, Image, Grid, Popup, Modal } from "semantic-ui-react";


class Winner extends React.Component {
    render () {
        return (
            <Grid.Row columns={3}>
            <Grid.Column >
              <Header size='huge' textAlign='center' color='teal'>display your choice here</Header>
            </Grid.Column>
            <Grid.Column >
              <Header size='huge' textAlign='center' color='teal'>display who won here </Header>
            </Grid.Column>
            <Grid.Column >
              <Header size='huge' textAlign='center' color='teal'>display computer choice here </Header>
            </Grid.Column>
          </Grid.Row>
        )
    }
};

export default Winner;