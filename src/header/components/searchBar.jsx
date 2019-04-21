import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

const SearchBar = ({ value, placeholder, onChange, onSubmit, loading }) =>
  <Container>
    <Row className="justify-content-center">
      <Col xs={6}>
        <Form onSubmit={ event => { event.preventDefault(); onSubmit(); }}>
          <InputGroup>
            <FormControl
              value={ value }
              onChange={ event => { onChange(event.target.value); }}
              placeholder={ placeholder }
              aria-label={ placeholder }
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="primary" type="submit">
                { loading ? 'Searching' : 'Search' }
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </Col>
    </Row>
  </Container>;

export default SearchBar;

SearchBar.defaultProps = {
  value: '',
  loading: false,
  onChange: () => { console.log('PropTypes default value') },
  onSubmit: () => { console.log('PropTypes default value') },
  placeholder: '',
};

SearchBar.propTypes = {
  value: PropTypes.string,
  loading: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
};

