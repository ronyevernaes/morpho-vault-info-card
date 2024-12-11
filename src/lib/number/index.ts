export const formatMoney = (value: number): string => {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(2).replace(/\.0$/, "") + "B";
  }

  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(2).replace(/\.0$/, "") + "M";
  }
  
  if (value >= 1_000) {
    return (value / 1_000).toFixed(2).replace(/\.0$/, "") + "k";
  }

  return value.toString();
};
