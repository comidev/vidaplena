import Helmet from "react-helmet";

export default function index({ title, description, subject, URL, img, imgAlt }) {
    const finalTitle = `${title} - Vida Plena`;
    return (
        <Helmet>
            <title>{finalTitle}</title>
            <meta name="description" content={description} />
            <meta name="subject" content={subject} />
            <meta name="rating" content="General" />
            {/* <!-- AUTOR------------------------------------> */}
            <link rel="author" href="https://comidev.github.io/portafolio/" />
            <link
                rel="me"
                href="https://comidev.github.io/portafolio/"
                type="text/html"
            />
            <link rel="me" href="mailto:comidev.contacto@gmail.com" />
            <link rel="me" href="https://api.whatsapp.com/send?phone=51960949984" />

            {/* <!-- FACEBOOK ---------------------------------------------> */}
            {/* <!-- Básico --> */}
            <meta property="og:title" content={finalTitle} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={img} />
            <meta property="og:image:alt" content={imgAlt} />
            <meta property="og:url" content={URL} />
            {/* <!-- Opcional --> */}
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="es_PE" />
            <meta property="og:site_name" content="Vida Plena" />
            <meta
                property="article:author"
                content="https://www.linkedin.com/in/comidev/"
            />
            {/* <!-- TWITTER ------------------------------------------------------ --> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content={URL} />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img} />
            <meta name="twitter:image:alt" content={imgAlt} />
        </Helmet>
    );
}
