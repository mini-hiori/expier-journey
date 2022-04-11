import React, { NextPage } from 'next'
import styles from './TrackList.module.scss'

const TrackList: NextPage = () => {
  return (
    <div className={"container-fluid " + styles.root}>
        <div className={"container"}>
            <div className={"row justify-contenr-center py-md-5"}>
                <div className={"col-md-6 mx-auto"}>
                    <div className={"container " + styles.iframe_wrapper}>
                    <iframe className={styles.player}
                        width="100%" height="100%"
                        src="https://www.youtube.com/embed/59IG4FarKYI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                    </div>
                </div>
            </div>
        </div>
        <div className="container px-md-5 py-3">
            <div className={"row justify-content-center"}>
                <div className={"col-md-6 mx-auto " + styles.title}>
                    <h1 className={styles.title}>Track List</h1>
                </div>
            </div>
            <ol className={"m-auto " + styles.track_list}>
                <div className="row justify-content-center">
                    <li className={"col-md-5 m-auto py-3"}>
                    <div className={"text-center p-1 " + styles.track_name}>イクスピア・ジャーニー</div>
                    </li>
                    <li className={"col-md-5 m-auto py-3"}>
                    <div className={"text-center p-2 " + styles.track_name}>リトルトリップ・アンダンテ</div>
                    </li>
                </div>
                <div className="row justify-content-center">
                    <li className={"col-md-5 m-auto py-3"}>
                    <div className={"text-center p-2 " + styles.track_name}>アステロイド・チェイサー</div>
                    </li>
                    <li className={"col-md-5 m-auto py-3"}>
                    <div className={"text-center p-2 " + styles.track_name}>ノクターン・ムーンシーカー</div>
                    </li>
                </div>
                <div className="row justify-content-center">
                    <li className={"col-md-5 m-auto py-3"}>
                    <div className={"text-center p-2 " + styles.track_name}>ステイルブルー・フォーサイト</div>
                    </li>
                    <li className={"col-md-5 m-auto py-3"}>
                    <div className={"text-center p-2 " + styles.track_name}>ミッドナイト・テイルライツ</div>
                    </li>
                </div>
                <div className="row justify-content-center">
                    <li className={"col-md-5 m-auto py-3"}>
                    <div className={"text-center p-2 " + styles.track_name}>ネバーエンド・ジャーニー</div>
                    </li>
                </div>
            </ol>
        </div>
        <div className="container px-md-5 pb-3">
            <div className={"row justify-content-center"}>
                <div className={"col-md-3 pb-3"}>
                    <a className={"text-center p-3 " + styles.stores} href="expier_journey_lyrics.pdf" download="https://raw.githubusercontent.com/mini-hiori/expier-journey/master/public/expier_journey_lyrics.pdf">All Lyrics</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrackList
