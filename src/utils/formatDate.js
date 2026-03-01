export const formatDate = (date) => {
  const jsDate = date?.toDate ? date.toDate() : new Date(date);

  return jsDate.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};