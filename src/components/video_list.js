import React, { COmponent} from 'react';
import VideoListItem from './video_list_item.js'

// Here the VideoList component is a functional component right now.
const VideoList = (props) => {
  const videos = props.videos.map( (video) => {
    return(
      <VideoListItem
        onVideoSelect ={props.onVideoSelect}
        video = {video}
        key={video.etag} />
   );
  });

  return(
    <ul className="col-md-4 list-group">
      {videos}
    </ul>
  );
};

export default VideoList;
