import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const title = "イクスピア・ジャーニー - Route 32(みーに)";
  const description = "ぼっち系ボカロPみーにがついに1st Albumを書き上げた！がんばりました";
  const url = "https://expier-journey.mini-hiori.info/";
  const thumbnail = "https://expier-journey.s3.ap-northeast-1.amazonaws.com/images/jacket_web.jpeg";
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:site_name" content={title} />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mini_hiori" />
      <meta name="twitter:creator" content="@mini_hiori" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={thumbnail} />
      <link rel="canonical" href={url} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Component {...pageProps} />
  </>
  );
}

export default MyApp
