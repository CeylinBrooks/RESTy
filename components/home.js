import React from 'react';
import Modal from './modal';
import {If, Then, Else} from './if';

class Homepage extends React.Component {
  costructor(props) {
    this.state = {
      open: false
    }
  }

  toggleModal = () => {
    this.setState({ open: ! this.state.open});
  }

  render() {
    return (
      <section className="home">
        <If condition={this.state.open}>
          <Then> 
            <Modal title="Modal window" close={this.toggleModal}>
              
            </Modal>
          </Then>
        </If>
      </section>
    )
  }
}