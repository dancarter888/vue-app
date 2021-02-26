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
      maxWidth: {
        '25px': '25px',
        '35px': '35px',
        '60px': '60px'
      },
      maxHeight: {
        '25px': '25px',
        '35px': '35px',
        '60px': '60px'
      },
      spacing: {
        '1px': '1px',
        '2px': '2px',
        '4px': '4px',
        '7px': '7px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '19px': '19px',
        '20px': '20px',
        '22px': '22px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '45px': '45px',
        '50px': '50px',
        '52px': '52px',
        '55px': '55px',
        '59px': '59px',
        '60px': '60px',
        '65px': '65px',
        '68px': '68px',
        '70px': '70px',
        '78px': '78px',
        '80px': '80px',
        '81px': '81px',
        '97px': '97px',
        '105px': '105px',
        '116px': '116px',
        '120px': '120px',
        '126px': '126px',
        '140px': '140px',
        '150px': '150px',
        '152px': '152px',
        '160px': '160px',
        '180px': '180px',
        '188px': '188px',
        '200px': '200px',
        '215px': '215px',
        '235px': '235px',
        '239px': '239px',
        '240px': '240px',
        '280px': '280px',
        '300px': '300px',
        '315px': '315px',
        '320px': '320px',
        '322px': '322px',
        '362px': '362px',
        '480px': '480px',
        '510px': '510px',
        '612px': '612px',
        '640px': '640px',
        '705px': '705px',
        '720px': '720px',
        '727px': '727px',
        '826px': '826px',
        '960px': '960px',

      },
      fontSize: {
        '14px': ['14px', '14px'],
        '15px': ['15px', '15px'],
        '16px': ['16px', '16px'],
        '18px': ['18px', '18px'],
        '20px': ['20px', '20px'],
        '24px': ['24px', '24px'],
        '36px': ['36px', '36px'],
        '50px': ['50px', '50px'],
        '60px': ['60px', '60px'],

      },
      letterSpacing: {
        '2': '2px',
      },
      colors:{
        green: {
          light: '#7DCA91',
          forest: '#245B50',
        },
        cream: '#F0EEE7',
        blue: {
          baby: '#D8E9F0',
        }
      },
      gridTemplateColumns: {
        // Simple 20 column grid
        '18': 'repeat(18, minmax(0, 1fr))',
        // Simple 20 column grid
        '19': 'repeat(19, minmax(0, 1fr))',
        // Simple 20 column grid
        '20': 'repeat(20, minmax(0, 1fr))',
        // Simple 36 column grid
        '33': 'repeat(33, minmax(0, 1fr))',
        // Simple 36 column grid
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
       gridColumn: {
        'span-11': 'span 11 / span 11',
        'span-16': 'span 16 / span 16',
       },
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      height: ['hover'],
    },
  },
  plugins: [],
}
