import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from "@mui/material/Container";

import Navbar from "./components/Navbar/Navbar";
import { Home, FullPost, QrPost, Registration, AddPost, Login } from "./pages";
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import Video from './components/Video/Video';
import Footer from './components/Footer/Footer';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  
  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, []);

  return (
    <>
      <Navbar />
      <Video />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/posts/:id/qr" element={<QrPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;