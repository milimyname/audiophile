import Link from "next/link"

interface ProductInfoTypes {
    divCSS: string,
    isNew: boolean,
    btnCSS: string,
    link: string,
    heading: string,
    paragraph: string,
}

const ProductInfo = ({divCSS, isNew, btnCSS, link}: ProductInfoTypes) => {
  return (
    <div className={divCSS}>
        {isNew && 
        <p className=' text-overline uppercase opacity-50'>
            New product  
        </p>}
        <h1 className='text-h1 font-bold '>
            XX99 Mark II Headphones
        </h1>
        <p className=" text-body">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Link href={link}>
            <a className={btnCSS}>See product</a>
        </Link>
    </div>
  )
}

export default ProductInfo