import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Sagar Kumar | MERN Stack Developer",
  description = "Portfolio of Sagar Kumar, a MERN Stack Developer building scalable web and mobile applications using React, Node.js, Express, and MongoDB.",
  keywords = "MERN Stack, React Developer, Node.js, MongoDB, Portfolio, Web Developer, Frontend, Backend",
  author = "Sagar Kumar",
  url = "https://yourdomain.com",
  image = "https://yourdomain.com/preview-image.png",
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};

export default SEO;
