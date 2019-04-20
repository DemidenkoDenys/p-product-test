import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './header/components/searchBar';
import ImageList from './content/components/imageList';

import './App.css';


class App extends Component {

  api = 'https://pixabay.com/api/';
  key = '12249647-dab6ecae1cecfdcb9f649786a';
  url = `${this.api}?key=${this.key}`;
  // headers = { 'Access-Control-Allow-Origin': '*' };

  state = {
    init: true,
    images: [],
    loading: false,
    searchString: ''
  }

  onSearchChanged = searchString => {
    this.setState({ searchString });
  }

  onSearchSubmitted = () => {
    this.getImages(`&image_type=photo&q=${this.state.searchString}`);
  }

  getImages = async (params) => {
    const url = `${this.url}${params}`;
    this.setState({ loading: true });
    const { data: { hits: images } } = await axios.get(url);
    this.setState({
      images,
      loading: false,
      init: false
    });
  }

  render() {
    return <>

      <header className={ `search-wrapper ${this.state.init ? 'fullscreen-init' : ''}` } >
        <SearchBar
          value={ this.state.searchString }
          loading={ this.state.loading }
          onChange={ this.onSearchChanged }
          onSubmit={ this.onSearchSubmitted }
          placeholder="What images would you like to see on Pixabay?"
        />
      </header>

      <main>
        <ImageList images={ this.state.images } />
      </main>

    </>;
  }
}

export default App;
