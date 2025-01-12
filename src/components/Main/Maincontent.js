import React, { useContext } from 'react'
import { IoMdSend } from "react-icons/io";
import { Context } from '../context/contextProvider'
import './main.css'

const apiStatus = {
  pending:'PEN',
  success:'SUC',
  fialure:'FAIL'
}

const Maincontent = () => {
  const {userQuery,setUserQuery,resultData,getAction,load,changeInput,setChangeInput} = useContext(Context)

  const setInput = (event) => {
    if(event.key === 'Enter'){
      setChangeInput('')
      getAction(event.target.value)
      setUserQuery(event.target.value)
    }
  }


  const showLoader = () => <p>Loading....</p>
  
  const showContent = () => <p dangerouslySetInnerHTML={{__html:resultData}} className='dynamic'></p>


  const renderContentLoadView = () => {
    switch (load) {
      case apiStatus.pending:
        return showLoader();
      case apiStatus.success:
        return showContent();
      default:
        return null
    }
  }

  return (
    <div className='main-content'>
      <div className='heading-container'>
          <h1 className='heading'>AI text</h1>
      </div>
      <div className='query-container'>
      <p className='query'>{userQuery}</p>
        {renderContentLoadView()}
        
      </div>
      <div className='input-container'>
        <input value={changeInput} 
        onChange={(e) => setChangeInput(e.target.value)} 
        onKeyUp={(e) => setInput(e)} 
        type='text' placeholder='Enter what you want!'/>
        <button className='sent'>
          <IoMdSend/>
        </button>
      </div>
    </div>
  )
}

export default Maincontent
