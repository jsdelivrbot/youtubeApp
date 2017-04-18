import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoDetail from './components/video_detail.js';
import VideoList from './components/video_list.js';

const API_KEY = 'AIzaSyC34sFbFM7Qen_zSoHcUdf6MkWhl7GE-dE';

// creating app component - here it is a class component since we are using ES6 class
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo : null
    };

    this.videoSearchTerm('surfboards')
  }

  videoSearchTerm(term){
    YTSearch({key:API_KEY, term:term}, videos => {
        console.log(videos);
        this.setState({
          videos:videos,
          selectedVideo:videos[0]
        });
    });
  }


  render(){
    const videoSearch = _.debounce( term => this.videoSearchTerm(term), 500);
    return(
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
