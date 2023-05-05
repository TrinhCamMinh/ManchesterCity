import Link from 'next/link';

const News = () => {
    return (
        <>
            <div className='card lg:card-side shadow-xl w-2/4 text-white'>
                <figure className='relative'>
                    <img
                        src='https://www.mancity.com/meta/media/4dsjzrqe/new-wide.jpg?width=291&height=164&mode=crop'
                        alt='thumbnail'
                    />
                    <Link href='https://www.mancity.com/citytv/mens/manchester-city-v-west-ham-tunnel-cam-63818811'>
                        <div className='absolute text-red-500 left-[48%] top-[44%] w-fit h-fit'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='w-8'>
                                <path d='M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z' />
                            </svg>
                        </div>
                    </Link>
                </figure>
                <div className='card-body py-0 px-4'>
                    <Link href='https://www.mancity.com/citytv/mens/manchester-city-v-west-ham-tunnel-cam-63818811'>
                        <h2 className='card-title hover:text-primary transition-colors text-2xl'>
                            City v West Ham: Tunnel Cam
                        </h2>
                    </Link>
                    <div>
                        <time>
                            <small className='bg-[#dde6ed] text-black font-semibold mr-8 p-[1px]'>09:26</small>
                        </time>
                        <span>BEHIND THE SCENES</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
