// config/theme.js
const colors = {
    background: {
        white: '#ffffff',
        cream: '#ffe9e1',
        red: '#542323'
    },
    highlights: {
        blue: '#36648b',
    },
    neutral: {
        grey: '#362E2E',
        black: '#000000',
    },
    nav: {
        textlight: '#fff',
        textdark: '000',
        texthover: '#36648b',
        background: 'rgba(0, 0, 0, 0)',
    },

  }
  const transition = {
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    duration: '0.4s',
  }
  const breakpoints = {
        xs: '400px',
        s: '600px',
        m: '880px',
        l: '1200px',
        xl: '1400px',
    }
    const layout = {
        article: '46rem',
        base: '70rem',
        big: '83.33333rem',
      }



  const theme = {
    colors,
    transition,
    breakpoints,
    layout,
  }
  
  export default theme