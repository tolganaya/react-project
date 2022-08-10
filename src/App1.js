import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from './routes/Contact';

import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training';
import { Header } from "./components";
import { FullPost, QrPost, Registration, AddPost, Login, login } from "./pages";
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/posts/:id" element={<FullPost />} />
        <Route path="/posts/:id/edit" element={<AddPost />} />
        <Route path="/posts/:id/qr" element={<QrPost />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/login" element={<login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;