import React, { Component } from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import Cartoon from "../images/cartoon.jpg";

class CartoonModal extends Component {
    state = { open: false }
  
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
  
    render() {
      const { open, dimmer } = this.state
  
      return (
        <div>
            <Button basic color="olive" icon onClick={this.show('blurring')}>
                {/* <Icon name='smile' /> Yes */} Yes
            </Button>
          
  
          <Modal dimmer={dimmer} open={open} onClose={this.close}>
            <Modal.Content image>
              <Image wrapped centered src={Cartoon} />
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                This was fun but lets go back...
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      )
    }
  }
  
  export default CartoonModal;