import React, {useContext} from 'react'
import style from './UpperSideBar.module.css'
import {langContext} from './../../App.js'


const UpperSideBar = props => {
  const lang = useContext(langContext);
  const langBlock = lang.uppersidebar;
  let a = props.active;
  return (
    <section>
      <div className={style.container}>
        <button className={props.active === 'earnings' ? style.earnings : style.earnings + " active"}><span>{langBlock.earnings}</span></button>
        <button className={style.spendings}><span>{langBlock.spendings}</span></button>
        <button className={style.settings}><span>{langBlock.settings}</span></button>
      </div>
    </section>
  )
}

export default UpperSideBar;