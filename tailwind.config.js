module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '360px',

      'md': '800px',

      'lg': '1440px',
    },
    extend: {
      spacing: {
        '2px': '2px',
        '10px': '10px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '19px': '19px',
        '20px': '20px',
        '22px': '22px',
        '52px': '52px',
        '59px': '59px',
        '68px': '68px',
        '81px': '81px',
        '120px': '120px',

      },
      fontSize: {
        '14px': ['14px', '14px'],
        '15px': ['15px', '15px'],
        '36px': ['36px', '36px'],

      },
      letterSpacing: {
        '2': '2px',
      },
      colors:{
        green: {
          light: '#7DCA91',
          forest: '#245B50',
        },
        cream: 'F0EEE7',
        blue: {
          baby: 'D8E9F0',
        }
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '18': 'repeat(18, minmax(0, 1fr))',
        // Simple 16 column grid
        '36': 'repeat(36, minmax(0, 1fr))',
       },
       gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
        '26': '26',
        '27': '27',
        '28': '28',
        '29': '29',
        '30': '30',
        '31': '31',
        '32': '32',
        '33': '33',
        '34': '34',
        '35': '35',
        '36': '36',
       },
       gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
        '26': '26',
        '27': '27',
        '28': '28',
        '29': '29',
        '30': '30',
        '31': '31',
        '32': '32',
        '33': '33',
        '34': '34',
        '35': '35',
        '36': '36',
       },

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
