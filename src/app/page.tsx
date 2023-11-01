import Image from "next/image";
import Head from "next/head";
import headerimage from "@/app/images/nightraleigh.png";
import MyHeader from "./header";
export default function Page() {
  return (
    <head>
      <title>Jay.Dav</title>
      <body>
        {/* Header */}
        <div className="w-full h-screen bg-[url(images/nightraleigh.png)] bg-cover bg-center">
          {/* Header Container */}
          <div className="px-[10%] py-[100px]">
            <div className="text-base mt-[20%] ml-[10%] color-white ">
              <MyHeader />
            </div>
          </div>
        </div>
      </body>
    </head>
  );
}
