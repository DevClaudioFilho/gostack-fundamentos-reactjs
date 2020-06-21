const formatData = (value: Date): any =>
  Intl.DateTimeFormat('pt-Br').format(new Date(value));

export default formatData;
