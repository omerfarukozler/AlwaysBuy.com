import Image from "next/image"

const Banner = () => {
  return (
    <div className="h-[237px] flex items-center justify-center">
    <div className="h-[220px] relative w-full">
    <Image src={"/kutu.jpg"} fill alt=""/>
    </div>
    </div>
  )
}

export default Banner
