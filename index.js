// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Candies</h1>`;

/**
 * n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.
 * Example:
 * - For n = 3 and m = 10, the outptu should be candies (n, m) = 9.
 * Each child will eat 3 pieces. So the answer is 9.
 * HINTS: Math.floor()
 */
function candies(children, candy) {
  // write code here.
  return Math.floor(candy / children) * children;

  /** MY OLDER SOLUTION of 2020 */
  // let divisor = Math.floor(candy / children);
  // let res = 0;
  // for (let i = 0; i <= candy; i++) {
  //   if (i % children == 0) {
  //     res = i;
  //   }
  // }
  // return res;
}

console.log(candies(3, 10));
console.log(candies(4, 15));
