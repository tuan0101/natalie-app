import './Login.css';
import myvide from "./images/Natalie.mov"

const Gift = () => {
    return (

        <div className="login-form">
                {/* <iframe src="https://www.youtube.com/embed/VsTZikuF7V8"
                    title="Natalie" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    className="video">
                </iframe> */}
                <video width="750" height="500" loop controls src={myvide} className='video'>
                    <source  type="video/mp4"/>
                </video>
                browser does not support the video tag. I suggest you upgrade your browser.
        </div>

    );
};

export default Gift;