import Image from 'next/image';
import AirwayImage from '../assets/etihad-airway.webp';
import Puma from '../assets/puma.webp'

const Airway = () => {
    return (
        <>
            <div className='flex justify-center bg-primary py-[24px] px-[7%] mt-auto'>
                <Image src={AirwayImage} alt='EIHAD airway' />
                <Image src={Puma} alt='Puma'/>
            </div>
        </>
    );
};

export default Airway;
