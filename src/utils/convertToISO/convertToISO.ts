export const convertToISO = (dateString: string): Date => {
  let date: Date;
  if (dateString.includes('T')) {
    date = new Date(dateString);
  } else {
    const [datePart, timePart] = dateString.split(' ');
    if (!datePart || !timePart) {
      throw new Error("Invalid input format. Expected 'DD-MM-YYYY HH:mm'");
    }

    const [day, month, year] = datePart.split('-');
    const [hours, minutes] = timePart.split(':');

    date = new Date(
      parseInt(year || '', 10),
      parseInt(month || '', 10) - 1,
      parseInt(day || '', 10),
      parseInt(hours || '', 10),
      parseInt(minutes || '', 10),
    );
  }

  const formattedDate = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  const formattedTime = `${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:00`;

  return new Date(`${formattedDate}T${formattedTime}`);
};
