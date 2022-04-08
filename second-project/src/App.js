import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './Components/Content';
import Home from './Components/Home';
import Main from './Components/Main';
import Page from './Components/Page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>,
          <Route path='/' element={<Main />} />
          <Route path='/content' element={<Content />} />
          <Route path='/home' element={<Home />} />
          <Route path='/page' element={<Page />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
