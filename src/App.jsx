
import { useEffect } from 'react';
import HeaderView from '@layout/Header/HeaderView'
import FooterView from '@layout/Footer/FooterView'
import { initMenuScript } from '@utils/menuScript';
import { MoveTop } from './MoveTop';
import { BrowserRouter as Router } from 'react-router-dom';
import ContentView from '@layout/Content/ContentView';
import Chat from './Chat';


function App() {

  useEffect(() => {
    initMenuScript();
  }, []);

  return (
    <>

      <Router>
        <HeaderView />

        {/* Aqui esta el contenido */}
        <ContentView />

        <FooterView />
        <MoveTop />
        <Chat />
      </Router>

    </>
  )
}

export default App
