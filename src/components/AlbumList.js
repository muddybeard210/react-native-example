import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      /* using album.title as the unique identifier for each album.  Can be anything that is unique.  Best option is to use a unique id if possible (something that mongo already provides...) */
      <Text key={album.title}>{album.title}</Text>
    );
  }

  render() {
    console.log('this.state', this.state);
    console.log(this.renderAlbums());

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
