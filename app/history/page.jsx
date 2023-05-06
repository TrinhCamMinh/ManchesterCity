import { ClubHonours, ClubRecords } from '../mockData';

const HistoryPage = () => {
    return (
        <>
            <div className='flex gap-48'>
                <section>
                    <h1 className='uppercase mb-4 text-4xl font-bold text-primary'>CLUB HONOURS</h1>
                    {ClubHonours.map((item) => {
                        return (
                            <div key={item} className='mb-4 last:mb-0'>
                                <strong className='text-white text-2xl font-bold'>{item.heading}</strong>
                                <p>{item.content}</p>
                            </div>
                        );
                    })}
                </section>
                <section>
                    <h1 className='uppercase mb-4 text-4xl font-bold text-primary'>CLUB RECORDS</h1>
                    {ClubRecords.map((item) => {
                        return (
                            <div key={item} className='mb-4 last:mb-0'>
                                <strong className='text-white text-2xl font-bold'>{item.heading}</strong>
                                <p>{item.content}</p>
                            </div>
                        );
                    })}
                </section>
            </div>
        </>
    );
};

export default HistoryPage;
