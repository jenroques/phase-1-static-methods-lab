class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-']+/g, " ");
  }

  static titleize(string) {
    let array = string.split(' ');
    let newarray = [];

    for (let x = 0; x < array.length; x++) {
      newarray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
    }
    return newarray.join(' ');
  }
} 