import Image from "next/image"

interface ImageTypes {
  css: string,
  url: string[] | string,
  alt: string,
  width: number,
  height: number
}

const NextPicture = ({css, url, alt, width, height}: ImageTypes) => {
  return (
    <div className={css}>
      <div className={`hidden mdMin:block`}>
        <Image src={Array.isArray(url) ? url[0] : url} alt={alt} width={width} height={height}/>
      </div>
      <div className={`smMax:hidden smMin:block mdMin:hidden`}>
        <Image src={Array.isArray(url) ? url[1] : url} alt={alt} width={width} height={height}/>
      </div>
      <div className={`smMin:hidden smMax:block`}>
        <Image src={Array.isArray(url) ? url[2] : url} alt={alt} width={width} height={height}/>
      </div>
    </div>
  )
}

export default NextPicture