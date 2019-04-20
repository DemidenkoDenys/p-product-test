import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Spinner from 'react-bootstrap/Spinner';

import './modal.css';

class Modal extends Component {

  state = {
    loaded: false
  }

  constructor(props) {
    super(props);
    this.createWrapper();
  }

  componentDidMount() {
    document.body.appendChild(this.wrapper);
  }

  componentWillUnmount() {
    document.body.removeChild(this.wrapper);
  }

  createWrapper = () => {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('modal-wrapper');
    this.wrapper.addEventListener('click', () => this.props.onClicked() );
  }

  render() {
    return ReactDOM.createPortal(
      <>
        <LazyLoadImage
          src={ this.props.image.largeImageURL }
          alt={ this.props.image.tags }
          afterLoad={ () => { this.setState({ loaded: true }) }}/>
        { !this.state.loaded && <Spinner animation="border" role="status" /> }
      </>,
      this.wrapper,
    );
  }
}

export default Modal;

Modal.defaultProps = {
  image: {},
  onCLicked: () => { console.log('PropTyped default onClicked value'); }
};

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  onCLicked: PropTypes.func.isRequired
};

