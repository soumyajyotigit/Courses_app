import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col } from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/Addcourse';
import Header from './components/Header';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  const btnHandle = () => {
    toast.success("done");
  };
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<Allcourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;