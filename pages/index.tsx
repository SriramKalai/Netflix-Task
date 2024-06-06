import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Main from "@/components/Main";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });


export async function getServerSideProps() {
  try {
    const response = await fetch('https://json.extendsclass.com/bin/32cfbfae6ba2'); 
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    console.log("data", data);

    return {
      props: {
        imagesDetails: data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        imagesDetails: [], 
      },
    };
  }
}



export default function Home({ imagesDetails }) {
  return (
    <main>
      <Header />
      <Banner />
      <Main imageBank01={imagesDetails} />
      <Footer />
    </main>
  );
}
