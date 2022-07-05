import Category from "../Category"
import Image  from "next/image"
import NextPicture from "../NextPicture"

const MainHome = () => {
  return (
    <main className="pt-32 pb-52 px-40">
      <Category/>
      <NextPicture css='bg-primary rounded-xl mt-40 mb-12' 
                   url={['/home/desktop/image-speaker-zx9.png', '/home/tablet/image-speaker-zx9.png', '/home/mobile/image-speaker-zx9.png']}
                   alt='Speaker ZX9' width={410} height={500}/>
    </main>
  )
}

export default MainHome