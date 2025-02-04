const media = {
  sm_screen: '475px',
  md_screen: '768px',
  lg_screen: '1024px',
  xlg_screen: '1440px',
};

const dark: {
  purpleTheme: string;
  background: string;
  text: string;
  buttonBackground: string;
  buttonText: string;
  cardBackground: string;
  spacing: any;
} = {
  purpleTheme: 'rgb(106 85 250 / 1)',
  background: 'rgb(31 41 55 / 1)',
  text: '#F4F7FE',
  buttonBackground: '',
  buttonText: '',
  cardBackground: '#F4F7FE',
  spacing: {
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    8: '2rem',
  },
};
const light: {
  purpleTheme: string;
  background: string;
  text: string;
  buttonBackground: string;
  buttonText: string;
  cardBackground: string;
  spacing: any;
} = {
  purpleTheme: 'rgb(106 85 250 / 1)',
  background: '#F4F7FE',
  text: 'rgb(31 41 55 / 1)',
  buttonBackground: '',
  buttonText: '',
  cardBackground: 'rgb(31 41 55 / 1)',
  spacing: {
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    8: '2rem',
  },
};

const theme = {
  ...media,
  dark,
  light,
  // purple_color: 'rgb(106 85 250 / 1)',
  // hover_purple: '#816ffb',
  // light_color: '#F4F7FE',
  // dark_gray: 'rgb(31 41 55 / 1)',
  // dark_color: 'rgb(17 24 39 / 1)',
  // danger_color: 'rgb(248 113 113 / 1)',
};

export default theme;
