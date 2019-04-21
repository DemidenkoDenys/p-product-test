import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Modal from '../../components/modal/modal';

class ImageItem extends PureComponent{

  state = { modalImage: null }

  openModal = image => this.setState({ modalImage: image || null });

  render() {
    const { image } = this.props;
    
    return <>
      <li className="image-item">
        <img
          src={ image.webformatURL }
          alt={ image.tags }
          onClick={ () => this.openModal(image) }
        />
      </li>

      { this.state.modalImage && <Modal
          image={ this.state.modalImage }
          onClicked={() => { this.openModal(); }}>
        </Modal> }
    </>;
  }
};

export default ImageItem;

ImageItem.defaultProps = {
  image: []
};

ImageItem.propTypes = {
  image: PropTypes.array
};