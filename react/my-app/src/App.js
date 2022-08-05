import './App.css';
import BlogPage from './conponents/BlogPage';
import Header from './conponents/Header';
import HomePage from './conponents/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './conponents/Main';


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
          <Routes>     
            <Route path="/" element={<HomePage/>} />
            <Route path="/blog" element={<BlogPage/>} />
          </Routes>    
        <Main />
      </div>
    </Router>
  );
}

export default App;
