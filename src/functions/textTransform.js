const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const capitalizeEachFirstLetter = (string) => {
  let splittedString = string.split(" ");
  splittedString.forEach((value, index) => {
    splittedString[index] = value.charAt(0).toUpperCase() + value.slice(1);
  });
  return splittedString.join(" ");
};

export { capitalizeFirstLetter, capitalizeEachFirstLetter };
