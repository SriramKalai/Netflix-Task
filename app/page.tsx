import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
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
