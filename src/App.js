import './App.css';
import Navbar from './components/NavbarComponent';
import PostDetailComponent from './components/PostDetailComponent';
import PostsComponent from './components/PostsComponent';
import './styles.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
        <Route exact path="/" element={<PostsComponent/>} />
        <Route path="/post/:postId" element={<PostDetailComponent/>} />
      </Routes>
    </Router>
  );
}

export default App;
