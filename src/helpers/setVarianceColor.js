export default (value) => {
  if (typeof value === 'string') {
    switch (value) {
      case 'neutral':
        return 'yellow';
      case 'positive':
        return 'green';
      case 'negative':
        return 'red';
      default:
        return 'inherit';
    }
  } else {
    if (value > 0) {
      return 'green';
    } else if (value < 0) {
      return 'red';
    } else {
      return 'yellow';
    }
  }
};
