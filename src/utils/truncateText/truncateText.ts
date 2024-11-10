export const truncateText = (text: string, maxLength: number): string => {
  if (!text || maxLength <= 0) return ''; 
  return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};
