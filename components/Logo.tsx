import React, { NextPage } from 'next'
import styles from './Logo.module.scss'
import squares from './squares.module.scss'

const Logo: NextPage = () => {
  return (
    <div className={"container-fluid"}>
      <div className={"row " + styles.root}>
          <div className={"col-sm-6 mx-auto d-flex justify-content-center " + styles.top_logo_image}>
            <img className={"img-fluid"}
                src='https://raw.githubusercontent.com/mini-hiori/expier-journey/master/images/logo_300.png'
                alt="イクスピア・ジャーニー"
                placeholder="blur"
            />
          </div>
        <div className={squares.area}>
          <ul className={squares.circles}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Logo
