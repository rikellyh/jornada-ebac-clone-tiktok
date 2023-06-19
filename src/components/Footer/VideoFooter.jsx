import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AlbumIcon from '@mui/icons-material/Album';

// eslint-disable-next-line react/prop-types
function VideoFooter({ name, description, music }) {
  return (
    <div className='container-video'>
      <div className='text'>
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className='music-details'>
          <MusicNoteIcon />
          <div className='title-music'>
            <p>{music}</p>
          </div>
        </div>
      </div>
      <div className='record-icon'>
        <AlbumIcon />
      </div>
    </div>
  );
}

export default VideoFooter;
