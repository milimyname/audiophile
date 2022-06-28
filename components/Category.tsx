import Image from 'next/image';
import Link from 'next/link';

const Category = () => {
  return (
    <div className='flex justify-between gap-x-6'>
        <div className='relative flex-1'>
            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <Image src="/shared/desktop/image-category-thumbnail-headphones.png" alt="Headphones" width={180} height={200}/>
            </div>
            <div className='text-center text-black uppercase bg-gray rounded-xl mt-44 pt-52 pb-4'>
                <h6 className='text-h6 font-bold mb-4'>Headphones</h6>
                <Link href="/">
                    <a className='text-subTitle text-opacity-50 mr-4 transition hover:text-primary'>Shop <span className='pl-4'><Image src="/shared/desktop/icon-arrow-right.svg" width={5} height={10} alt="Arrow Right Icon"/></span></a>
                </Link>
            </div>
        </div>
        <div className='relative flex-1'>
            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <Image src="/shared/desktop/image-category-thumbnail-Speakers.png" alt="Speakers" width={200} height={210}/>
            </div>
            <div className='text-center text-black uppercase bg-gray rounded-xl mt-44 pt-52 pb-4'>
                <h6 className='text-h6 font-bold mb-4'>Speakers</h6>
                <Link href="/">
                    <a className='text-subTitle text-opacity-50 mr-4 transition hover:text-primary'>Shop <span className='pl-4'><Image src="/shared/desktop/icon-arrow-right.svg" width={5} height={10} alt="Arrow Right Icon"/></span></a>
                </Link>
            </div>
        </div>
        <div className='relative flex-1'>
            <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                <Image src="/shared/desktop/image-category-thumbnail-earphones.png" alt="Earphones" width={180} height={150}/>
            </div>
            <div className='text-center text-black uppercase bg-gray rounded-xl mt-44 pt-52 pb-4'>
                <h6 className='text-h6 font-bold mb-4'>Earphones</h6>
                <Link href="/">
                    <a className='text-subTitle text-opacity-50 mr-4 transition hover:text-primary'>Shop <span className='pl-4'><Image src="/shared/desktop/icon-arrow-right.svg" width={5} height={10} alt="Arrow Right Icon"/></span></a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Category