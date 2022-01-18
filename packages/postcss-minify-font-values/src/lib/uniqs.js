/** @param {string} exclude */
export default function uniqueExcept(exclude) {
  /** @param {string[]} list */
  return function unique(list) {
    return list.filter((item, i) => {
      if (item.toLowerCase() === exclude) {
        return true;
      }
      return i === list.indexOf(item);
    });
  };
}
