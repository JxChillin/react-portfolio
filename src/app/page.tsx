import Image from "next/image";
import Head from "next/head";
import headerimage from "@/app/images/nightraleigh.png";

export default function Page() {
  return (
    <head>
      <title>Jay.Dav</title>
      <body>
        <div className="w-full h-screen bg-[url(images/nightraleigh.png)] bg-cover bg-center">
          <div className="px-[10%] py-[100px]"></div>
        </div>
      </body>
    </head>
  );
}
