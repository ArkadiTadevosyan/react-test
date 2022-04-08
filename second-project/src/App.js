import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './Components/Content';
import Main from './Components/Main';




function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>,
          <Route path='/' element={<Main />} />
          <Route path='/content' element={<Content />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
