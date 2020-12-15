module.exports = {
    purge: {
        content: [
            './resources/**/*.antlers.html',
            './resources/**/*.blade.php',
            './content/**/*.md'
        ]
    },

    theme: {

        screens: {

            'tablet': '640px',
            // => @media (min-width: 640px) { ... }

            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }

        },

        extend: {
            minHeight: {
                '120': '30rem',
            },
            height: {
                '15': '3.75rem',
                '17': '4.25rem',
                '7': '1.75rem',
                '75': '18.75rem',
            },
            width: {
                '15': '3.75rem',
                open: '11.875rem',
                '75': '18.75rem',
            },
            margin: {
                '7': '1.75rem',
                '17': '4.25rem',
                '27': '6.75rem',
            },
            padding: {
                '7': '1.75rem',
            },
            borderWidth: {
                '5': '5px',
            },
            fontSize: {
                '5xl': '3.375rem',
                'xxl': '1.375rem',
            },
            boxShadow: {
                'lg': '0px 0px 10px #00000033',
                'xl': '0px 0px 20px #00000080',
            },
            gap: {
                '7': '1.75rem',
            },
            inset: {
                '10': '2.5rem',
                '11': '2.75rem',
                '17': '4.25rem',
                '1/2': '50%',
            },

        },
        colors: {
            pink: '#e5148a',
            gray: '#e0dddd',
            white: '#fff',
            black: '#000000',
        }
    },
    variants: {
        opacity: ['group-hover'],
        backgroundOpacity: ['group-hover'],
    },
    plugins: [],
}
