/* Write a function that accepts two strings (x and y) as input
 * and returns the computation of x ^ y
 *
 * Basically, Math.pow but accepts strings as arguments
 * 
 * Assume all input x and y are larger than 32 bits
 *
 * Assume all inputs are integers in string format ('' + number)
 * 
 */

export default function(x, y) {
  x = +x;
  y = +y;
  var result = 1;
  for (var i = y; i > 0; i--) {
    result *= x;
  }
  return '' + result;
};
