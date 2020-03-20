import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = ({
  title = "Covid 19 Testing",
  description = "Covid 19 Testing",
  children
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link
        rel="stylesheet"
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
    </Head>

    <div className="antialiased min-h-screen bg-gray-100">
      <Header />

      {children}

      <Footer />
    </div>

    <style jsx global>{`
      body {
        line-height: 1.6;
      }
    `}</style>
  </div>
);

export default PageLayout;
