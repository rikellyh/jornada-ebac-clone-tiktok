import { useRef, useState } from 'react';
import meuVideo from '../../assets/comprinhas.mp4';
import '../../styles/section.css';
import VideoFooter from '../../components/Footer/VideoFooter';
import VideoSidebar from '../../components/Sidebar/VideoSidebar';

// eslint-disable-next-line react/prop-types
function SectionVideo({ likes, message, shares, name, description, music }) {
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
        src={meuVideo}
      ></video>
      <VideoSidebar likes={likes} message={message} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default SectionVideo;
