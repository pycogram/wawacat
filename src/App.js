import logo from './logo.svg';
import './App.css';
import { Page } from './Page';

const objIcon = {
  tg: require('./icon/tg.png'),
  x: require('./icon/twitter.png'),
  ray: require('./icon/ray.png'),
  dext: require('./icon/dext.png'),
  dexs: require('./icon/dexs.png')
}
const objImg = {
  logo1: require('./pic/cb0.jpeg'),
  logo2: require('./pic/cb3.jpg'),
  logo3: require('./pic/cb9.jpg')
}
const objGif = {
  gif1: require('./pic/cb0.jpeg'),
  gif2: require('./pic/cb0.jpeg'),
  gif3: require('./pic/cb0.jpeg'),
  gif4: require('./pic/cb0.jpeg'),
  gif5: require('./pic/cb0.jpeg'),
  gif6: require('./pic/cb0.jpeg'),
  gif7: require('./pic/cb0.jpeg')
}

const testImg = require('./icon/dexs.png');

function App() {
  return (
    <div className="App" >
      < Page objIconPro = {objIcon} objImgPro = {objImg} objGifPro = {objGif} />
    </div>
  );
}

export default App;
