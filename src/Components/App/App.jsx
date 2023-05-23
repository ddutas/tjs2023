import React, { useState, useEffect} from 'react';
import './App.css';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import Footer from './components/ui/Footer/Footer';
import { MemeSVGViewer, emptyMeme } from 'orsys-tjs-meme';
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import * as BS from 'react-bootstrap';

function App() {

  const dbUrl = 'http://localhost:5679/images';

  const [meme, setMeme] = useState(emptyMeme);
  const [imgs,setImgs] = useState([]);
  
  useEffect(() => {
    fetch(dbUrl)
      .then(r => r.json())
      .then(arr => setImgs(arr))
  },[]);

  return (
    <div className='App'>
      <BS.Container fluid>
        <BS.Row>
          <BS.Col>
            <Header>
              <img src="https://gitlab.imperiumclan.fr/uploads/-/system/appearance/logo/1/logo270.png"/> 
              Imperium Clan
            </Header>
          </BS.Col>
        </BS.Row>
        <BS.Row>
          <BS.Col>
            <FlexH3Grow>
              <Navbar/>
              <FlexW1Grow>
                <MemeSVGViewer meme={meme} image={imgs.find((img)=>img.id === meme.imageId)} basePath='' />
                <MemeForm meme={meme} images={imgs} onMemeChange={(meme) => {
                    setMeme(meme)
                }}/>
              </FlexW1Grow>
              
            </FlexH3Grow>
          </BS.Col>
        </BS.Row>
        <BS.Row>
          <BS.Col>
            <Footer></Footer>
          </BS.Col>
        </BS.Row>
      </BS.Container>
    
    
    </div>
  );
}

export default App;
