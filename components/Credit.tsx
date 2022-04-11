import React, { NextPage } from 'next'
import styles from './Credit.module.scss'

const Credit: NextPage = () => {
  return (
    <div className={"container-fluid " + styles.root}>
      <div className="row justify-content-center">
        <div className={"col-md"}>
          <h1 className={styles.title}>Credit</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className={"col-md " + styles.credit}>
          企画・作詞・作曲・マスタリング・<br className={"d-sm-none"}></br>イラスト・デザイン・プロデュース・Web
        </div>
      </div>
      <div className="row justify-content-center">
        <div className={"col-md " + styles.credit}>
          <div className={styles.mini_hiori}>みーに</div>
          </div>
      </div>
      <div className={"row justify-content-center"}>
          <div className={"col my-auto mx-auto"}>
            <a className={styles.links} href="https://twitter.com/mini_hiori">
              <span className={'mx-3 fab fa-fw fa-twitter ' + styles.link_icons}></span>
            </a>
            <a className={styles.links} href="https://profile.mini-hiori.info/">
              <span className={'mx-3 fa fa-fw fa-home ' + styles.link_icons}></span>
            </a>
            <a href="https://www.youtube.com/c/minihiori">
              <span className={'mx-3 fab fa-fw fa-youtube ' + styles.link_icons}></span>
            </a>
          </div>
          {/* <div className={"col d-block d-sm-none"}>
            <a href="https://twitter.com/mini_hiori">
              <span className={'mx-3 my-auto fa-brands fa-twitter ' + styles.link_icons}></span>
            </a>
            <a href="https://profile.mini-hiori.info/">
              <span className={'mx-3 my-auto fa fa-home ' + styles.link_icons}></span>
            </a>
            <a href="https://www.youtube.com/c/minihiori">
              <span className={'mx-3 my-auto fa-brands fa-youtube ' + styles.link_icons}></span>
            </a>
        </div> */}
      </div>
    </div>
  )
}

export default Credit
