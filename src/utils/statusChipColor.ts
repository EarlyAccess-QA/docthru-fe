type status = '' | 'WAITING' | 'REFUSE' | 'APPLY';

export const statusChipColor = (status: status) => {
  let backgroundColor;
  let textColor;

  switch (status) {
    case 'WAITING':
      backgroundColor = 'bg-[#fffde7]';
      textColor = 'text-[#f2bc00]';
      break;
    case 'REFUSE':
      backgroundColor = 'bg-[#Fff0f0]';
      textColor = 'text-[#e54946]';
      break;
    case 'APPLY':
      backgroundColor = 'bg-[#dff0ff]';
      textColor = 'text-[#4095de]';
      break;
    default:
      break;
  }

  return { backgroundColor, textColor };
};
