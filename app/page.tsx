import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Main from "./components/Main";




export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </main>
  );
}
