import React from 'react';
import Introduction from './pages/introduction/index'

//importanto os estilos da página
import { GlobalStyle } from './global_style'
import Routes from './routes'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Routes/>
    </div> 
  );
}

export default App;
