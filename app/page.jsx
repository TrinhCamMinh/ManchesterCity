import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <div className='text-center flex flex-col gap-8 items-center'>
                <section className='flex items-center gap-8'>
                    <h1 className='text-primary text-4xl font-extrabold'>Welcome to Manchester City FC Page</h1>
                    <Image src='/logo.svg' width={150} height={100} />
                </section>

                <article className='grid grid-cols-3 w-4/5'>
                    <figure className='col-span-2'>
                        <img
                            src='https://web-assets.mancity.com/cdn-cgi/image/width=786,format=auto/dist/images/cityzens-bg-1920x1080.png'
                            alt='Access Exclusive'
                            className='w-full'
                        />
                    </figure>
                    <div className='bg-[#001838] text-white flex flex-col items-center gap-6 p-8'>
                        <img
                            src='https://www.mancity.com/dist/images/icons/cityzens-logo.svg'
                            alt='Manchester Logo'
                            width={100}
                        />
                        <p className='text-xl font-bold'>Access exclusive content, rewards and competitions!</p>
                        <Link href='https://cityzens.mancity.com/?_gl=1*1lj4wzz*_ga*MjYyOTcwMzAyLjE2ODMwNDA1MzU.*_ga_QFRL9KTV4P*MTY4MzM0MDE3NC4xOC4xLjE2ODMzNDEzNDAuNjAuMC4w*_ga_83D496C6PL*MTY4MzM0MDE3NC4xOC4xLjE2ODMzNDEzNDEuNjAuMC4w'>
                            <button className='btn bg-[#e6ff00] text-[#001838] w-full hover:text-white uppercase font-bold'>
                                join for free
                            </button>
                        </Link>
                    </div>
                </article>
            </div>
        </>
    );
}
