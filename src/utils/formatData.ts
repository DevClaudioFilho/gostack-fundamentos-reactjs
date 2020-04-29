const formatData = (value: Date): string =>
  Intl.DateTimeFormat('pt-Br').format(new Date(value));

export default formatData;
