export function FormatDate(isoString: string | Date): string {
  if (!isoString) return "";

  let date: Date;
  if (isoString instanceof Date) {
    date = isoString;
  } else {
    date = new Date(isoString);
  }

  if (isNaN(date.getTime())) return "";

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return `${months[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}
