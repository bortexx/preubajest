const getNumber = n => (n === "" ? 0 : parseInt(n));

export function Add(numbers) {
    // /[\/;\s,]/g es = que let separators
  let separators = ["//", ";", " ", "\n", ","];
  return numbers.split(/[\/;\s,]/g).reduce((total,n) => total + (getNumber(n)), 0);

}
