/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 15 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';
  return num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 0 || n === 1) return 1;
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, val) => acc * val,
    1
  );
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  const start = Math.min(n1, n2);
  const end = Math.max(n1, n2);
  return Array.from({ length: end - start + 1 }, (_, i) => start + i).reduce(
    (sum, num) => sum + num,
    0
  );
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 */
function doRectanglesOverlap(rect1, rect2) {
  const r1Right = rect1.left + rect1.width;
  const r1Bottom = rect1.top + rect1.height;
  const r2Right = rect2.left + rect2.width;
  const r2Bottom = rect2.top + rect2.height;

  return !(
    r1Right <= rect2.left ||
    rect1.left >= r2Right ||
    r1Bottom <= rect2.top ||
    rect1.top >= r2Bottom
  );
}

/**
 * Returns true, if point lies inside the circle, otherwise false.
 */
function isInsideCircle(circle, point) {
  const dx = point.x - circle.center.x;
  const dy = point.y - circle.center.y;
  const distanceSquared = dx * dx + dy * dy;
  return distanceSquared < circle.radius * circle.radius;
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 */
function findFirstSingleChar(str) {
  const charCount = str.split('').reduce((acc, char) => {
    acc.set(char, (acc.get(char) || 0) + 1);
    return acc;
  }, new Map());

  return str.split('').find((char) => charCount.get(char) === 1) || null;
}

/**
 * Returns the string representation of math interval.
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  const leftBracket = isStartIncluded ? '[' : '(';
  const rightBracket = isEndIncluded ? ']' : ')';
  return `${leftBracket}${start}, ${end}${rightBracket}`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 */
function reverseInteger(num) {
  const sign = Math.sign(num);
  const reversed = Math.abs(num).toString().split('').reverse().join('');
  return sign * parseInt(reversed, 10);
}

/**
 * Validates the CCN (credit card number) using Luhn algorithm.
 */
function isCreditCardNumber(ccn) {
  const digits = ccn.toString().split('').reverse().map(Number);
  const sum = digits.reduce((acc, digit, index) => {
    if (index % 2 === 1) {
      const doubled = digit * 2;
      return acc + (doubled > 9 ? doubled - 9 : doubled);
    }
    return acc + digit;
  }, 0);
  return sum % 10 === 0;
}

/**
 * Returns the digital root of integer.
 */
function getDigitalRoot(num) {
  const sumDigits = (n) =>
    n
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, d) => acc + d, 0);

  let result = sumDigits(num);
  while (result > 9) {
    result = sumDigits(result);
  }
  return result;
}

/**
 * Returns true if the specified string has the balanced brackets.
 */
function isBracketsBalanced(str) {
  const pairs = { ')': '(', ']': '[', '}': '{', '>': '<' };
  const stack = [];

  return (
    str.split('').every((char) => {
      if (['(', '[', '{', '<'].includes(char)) {
        stack.push(char);
        return true;
      }
      if ([')', ']', '}', '>'].includes(char)) {
        return stack.pop() === pairs[char];
      }
      return true;
    }) && stack.length === 0
  );
}

/**
 * Returns the string with n-ary representation of specified number.
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 */
function getCommonDirectoryPath(pathes) {
  if (pathes.length === 0) return '';

  const normalized = pathes.map((p) => p.replace(/\\/g, '/'));
  const parts = normalized.map((p) => p.split('/'));
  const first = parts[0];

  const commonCount = first.findIndex(
    (_, i) => !parts.every((p) => p[i] === first[i])
  );
  const limit = commonCount === -1 ? first.length : commonCount;
  const commonParts = first.slice(0, limit);

  if (commonParts.length === 0) return '';
  if (commonParts.length === 1 && commonParts[0] === '') return '/';
  return `/${commonParts.slice(1).join('/')}/`;
}

/**
 * Returns the product of two specified matrixes.
 */
function getMatrixProduct(m1, m2) {
  const rows1 = m1.length;
  const cols1 = m1[0].length;
  const cols2 = m2[0].length;

  return Array.from({ length: rows1 }, (_, rowIdx) =>
    Array.from({ length: cols2 }, (__, colIdx) =>
      Array.from(
        { length: cols1 },
        (___, k) => m1[rowIdx][k] * m2[k][colIdx]
      ).reduce((sum, val) => sum + val, 0)
    )
  );
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 */
function evaluateTicTacToePosition(position) {
  const lines = [
    position[0],
    position[1],
    position[2],
    [position[0][0], position[1][0], position[2][0]],
    [position[0][1], position[1][1], position[2][1]],
    [position[0][2], position[1][2], position[2][2]],
    [position[0][0], position[1][1], position[2][2]],
    [position[0][2], position[1][1], position[2][0]],
  ];

  const winningLine = lines.find(
    (line) => line[0] && line[0] === line[1] && line[0] === line[2]
  );

  return winningLine ? winningLine[0] : undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
