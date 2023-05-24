import React, { useState, useEffect} from 'react';
import './App.css';
import FlexH3Grow from './components/layout/FlexH3Grow/FlexH3Grow';
import Header from './components/ui/Header/Header';
import Navbar from './components/ui/Navbar/Navbar';
import FlexW1Grow from './components/layout/FlexW1Grow/FlexW1Grow';
import Footer from './components/ui/Footer/Footer';
import * as BS from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import MemeThunbnail from './pages/MemeThunbnail.jsx/MemeThunbnail';
import MemeEditor from './pages/MemeEditor/MemeEditor';
import PdfThumbnail from './pages/PdfThumbnail/pdfThumbnail';

function App() {
  
  return (
    <div className='App'>
      <BS.Container fluid>
        <BS.Row>
          <BS.Col>
            <Header>
              <img src="https://gitlab.imperiumclan.fr/uploads/-/system/appearance/logo/1/logo270.png" alt=''/> 
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
                  <Route path="/thumbnail" element={ 
                    <MemeThunbnail/>
                  } />
                  <Route path="/meme" element={ 
                    <MemeEditor/>
                  }/>
                  <Route path="/pdf" element={ 
                    <PdfThumbnail/>
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
