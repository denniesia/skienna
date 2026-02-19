export const formatDate = (date) => {
  const jsDate = date?.toDate ? date.toDate() : new Date(date);

  return jsDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};