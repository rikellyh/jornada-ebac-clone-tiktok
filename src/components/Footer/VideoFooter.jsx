import MusicNoteIcon from '@mui/icons-material/MusicNote';
import AlbumIcon from '@mui/icons-material/Album';

function VideoFooter() {
  return (
    <div className='container-video'>
      <div className='text'>
        <h3>@user</h3>
        <p>Descrição</p>
        <div className='music-details'>
          <MusicNoteIcon />
          <div className='title-music'>
            <p>Título da música</p>
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
