import React, { NextPage } from 'next'
import styles from './Footer.module.scss'

const Footer: NextPage = () => {
  return (
    <footer className={"container-fluid " + styles.root}>
        <div className={"row justify-content-center"}>
          <div className={"col " + styles.share_button}>
          <a href="http://twitter.com/share?url=https://expier-journey.mini-hiori.info/&text=みーに 1st Album 「イクスピア・ジャーニー」/ Route 32">
            <span className={'fa-brands fa-fw fa-twitter ' + styles.icon}></span>
          </a>
          </div>
        </div>
        <div className={"row justify-content-center"}>
        <div className={"col-md mx-auto " + styles.copyright}>
          ©︎ 2022 みーに(Route 32)
        </div>
        </div>
    </footer>
  )
}

export default Footer
