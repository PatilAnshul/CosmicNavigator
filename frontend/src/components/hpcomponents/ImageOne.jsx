import { Parallax } from 'react-parallax';
import Nasa from '../../img/nasa.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={Nasa} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">A Glimpse into the Infinite</span>
        </div>
    </Parallax>
);

export default ImageOne