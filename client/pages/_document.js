import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {

  render () {
    return (
     <html lang="en">
			<Head>
				<title className="next-head">Buysellpay</title>
				<meta name="viewport" content="width=device-width, maximum-scale=1"/>
				<meta name="description" content="" />
				<link rel="shortcut icon" type="image/png" href="/static/favicon.png" />
				<meta property="og:title" content="" />
				<meta property="og:description" content="" />
				<meta property="og:type" content="article" />
				<meta property="og:url" content="" />
				<meta property="og:image" content="/static/og.jpg" />
				<link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/static/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#5bbad5" />
			</Head>
			<body>
				<Main />
				<NextScript />
			 </body>
     </html>
    )
  }
}