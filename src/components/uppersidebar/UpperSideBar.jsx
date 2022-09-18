import React, {useContext} from 'react'
import style from './UpperSideBar.module.css'
import {langContext} from './../../App.js'


const UpperSideBar = props => {
  const lang = useContext(langContext);
  const langBlock = lang.uppersidebar;
  return (
    <section className={style.uppersidebar}>
      <div className={style.container}>
        <button className={props.active === 'earnings' ? style.active : ''}><span>{langBlock.earnings}</span></button>
        <button className={props.active === 'spendings' ? style.active : ''}><span>{langBlock.spendings}</span></button>
        <button className={props.active === 'settings' ? style.active : ''}><span>{langBlock.settings}</span></button>
      </div>
    </section>
  )
}

export default UpperSideBar;