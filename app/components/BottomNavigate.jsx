'use client'; //! convert this component from Server to Client Component
import Link from 'next/link';

const BottomNavigate = () => {
    const handleClick = (e) => {
        const activeButton = document.querySelector('.link-tag.active');
        activeButton.classList.remove('active');
        e.target.classList.add('active');
    };

    return (
        <>
            <div className='btm-nav'>
                <Link href='/' className='link-tag text-info active' onClick={handleClick}>
                    <button className='pointer-events-none'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 pointer-events-none'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                            />
                        </svg>
                    </button>
                </Link>
                <Link href='/news' className='link-tag text-info' onClick={handleClick}>
                    <svg className='pointer-events-none text-[#3abff8]' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24px' height='24px'>
                        <path d='M 4 3 C 2.895 3 2 3.895 2 5 L 2 18 C 2 19.657 3.343 21 5 21 L 19 21 C 20.64497 21 22 19.64497 22 18 L 22 8 A 1.0001 1.0001 0 0 0 20.984375 6.9863281 A 1.0001 1.0001 0 0 0 20 8 L 20 18 C 20 18.56503 19.56503 19 19 19 C 18.448 19 18 18.551 18 18 L 18 5 C 18 3.895 17.105 3 16 3 L 4 3 z M 7 6 L 13 6 C 13.552 6 14 6.448 14 7 L 14 8 C 14 8.552 13.552 9 13 9 L 7 9 C 6.448 9 6 8.552 6 8 L 6 7 C 6 6.448 6.448 6 7 6 z M 7 12 L 13 12 C 13.552 12 14 12.448 14 13 C 14 13.552 13.552 14 13 14 L 7 14 C 6.448 14 6 13.552 6 13 C 6 12.448 6.448 12 7 12 z M 7 16 L 13 16 C 13.552 16 14 16.448 14 17 C 14 17.552 13.552 18 13 18 L 7 18 C 6.448 18 6 17.552 6 17 C 6 16.448 6.448 16 7 16 z' />
                    </svg>
                </Link>
                <Link href='/player' className='link-tag text-info' onClick={handleClick}>
                    <img className='pointer-events-none text-[#3abff8]' src="https://img.icons8.com/windows/32/null/organization-chart-people.png"/>
                </Link>
                <Link href='/shop' className='link-tag text-info' onClick={handleClick}>
                    <img className='pointer-events-none text-[#3abff8]' src="https://img.icons8.com/ios/32/null/online-store.png"/>
                </Link>
                <Link href='/history' className='link-tag text-info' onClick={handleClick}>
                    <img className='pointer-events-none text-[#3abff8]' src="https://img.icons8.com/ios/32/null/time-machine--v1.png"/>
                </Link>
            </div>
        </>
    );
};

export default BottomNavigate;
