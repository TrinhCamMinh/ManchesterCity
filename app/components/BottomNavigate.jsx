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
                    <button className='pointer-events-none'>News Page</button>
                </Link>
                <Link href='/player' className='link-tag text-info' onClick={handleClick}>
                    <button className='pointer-events-none'>Player Page</button>
                </Link>
                <Link href='/shop' className='link-tag text-info' onClick={handleClick}>
                    <button className='pointer-events-none'>Shop Page</button>
                </Link>
                <Link href='/history' className='link-tag text-info' onClick={handleClick}>
                    <button className='pointer-events-none'>History Page</button>
                </Link>
            </div>
        </>
    );
};

export default BottomNavigate;
