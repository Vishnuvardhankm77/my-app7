import Counter from './Counter';
import './App.css';
import Todolist from './Todolist';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='mybox'>
          <h1>Reactjs application by  vishnuvardhan</h1>
          <Link to='/counter'>Counter</Link>&nbsp;&nbsp;
          <Link to='/todolist'>Todolist</Link>&nbsp;&nbsp;
          <Outlet></Outlet>
        </div>
     
  );
}

export default App;
