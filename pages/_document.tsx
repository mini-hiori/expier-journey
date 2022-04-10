import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
        <Html>
            <Head>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                />
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossOrigin="anonymous">
                </script>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/brands.min.css"></link>
            </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}