import * as React from 'react'

const defaultPageTitle = 'Lauren Wilkinson | Front End Developer'
const url = 'https://laurenwilkinson.co.uk'
const socialImagePath = url + '/images/window-social.png?v=1'
const metaDescription =
  'Front End Developer with a focus on delivering aesthetic yet accessible user experiences'

const SharedHead = ({ title = defaultPageTitle } = {}) => {
  return (
    <>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={metaDescription} />
      ( /* Favicons */ )
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/images/favicons/apple-touch-icon.png?v=2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicons/favicon-32x32.png?v=2"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicons/favicon-16x16.png?v=2"
      />
      <link rel="manifest" href="/images/favicons/site.webmanifest?v=2" />
      <link
        rel="mask-icon"
        href="/images/favicons/safari-pinned-tab.svg?v=2"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/images/favicons/favicon.ico?v=2" />
      <meta name="apple-mobile-web-app-title" content="Lauren Wilkinson" />
      <meta name="application-name" content="Lauren Wilkinson" />
      <meta name="msapplication-TileColor" content="#b91d47" />
      <meta
        name="msapplication-config"
        content="/images/favicons/browserconfig.xml?v=2"
      />
      <meta name="theme-color" content="#ef9a9a" />
      ( /* Open Graph / Facebook */ )
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={socialImagePath} />
      ( /* Twitter */ )
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={socialImagePath} />
    </>
  )
}

export default SharedHead
