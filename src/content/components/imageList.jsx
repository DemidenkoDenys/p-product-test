import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/modal/modal';
import { Container, Row, Col } from 'react-bootstrap';

import './imageList.css';

class ImageList extends Component{

  state = {
    selectedImage: {},
    modalOpened: false
  }

  toggleModal = image => {
    this.setState({
      selectedImage: this.state.modalOpened || !image ? {} : image,
      modalOpened: !this.state.modalOpened
    });
  }

  render() {
    return <Container>
      <Row>
        <Col xs={12}>
          <ul className="image-list" >
            {
              this.props.images.length ? this.props.images.map(image =>
                <li key={ image.id } className="image-item" >
                  <img
                    src={ image.webformatURL }
                    alt={ image.tags }
                    onClick={() => { this.toggleModal(image); }}
                  />
                </li>
              ) : <li className="image-item-empty">no images has found</li>
            }
          </ul>

          { this.state.modalOpened && this.state.selectedImage &&
            <Modal
              image={ this.state.selectedImage }
              onClicked={() => { this.toggleModal() }}>
            </Modal> }

        </Col>
      </Row>
    </Container>;
  }
}

export default ImageList;

ImageList.defaultProps = {
  images: []
};

ImageList.propTypes = {
  images: PropTypes.array
};

