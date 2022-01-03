import React, {useState} from "react";
import './css/style.css';

import TableList from './components/TableList';	
import {Button, Input} from "./components/UI/IndexUI";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, pl: 'C', stack: 'Beginner'},
    {id: 2, pl: 'Python', stack: 'Middle'},
    {id: 3, pl: 'JavaScript', stack: 'Junior'},
  ])
  const [posts2, setPosts2] = useState([
    {id: 1, pl: 'HTML', stack: 'Senior'},
    {id: 2, pl: 'CSS', stack: 'Middle'},
    {id: 3, pl: 'Bootstrap', stack: 'Junior'},
  ])

  return (
    <div className='app w-50 mx-auto mt-5'>
      <form>
        <h5 className="text-center">Create your first post</h5>
        <Input type="text"  className="form-control my-3" placeholder="Favorite Programming Language" />
        <Input type="text"  className="form-control my-3" placeholder="Enter your favorite stack"/>
        <Button disabled className="btn btn-primary w-100">
          Add post
        </Button>
        <Button disabled className="btn btn-outline-secondary w-100 mt-3">
          Clear1
        </Button>

      </form>
        <TableList title="Favorite Programming Language" posts={posts}/>
    </div>
  );
}

export default App;
