import { useRef, useState } from 'react';
import meuVideo from '../../assets/comprinhas.mp4';
import '../../styles/section.css';

function SectionVideo() {
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
    </div>
  );
}

export default SectionVideo;
