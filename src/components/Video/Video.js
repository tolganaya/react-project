import React from 'react';
import './VideoStyles.css';

import spaceVideo from '../../assets/web-back.mp4';

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            {/* <div className='content'>
                <h1>ESKE SALU.</h1>
                <p>Сгенерируй QR-код и сохрани воспоминания об умерших близких</p>
                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/register' className='btn btn-light'>
                    <Button variant="contained" color="inherit">Начать</Button>                        
                    </Link>
                </div>
            </div> */}
        </div>
    )
};

export default Video;