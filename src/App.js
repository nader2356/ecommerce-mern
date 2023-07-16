import logo from './logo.svg';
import './App.css';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div >
    
     <main className='pt-16'>
      <Outlet/>
     </main>
    </div>
  );
}

export default App;
