import Link from 'next/link';

const ShopPage = () => {
    return (
        <div className='grid grid-cols-4 gap-4 px-24 pb-24'>
            <div className='col-start-1 col-end-3 text-center'>
                <Link href='https://shop.mancity.com/en/shop-by-player/'>
                    <div className='card shadow-xl rounded-none'>
                        <figure>
                            <img
                                className='w-full'
                                src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw91d954e6/images/2022_campaigns/hp_thirdkit-22-23/Content_square_4_1600x1600_hp_player.png?sw=950'
                                alt='Shop'
                            />
                        </figure>
                    </div>
                </Link>
            </div>
            <div className='col-start-3 col-end-5 text-center'>
                <Link href='https://shop.mancity.com/en/sale/'>
                    <div className='card shadow-xl rounded-none'>
                        <figure>
                            <img
                                className='w-full'
                                src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw26c8b034/images/2023_campaigns/sale-2023/Content_square_1_1600x1600_saleeaster.png?sw=950'
                                alt='Shop'
                            />
                        </figure>
                    </div>
                </Link>
            </div>
            <div className='col-span-4'>
                <h1 className='text-4xl font-bold text-white'>-50% & FREE PRINTING ON AWAY KIT</h1>
            </div>
            <div className='col-span-4 text-center'>
                <Link href='https://shop.mancity.com/en/free-printing-on-away-shirts/'>
                    <div className='card shadow-xl rounded-none'>
                        <figure>
                            <img
                                className='w-full'
                                src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwd4e34a64/images/2023_campaigns/Freepromoaway/Content_Block_tile_3720x1830_awaypromo.png?sw=1900'
                                alt='Shop'
                            />
                        </figure>
                    </div>
                </Link>
            </div>
            <div className='col-start-1 col-end-3 text-center'>
                <Link href='https://shop.mancity.com/en/gifts/featured/gifts-for-kids/'>
                    <div className='card shadow-xl rounded-none'>
                        <figure>
                            <img
                                className='w-full'
                                src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dwe20123c9/images/2023_campaigns/gift%20for%20kids/Contentsquare_kids_gifts3.png?sw=950'
                                alt='Shop'
                            />
                        </figure>
                    </div>
                </Link>
            </div>
            <div className='col-start-3 col-end-5 text-center'>
                <Link href='https://shop.mancity.com/en/training/equipment/'>
                    <div className='card shadow-xl rounded-none'>
                        <figure>
                            <img
                                className='w-full'
                                src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw25d7b813/images/2023_campaigns/Accessories/Content_square_6_1600x1600_Training_accessories.jpg?sw=950'
                                alt='Shop'
                            />
                        </figure>
                    </div>
                </Link>
            </div>
            <div className='col-span-4'>
                <h1 className='text-4xl font-bold text-white'>PUMA ESSENTIALS COLLECTION</h1>
            </div>
            <div className='col-span-4 text-center'>
                <Link href='https://shop.mancity.com/en/lifestyle/puma-collections/essentials/'>
                    <div className='card shadow-xl rounded-none'>
                        <figure>
                            <img
                                className='w-full'
                                src='https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-MAN-Library/default/dw833bbb89/images/2022_campaigns/essentials_collection/Content_block_tile_2_3720x1830_Essentials.png?sw=1900'
                                alt='Shop'
                            />
                        </figure>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ShopPage;
