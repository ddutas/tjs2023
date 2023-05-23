import React, { useState, useEffect} from 'react';
import './App.css';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import Footer from './components/ui/Footer/Footer';
import { MemeSVGViewer, MemeSVGThumbnail, emptyMeme } from 'orsys-tjs-meme';
import MemeForm from './components/functionnal/MemeForm/MemeForm';
import * as BS from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

function App() {

  const dbUrl = 'http://localhost:5679';

  const [meme, setMeme] = useState(emptyMeme);
  const [memes, setMemes] = useState([]);
  const [imgs,setImgs] = useState([]);
  
  useEffect(() => {
    const im = fetch(dbUrl + '/images')
      .then(r => r.json())
      // .then(arr => setImgs(arr));

    const me = fetch(dbUrl + '/memes')
      .then(r => r.json())
    
      Promise.all([im,me])
        .then((values) => {
          setMemes(values[1])
          setImgs(values[0])
        });
    
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
                <Routes>
                  <Route path="/thumbnail" element={ <MemeSVGThumbnail memes={memes} images={imgs} basePath=''/> } />
                  <Route path="/meme" element={ 
                    <>
                      <MemeSVGViewer meme={meme} image={imgs.find((img)=>img.id === meme.imageId)} basePath='' />
                      <MemeForm meme={meme} images={imgs} onMemeChange={(meme) => {
                        setMeme(meme)
                        }}/> 
                    </>
                  }/>
                </Routes>
                
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
