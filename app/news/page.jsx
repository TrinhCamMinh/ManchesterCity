import Features from '../components/Features';
import NewsCard from '../components/Cards/News';
import { News } from '../mockData';

const NewsPage = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-4'>
                <section>
                    <h1 className='text-4xl font-bold text-primary uppercase mb-4'>All News</h1>
                    <div className='flex flex-col gap-6'>
                        {News.map((item) => {
                            return (
                                <NewsCard
                                    key={item}
                                    title={item.title}
                                    image={item.image}
                                    time={item.time}
                                    type={item.type}
                                />
                            );
                        })}
                    </div>
                </section>
                <section>
                    <h1 className='text-4xl font-bold text-primary uppercase mb-4'>Next Fixtures</h1>
                    <Features />
                </section>
            </div>
        </>
    );
};

export default NewsPage;
