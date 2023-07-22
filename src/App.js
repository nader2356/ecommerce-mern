import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlice';

function App() {

  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 
  useEffect(()=>{
    (async()=>{
      const res = await fetch("http://localhost:8080/product",{
        method : "GET",
        headers : {
          "content-type" : "application/json"
        },
        
      })
      const resData = await res.json()
     
      dispatch(setDataProduct(resData))
    })()
  },[])

  return (
    <div >
     <Header/>
     <main className='pt-16'>
      <Outlet/>
     </main>
    </div>
  );
}

export default App;
