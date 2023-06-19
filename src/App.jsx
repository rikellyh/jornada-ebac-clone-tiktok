import SectionVideo from './pages/SectionVideo/SectionVideo.jsx';
import './styles/app.css';

function App() {
  return (
    <>
      <div className='App'>
        <div className='app-videos'>
          <SectionVideo
            likes={100}
            messages={200}
            shares={300}
            name='KellyJoestar'
            description='Comprinhas na Urbanic'
            music='Sia - Unstoppable Instrumental'
          />
        </div>
      </div>
    </>
  );
}

export default App;
