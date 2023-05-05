/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#98c5e9',
            },
            backgroundImage: {
                'player': "url('https://web-assets.mancity.com/dist/images/brand/blueship.png')"
            }
        },
        container: {
            center: true,
            screens: {
                tablet: '640px',
                // => @media (min-width: 640px) { ... }

                laptop: '1024px',
                // => @media (min-width: 1024px) { ... }

                desktop: '1280px',
                // => @media (min-width: 1280px) { ... }
            },
        },
    },
    // add daisyUI plugin
    plugins: [require('daisyui')],

    // daisyUI config (optional)
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'dark',
    },
};
