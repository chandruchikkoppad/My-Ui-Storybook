export const formatResponseDate = (
    dateString: string | Date,
    format: 'dd MMM yyyy' | 'MMM dd yyyy' | 'yyyy dd MM',
  ): string => {
    if (!dateString) return '';
    const convertedDate = new Date(dateString);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const day = convertedDate.getDate().toString().padStart(2, '0');
    const month = months[convertedDate.getMonth()];
    const year = convertedDate.getFullYear();
    const monthNum = (convertedDate.getMonth() + 1).toString().padStart(2, '0');
  
    switch (format) {
      case 'dd MMM yyyy':
        return `${day} ${month} ${year}`;
      case 'MMM dd yyyy':
        return `${month} ${day} ${year}`;
      case 'yyyy dd MM':
        return `${year} ${day} ${monthNum}`;
      default:
        return `${day} ${month} ${year}`;
    }
  };