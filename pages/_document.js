import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const theme = responsiveFontSizes(createMuiTheme())

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <meta charSet="utf-8" />
            <meta name="theme-color" content={theme.palette.primary.main} />
          
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet"></link>
            <style jsx global>
                {`
                *{
                    font-family: 'Special Elite', cursive;  
                }

                *,
                *::before,
                *::after {
                    box-sizing: border-box;
                }

                h1 {
                    text-transform: uppercase;
                    font-size: clamp(3rem, 5vw + 0.5rem, 5rem);
                    line-height: 0.9;
                    margin: 0;
                    color:#ffca68;
                }
                  
                body {
                    font-size: 1.125rem;
                    line-height: 1.5;
                    background-color: hsl(0, 0%, 0%);
                }
                  
                p {
                    font-size: 2em;
                }
                `}
            </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>
    ]
  }
}

export default MyDocument