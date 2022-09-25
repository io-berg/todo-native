export function isToday(date: Date) {
  const now = new Date();

  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate() &&
    date > now
  );
}

export function isAfterToday(date: Date) {
  return (
    date.getFullYear() > new Date().getFullYear() ||
    (date.getFullYear() === new Date().getFullYear() &&
      date.getMonth() > new Date().getMonth()) ||
    (date.getFullYear() === new Date().getFullYear() &&
      date.getMonth() === new Date().getMonth() &&
      date.getDate() > new Date().getDate())
  );
}
