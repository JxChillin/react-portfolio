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
            <div className="text-base mt-[40%]">
              <div className="bg-[rgba(_0,0,0,0.8)] w-1/4 p-2 rounded-[15px]">
                Bean Bag
              </div>
            </div>
          </div>
        </div>
      </body>
    </head>
  );
}
