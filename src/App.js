import { useContext } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/sidebar';
import { Context } from './components/context/contextProvider';
import Maincontent from './components/Main/Maincontent';

// function App() {
//   const {inpVal,setInpVal,getAction,resultData,load} = useContext(Context)

//   const showContent = () => {
//     return (
//       <p dangerouslySetInnerHTML={{__html:resultData}} className='result-text'></p>
//     )
//   }
//   const loaderAnimation = () => <h1 className='green'>Loader...</h1>

//   return (
//     <div className='image-gen'>
//       <h1 className='h1'>AI<span>GEN</span></h1>
//       <div className='text-data'>
//         {load ? loaderAnimation() : showContent()}  
//       </div>
//       <div className='input-container'>
//         <input value={inpVal} onChange={(e) => setInpVal(e.target.value)} placeholder='Text what you want' type='text'/>
//         <button onClick={() => getAction(inpVal)} className='gen'>GET</button>
//       </div>
//   </div>
//   )
// }

function App(){
  const {inpVal,setInpVal,getAction,resultData,load} = useContext(Context)
  return (
    <div className='gen-text'>
      <Sidebar/>
      <Maincontent/>
    </div>
  )
}

export default App;
