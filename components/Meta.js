import Head from "next/head"

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='assets/favicon_io/favicon.ico' />
            {/* From favicon generator */}
            <link rel="apple-touch-icon" sizes="180x180" href="assets/favicon_io/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon_io/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon_io/favicon-16x16.png"/>
            <link rel="manifest" href="/site.webmanifest"></link>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Nifty Wears | Shop',
    keywords: 'online shop, nifty wears store',
    description: 'Specially crafted items for your needs'
}

export default Meta