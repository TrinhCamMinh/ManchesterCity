import Image from 'next/image';
import Link from 'next/link';
import Mancity from '../assets/logo.svg';
import Real from '../assets/real.png';

const heading = ['EDS', 'Men', 'Women', 'Academy'];

const Features = () => {
    return (
        <>
            <div className='bg-primary w-1/3 text-white rounded'>
                <ul className='p-4 heading flex justify-between bg-[#f3f6f9] text-black text-center rounded'>
                    {heading.map((item) => {
                        return (
                            <li
                                key={item}
                                className='pr-4 relative after:absolute after:border-r-2 after:h-4 after:w-4 after:right-[-14px] after:top-1 [&:nth-child(2)]:text-primary'
                            >
                                <strong className=''>{item}</strong>
                            </li>
                        );
                    })}
                </ul>
                <div className='p-4 content flex flex-col justify-center gap-4'>
                    <section className='flex justify-between text-white'>
                        <p className='font-semibold '>NEXT FIXTURE</p>
                        <Link href='https://www.mancity.com/fixtures/'>
                            <p className='underline underline-offset-4 font-bold hover:text-black transition-colors'>All Fixtures</p>
                        </Link>
                    </section>
                    <section className='mx-auto text-center'>
                        <time className='font-semibold'>Sat 06 MAY</time>
                        <p>Premier League</p>
                    </section>
                    <section className='flex items-center justify-center gap-6'>
                        <aside className='flex flex-col gap-1 text-center w-fit'>
                            <Image src={Mancity} alt='Man City Logo' loading='lazy' width={100} height={100} />
                            <strong>Man City</strong>
                        </aside>
                        <aside>
                            <button className='btn gap-2'>
                                <time>02:00</time>
                                <div className='badge badge-secondary'>+07</div>
                            </button>
                        </aside>
                        <aside className='flex flex-col gap-1 text-center w-fit'>
                            <Image src={Real} alt='Real Logo' loading='lazy' width={75} />
                            <strong>Real Madrid</strong>
                        </aside>
                    </section>
                    <section>
                        <Link href='https://www.mancity.com/tickets/mens/man-city-v-real-madrid-16-may-2023'>
                            <button className='btn w-full text-white'>
                                <strong>BUY TICKETS</strong>
                            </button>
                        </Link>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Features;
