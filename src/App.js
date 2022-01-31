import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { useMediaQuery } from "./hooks/useMediaQuery";

//Import Data
import { data } from './utils/data';


function App() {
  
  //Check if the window width is less than the minWidth
  const isMobile = useMediaQuery(768);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main data={data} />} />
      </Routes>
      <Footer isMobile={isMobile} data={data} />
    </Router>

  );
}

export default App;
