"use strict";

var toString = Object.prototype.toString;
var charsetRegExp = /^(?!-?0\d)-?\d+(\.\d+)?$/;
var defaultOption = {
  thousandSeparator: ',',
  // 千分位分隔符
  decimalSeparator: '.',
  // 小数分隔符
  decimalDigits: false // 小数位数量, false表示不特殊处理

};
module.exports = exports = thousandify;


function isNumber(target) {
  return toString.call(target) === '[object Number]';
}

export function thousandify(amount, option) {
  if (!charsetRegExp.test(amount)) {
    return amount;
  }

  var negative = +amount < 0;

  if (negative) {
    amount = Math.abs(amount);
  }

  var _Object$assign = Object.assign({}, defaultOption, option),
      decimalSeparator = _Object$assign.decimalSeparator,
      thousandSeparator = _Object$assign.thousandSeparator,
      decimalDigits = _Object$assign.decimalDigits;

  var amountParts = (amount + '').split(decimalSeparator);
  var intPartStr = amountParts[0].replace(/(?!^)(?=(\d{3})+$)/g, thousandSeparator);

  if (negative) {
    intPartStr = '-' + intPartStr;
  } // 处理小数部分


  var decimalStr = amountParts[1] || '';

  if (isNumber(decimalDigits)) {
    decimalStr = (decimalStr + Array(decimalDigits + 1).join(0)).substr(0, decimalDigits);
  }

  return !!decimalStr ? [intPartStr, decimalStr].join(decimalSeparator) : intPartStr;
}