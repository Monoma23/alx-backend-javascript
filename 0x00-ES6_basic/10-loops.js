/* eslint-disable guard-for-in hnon */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const myarray = [];
  for (const item of array) {
    myarray.push(appendString + item);
  }

  return myarray;
}
