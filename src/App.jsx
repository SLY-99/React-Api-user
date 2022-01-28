import React from 'react';
import './App.scss';
import {Routes , Route , Navigate} from "react-router-dom";
import Users from "./Pages/Users/users";
import Posts from "./Pages/Posts/posts";
import Comments from "./Pages/Comments/comments";

function App() {
  return (
    <>
    <div className='container'>
      <Routes>
      <Route path='' element={<Navigate to='/users' />} />
        <Route path="users" element={<Users/>} />
        <Route path="posts/:id" element={<Posts/>}/>
        <Route path="comments/:id" element={<Comments/>} />
        <Route path='*' element={<h1>Not found 404</h1>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
