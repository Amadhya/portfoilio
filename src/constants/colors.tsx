const COLORS = {
  ALABASTER: '#fafafa',
  BIG_STONE: '#141E30',
  BLACK: '#000000',
  BLAZE_ORANGE: '#FF6D00',
  BURNING_ORANGE: '#FF7043',
  BUSH: '#143c2c',
  CINNABAR: '#E53935',
  CLOUD_BURST: '#243B55',
  COLA_LIGHT: 'rgba(0,0,0,0.1)',
  CORNFLOWER_BLUE: '#1890FF',
  CRUSTA: '#f9703b',
  DENIM: '#1565C0',
  DODGER_BLUE: '#29B6F6',
  DODGER_PURPLE: '#407aff',
  EBONY_CLAY: '#282c3f',
  ENDEAVOUR: '#00549D',
  FRUIT_SALAD: '#4CAF50',
  FUCHSIA_BLUE: '#7E57C2',
  GRAY: '#8c8c8c',
  GUARDSMAN_RED: '#D50000',
  JAFA: '#f38c47',
  LIGHTNING_YELLOW: '#faba27',
  LOCHMARA: '#0277BD',
  MALIBU: '#61dafb',
  MINE_SHAFT: '#1f1f1f',
  POMEGRANATE: '#F4511E',
  PORTAGE: '#8483f2',
  ROLLING_STONE: '#737B80',
  SUNGLOW: '#fbcb2b',
  TERRACOTTA: '#e17852',
  TUNDORA: '#434343',
  WHITE_LIGHT: 'rgba(255,255,255,0.8)',
  WHITE: '#fff',
};

const toRGB = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : null;
};

export const toRGBA = (hex: string, alpha: Number) => {
  const rgb = toRGB(hex);

  return rgb ? `rgba(${rgb.join(', ')}, ${alpha})` : null;
};

export default COLORS;
