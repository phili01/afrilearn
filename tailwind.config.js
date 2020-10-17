module.exports = {
    future: {
      // removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: {
      content: [
      ],
      whitelist: ['body', 'html', 'nuxt-progress'],
    },
    theme: {
      extend: {
        colors: {
          primary: '#2BB58E',
          secondary: '#24A07D'
        },
        fontSize: {
          mammoth: '23rem'
        },
        fontFamily: {
          default: ['Roboto']
        },
        rotate: {
          'anti-45': '-45deg'
        },
        outline: {
          primary: '2px solid #2BB58E;outline-offset: 2px'
        }
      },
    },
    variants: {},
    plugins: [],
  }
  