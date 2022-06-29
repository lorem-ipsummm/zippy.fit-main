export const isEmpty = (val) => {
  if (val.length === 0) {
    return false;
  }
  console.log(val)

  return true;
};

export const validateEmail = (val) => {
  if (val.length === 0) {
    return false;
  }

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(val).toLowerCase())) {
    return false;
  }
console.log(val)
  return true
};
