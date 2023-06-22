import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

import SectionVideo from './pages/SectionVideo/SectionVideo';
import db from './config/firebase.js';
import './styles/app.css';

function App() {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const dbVideos = collection(db, 'videos');
    const videoSnapshot = await getDocs(dbVideos);
    const listVideos = videoSnapshot.docs.map((doc) => doc.data());
    setVideos(listVideos);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      <div className='App'>
        <div className='app-videos'>
          {videos.map((video) => {
            return (
              <>
                <SectionVideo
                  likes={video.likes}
                  messages={video.messages}
                  shares={video.shares}
                  name={video.name}
                  description={video.description}
                  music={video.music}
                  url={video.url}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
