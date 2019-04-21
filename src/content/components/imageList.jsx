import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from './imageItem';
import { Container, Row, Col } from 'react-bootstrap';

import './imageList.css';

const ImageList = ({ images }) => 
  <Container>
    <Row>
      <Col xs={12}>
        <ul className="image-list" >
          { images.length > 0
            ? images.map(image => <ImageItem key={image.id} image={image}/> )
            : <li className="image-item-empty">no images has found</li> }
        </ul>
      </Col>
    </Row>
  </Container>;
  
export default ImageList;

ImageList.defaultProps = {
  images: []
};

ImageList.propTypes = {
  images: PropTypes.array
};