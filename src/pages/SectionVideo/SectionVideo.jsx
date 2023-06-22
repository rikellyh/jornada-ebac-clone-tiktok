/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import '../../styles/section.css';
import VideoFooter from '../../components/Footer/VideoFooter';
import VideoSidebar from '../../components/Sidebar/VideoSidebar';

function SectionVideo({
  likes,
  messages,
  shares,
  name,
  description,
  music,
  url,
}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className='video'>
      <video
        className='video-player'
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default SectionVideo;
