import React, { useContext, useState } from 'react'
import { FaRegClock } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Context } from '../context/contextProvider';
import './side.css'

const Sidebar = () => {
  const [sidebar,setSidebar] = useState(false)
  const {recentsHistory,getAction} = useContext(Context)

  const assignQuery = query => {
    getAction(query)
  }

  let sideClass = sidebar ? 'show' : 'hide'
  let contentShow = sidebar ? 'content' : ''
  let listContent = sidebar ? 'list-con' : ''
  return (
    <div className={`side-bar ${sideClass}`}>
      <button className='arrow' onClick={() => setSidebar(pre => !pre)}>
          <FaArrowRight/>
      </button>
      <div className={`recent-heading-con ${contentShow}`}>
        <p>Recent</p>
        <FaRegClock/>
      </div>
      <ul className={`recents ${listContent}`}>
        {recentsHistory === undefined ? <p>No Recents</p> : recentsHistory.map(each => <p onClick={() => assignQuery(each)}>{each}</p>)}
      </ul>
    </div>
  )
}

export default Sidebar
