export const truncateText = (text: string) => {
  const maxLength = 30;

  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }

  return text;
};
