/**
 * isNumber
 * @description validates if param is a number
 * @param {*} param 
 * @param {String} name
 * @return {Number} number
 */

 function isNumber(param, name) {
  if (!param) {
    throw `${name} is undefined`;
  }

  let number = Number(param);

  if (typeof param !== 'number') {
    throw `${name} is not a number`;
  }

  if (number < 0) {
    throw `${name} is less than 0`;
  }

  return number;
}

exports = module.exports = isNumber;