import React, {useContext} from 'react'
import style from './Header.module.css'
import {langContext} from './../../App.js'

const Header = props => {
  const lang = useContext(langContext)
  const langBlock = lang.header;
  return (
    <header>
      <div className={style.container}>
        <div className={style.logo}>
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Current_Bank_Logo.png/1280px-Current_Bank_Logo.png" alt="" /></a>
        </div>
        <div className={style.main}><a href="#"><button className="btn">{langBlock.main}</button></a></div>
        <div className={style.support}><a href=""><button className="btn">{langBlock.support}</button></a></div>
        <div className={style.officies}><a href=""><button className="btn">{langBlock.officies}</button></a></div>
        <div className={style.profile}><a href="#"><img src="" alt="" /></a></div>
      </div>
    </header>
  )
}

export default Header;