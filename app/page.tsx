import Image from "next/image";
import Header from "./components/header";
import Head from "next/head";
import NavbarFixed from "./components/navbarfixed";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Jay.Dav</title>
      </Head>
      <NavbarFixed />
      <div className="w-full h-screen bg-dark-gray bg-cover bg-center">
        {/* Header Container */}
        <div className="px-[10%] py-[100px]">
          <div className=" mt-[20%]">
            <Header />
          </div>
        </div>
      </div>
      <div id="About">{/* Section Start */}</div>
      <div id="Contact">{/* Section Start */}</div>
    </main>
  );
}
