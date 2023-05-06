import Player from '../components/Cards/Player';
import { DEFENDERS, FORWARDS, GOALKEEPERS, MANAGERS, MIDFIELDERS } from '../mockData';

const PlayerPage = () => {
    return (
        <>
            <div className='grid grid-cols-4 gap-4 pb-24'>
                <h1 className='col-span-4 uppercase text-4xl font-bold text-primary'>GOALKEEPERS</h1>
                {GOALKEEPERS.map((item) => {
                    return (
                        <div className='col-span-1'>
                            <Player name={item.name} image={item.image} number={item.number} nation={item.nation} />
                        </div>
                    );
                })}
                <h1 className='col-span-4 uppercase text-4xl font-bold text-primary'>DEFENDERS</h1>
                {DEFENDERS.map((item) => {
                    return (
                        <div className='col-span-1'>
                            <Player name={item.name} image={item.image} number={item.number} nation={item.nation} />
                        </div>
                    );
                })}
                <h1 className='col-span-4 uppercase text-4xl font-bold text-primary'>MIDFIELDERS</h1>
                {MIDFIELDERS.map((item) => {
                    return (
                        <div className='col-span-1'>
                            <Player name={item.name} image={item.image} number={item.number} nation={item.nation} />
                        </div>
                    );
                })}
                <h1 className='col-span-4 uppercase text-4xl font-bold text-primary'>FORWARDS</h1>
                {FORWARDS.map((item) => {
                    return (
                        <div className='col-span-1'>
                            <Player name={item.name} image={item.image} number={item.number} nation={item.nation} />
                        </div>
                    );
                })}
                <h1 className='col-span-4 uppercase text-4xl font-bold text-primary'>MANAGERS</h1>
                <div className='col-span-1'>
                <Player name={MANAGERS.name} image={MANAGERS.image} number={MANAGERS.number} nation={MANAGERS.nation} />
                </div>
            </div>
        </>
    );
};

export default PlayerPage;
