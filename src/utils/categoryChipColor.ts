type chipCategory = 'Next.js' | 'API' | 'Career' | 'Modern JS' | 'Web';
type chipCategoryColor = 'bg-[#79E16A]' | 'bg-[#FF905E]' | 'bg-[#7EB2EE]' | 'bg-[#F66E6B]' | 'bg-[#F7EA5D]';

export const categoryChipColor = (chipCategory: chipCategory): chipCategoryColor => {
  let color;
  let randomColor;

  switch (chipCategory) {
    case 'Next.js':
      color = 'bg-[#79E16A]';
      break;
    case 'API':
      color = 'bg-[#FF905E]';
      break;
    case 'Career':
      color = 'bg-[#7EB2EE]';
      break;
    case 'Modern JS':
      color = 'bg-[#F66E6B]';
      break;
    case 'Web':
      color = 'bg-[#F7EA5D]';
      break;
    default:
      // 추후 randomColor에 대해서 논의 후 결정
      randomColor = Math.floor(Math.random() * 16777215).toString(16);
      color = `bg-[#${randomColor.padStart(6, '0')}]`;
      break;
  }

  return color as chipCategoryColor;
};
