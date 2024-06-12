type chipCategory = 'NEXT' | 'WEB' | 'JS' | 'API' | 'CAREER';

// 'Next.js' | 'API' | 'Career' | 'Modern JS' | 'Web'

export const categoryChipText = (chipCategory: chipCategory) => {
  let text;

  switch (chipCategory) {
    case 'NEXT':
      text = 'Next.js';
      break;
    case 'API':
      text = 'API';
      break;
    case 'CAREER':
      text = 'Career';
      break;
    case 'JS':
      text = 'Modern JS]';
      break;
    case 'WEB':
      text = 'Web';
      break;
    default:
      break;
  }

  return text;
};
