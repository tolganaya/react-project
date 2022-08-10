import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from "@mui/material/Container";


import { Home, FullPost, QrPost, Registration, AddPost, Login } from "./pages";
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import Footer from './components/Footer/Footer';
import Pricing from './routes/Pricing';
import Training from './routes/Training';
import Contact from './routes/Contact';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, []);

  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/training' element={<Training />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/posts/:id/qr" element={<QrPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
    </>
  );
}

export default App;