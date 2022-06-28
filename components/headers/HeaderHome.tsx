import Image from 'next/image';
import Link from 'next/link';

const HeaderHome = () => {
  return (
    <header className="h-screen grid grid-rows-[max-content] lg:bg-[url('/home/desktop/image-hero.jpg')] sm:bg-[url('/home/mobile/image-header.jpg')] md:bg-[url('/home/tablet/image-header.jpg')] bg-cover px-40">
        <nav className='flex items-center justify-between py-12 border-b border-gray border-opacity-20'>
            <Image alt="Logo Icon" src="/shared/desktop/logo.svg" width={143} height={25}  />
            <ul className='flex gap-x-8 list-none uppercase text-white text-subTitle'>
                <li className='transition hover:text-primary'>
                    <Link href="/api/hello">
                        <a>Home</a>
                    </Link>
                </li> 
                <li className='transition hover:text-primary'>
                    <Link href="/">
                        <a>Headphones</a>
                    </Link>
                </li> 
                <li className='transition hover:text-primary'>
                    <Link href="/">
                        <a>Speakers</a>
                    </Link>
                </li> 
                <li className='transition hover:text-primary'>
                    <Link href="/">
                        <a>Earphones</a>
                    </Link>
                </li>
            </ul>
            <Image alt="Cart Icon" src="/shared/desktop/icon-cart.svg" width={23} height={20} className="cursor-pointer"  />
        </nav>
        <div className="w-1/3 self-center flex gap-y-7 flex-col">
            <p className='text-white text-overline uppercase opacity-50'>
                New product  
            </p>
            <h1 className='text-h1 font-bold text-white'>
                XX99 Mark II Headphones
            </h1>
            <p className="text-white text-body">
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </p>
            <Link href="/">
                <a className="text-subTitle text-white bg-primary uppercase self-start px-8 py-4 transition hover:bg-lightPrimary">See product</a>
            </Link>
        </div>
    </header>
  )
}

export default HeaderHome