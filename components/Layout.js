import Head from "next/head";
import Author from "./Author";
import Footer from "./Footer/Footer";
import FooterTip from "./FooterTip";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Neerob Raihan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
      <FooterTip />
      {/* <Author /> */}
    </>
  );
};

export default Layout;
