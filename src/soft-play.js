// do not change these lines

function reset() {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.

/* EXERCISE 1 */
function entry(numChildren, numAdults) {
  adults = numAdults + adults
  children = numChildren + children
  if (children > adults) {
    return false
  } else return true
}

/* EXERCISE 2 */
function exit(numChildren, numAdults) {
  adults = numAdults - adults
  children = numChildren - children
  if (numChildren < numAdults || numAdults < numChildren) {
    return false
  }
  if (numAdults > adults || numChildren > children) { return false }
}

/* EXERCISE 3 */
function occupancy(numChildren, numAdults) 
{
let count = {
  'adults' : 0,
  'children' : 0
} 
numChildren = count.children
numAdults = count.adults
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: entry,
  leave: exit,
  occupancy: occupancy,
  reset: reset
}
