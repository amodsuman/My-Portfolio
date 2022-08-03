import Head from "next/head";
import { LandingPageTemp } from "../src/templates/landing-page";

const LandingPage = () => {
  return (
    <>
      <Head>
        <title>Amod's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        />
      </Head>
      <LandingPageTemp />
    </>
  );
};

export default LandingPage;
