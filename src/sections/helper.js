export const isEmpty = (val) => {
  if (val.length === 0) {
    return false;
  }
  // console.log(val)

  return true;
};

export const validateEmail = (val) => {
  // console.log(val)
  if (val.length === 0) {
    return false;
  }

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 if(val.match(mailformat))
 {
  
    return true;}
    else return false;
  
};
export default validateEmail