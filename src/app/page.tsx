import Image from "next/image";
import Head from "next/head";
import headerimage from "@/app/images/nightraleigh.png";

export default function Page() {
  return (
    <head>
      <title>Jay.Dav</title>
      <body>
        {/* Header */}
        <div className="w-full h-screen bg-[url(images/nightraleigh.png)] bg-cover bg-center">
          {/* Header Container */}
          <div className="px-[10%] py-[100px]">
            <div className="text-base mt-[30%] color-white ">
              <div className="bg-[rgba(_0,0,0,0.8)] w-fit p-6 rounded-[15px] ">
                <p className="text-[60px] text-white">
                  Test Text
                  {/* <h1></h1> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </head>
  );
}
