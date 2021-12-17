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
function enter(numAdults, numChildren) {
  if (numChildren > numAdults) {
    return false

  }
  adults = numAdults + adults
  children = numChildren + children
  return true
}

/* EXERCISE 2 */
function leave(numAdults, numChildren) {

  const adultsLeft = adults - numAdults
  const childrenLeft = children - numChildren

  if (adultsLeft < childrenLeft) { 
    return false 
  }

  if (numChildren > 0 && numAdults === 0) {
    return false
  }

  if (numChildren > children) {
    return false
  }

  adults =  adults - numAdults 
  children = children - numChildren 
  return true

}
  /* EXERCISE 3 */
  function occupancy() {
    return {
      adults: adults,
      children: children
    }
  }




  // TODO: Change the undefined values below to the name of your functions
  module.exports = {
    enter: enter,
    leave: leave,
    occupancy: occupancy,
    reset: reset
  }
