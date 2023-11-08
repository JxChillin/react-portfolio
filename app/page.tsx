import Image from 'next/image'
import Header from "./components/header";


export default function Home() {
  return (
<main>
<div className="w-full h-screen bg-dark-gray bg-cover bg-center">
          {/* Header Container */}
          <div className="px-[10%] py-[100px]">
            <div className=" mt-[20%]">
              {/* <Header /> */}
              <Header />
              {/* <Header /> */}
            </div>
          </div>
        </div>
        <div id="About">{/* Section Start */}</div>
        <div id="Contact">{/* Section Start */}</div>
    </main>
  )
}
