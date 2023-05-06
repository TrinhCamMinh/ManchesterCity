import Link from 'next/link';
const Player = ({name, image, nation, number}) => {
    return (
        <>
            <Link href='https://www.mancity.com/players/julian-alvarez' className='block w-fit'>
                <div className='card w-64 shadow-xl rounded-none'>
                    <figure className='bg-player bg-cover relative peer'>
                        <img
                            src={image}
                            alt='Player'
                        />
                    </figure>
                    <div className='avatar absolute bottom-[30%] left-2'>
                        <div className='w-8 rounded-full'>
                            <img src={nation} alt='nation' />
                        </div>
                    </div>
                    <p className='absolute text-7xl font-semibold right-0 top-0 text-white peer-hover:text-[#001838] transition-colors delay-75'>
                        {number}
                    </p>
                    <div className='card-body bg-white text-[#001838] p-8 text-center peer-hover:bg-[#001838] peer-hover:text-white transition-colors delay-75'>
                        <h2 className='uppercase font-bold text-xl '>{name}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Player;
