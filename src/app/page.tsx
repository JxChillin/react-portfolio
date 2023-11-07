import Image from "next/image";
import Head from "next/head";
import headerimage from "@/app/images/nightraleigh.png";
import Header from "../../components/header";
import NavbarFixed from "../../components/navbarfixed";

export default function Page() {
  return (
    <html>
      <head>
        <title>Jay.Dav</title>
      </head>

      <body>
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
      </body>
    </html>
  );
}
