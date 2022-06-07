import React, { NextPage } from 'next'
import styles from './Information.module.scss'

const Information: NextPage = () => {
  return (
    <div className={"container-fluid " + styles.root}>
        <div className={"row justify-content-center py-5 " + styles.kill_padding}>
            <div className={"col-sm-5 my-sm-auto mx-sm-3 " + styles.jacket}>
                <img className={"p-3 " + styles.jacket}
                    src='https://raw.githubusercontent.com/mini-hiori/expier-journey/master/images/jacket_web.jpeg'
                    alt="イクスピア・ジャーニー"
                    placeholder="blur"
                />
            </div>
            <div className={"col-sm-5 my-sm-auto"}>
                <ul className={"text-center " + styles.texts}>
                    <li className={"row justify-content-center"}>
                        <img className={"col-sm py-4 " + styles.logo}
                            src='https://raw.githubusercontent.com/mini-hiori/expier-journey/master/images/logo_300.png'
                            alt="イクスピア・ジャーニー"
                            placeholder="blur"
                        />
                    </li>
                    <li className={"row " + styles.info_spaces}>
                        <span className={styles.events}>
                            2022/04/24(日)<br></br>
                            M3-2022春<br></br>
                            第一展示場 2F A-20b
                        </span>
                        <span className={styles.route_mini}>
                            Route 32<br></br>
                        </span>
                        <span className={styles.mini}>(みーに)</span>
                    </li>
                    <li className={"row justify-content-center"} >
                        <span className={styles.price}>Price: ￥1,000</span>
                    </li>
                </ul>
                <div className={"container"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-sm p-3"}>
                            <a href="https://mini-hiori.bandcamp.com/album/expier-journey" className={"text-center p-3 " + styles.stores}>
                                Bandcamp<br></br>
                            </a>
                        </div>
                        <div className={"col-sm p-3"}>
                            <a href="https://amairo-diary.booth.pm/items/3813369" className={"text-center p-3 " + styles.stores}>
                                Booth<br></br>
                            </a>
                        </div>
                    </div>
                    <div className={"row justify-content-center"}>
                        <div className={"col-sm p-3"}>
                        <a href="https://open.spotify.com/album/1sux9DJujQQlIPUU91mRuU?si=woJOGiHbT-OPPKZzgkfC1Q" className={"text-center p-3 " + styles.stores}>
                            Spotify<br></br>
                        </a>
                        </div>
                        <div className={"col-sm p-3"}>
                        <a href="https://music.apple.com/jp/album/%E3%82%A4%E3%82%AF%E3%82%B9%E3%83%94%E3%82%A2-%E3%82%B8%E3%83%A3%E3%83%BC%E3%83%8B%E3%83%BC/1618701923" className={"text-center p-3 " + styles.stores}>
                            Apple Music<br></br>
                        </a>
                        </div>
                    </div>
                    {/* <div className={"row justify-content-center"}>
                        <div className={"col-sm p-3"}>
                        <a href="" className={"text-center p-3 " + styles.stores}>
                            その他サブスク<br></br>
                        </a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Information
