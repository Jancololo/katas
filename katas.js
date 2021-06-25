//Search Prices
function search(budget, prices) {
  return prices.filter(price => price <= budget).sort((a, b) => a - b).toString()
}

//Find longest num
function findLongest(array) {
  let longestNum = 0;

  for (let num of array) {
    if (num.toString().length > longestNum.toString().length) {
      longestNum = num;
    }
  }
  return longestNum;
}

const findLongest = (array) => array.reduce((acc, val) => val.toString().length > acc.toString().length ? val : acc)

//Mexican Wave
function wave(str) {
  let waveArr = [];

  [...str].forEach((char, index) => {
    if (char !== ' ') {
      waveArr.push(str.slice(0, index) + str.charAt(index).toUpperCase() + str.slice(index + 1))
    }
  })

  return waveArr
}

//Consecutive strings
function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return ''
  let longest = ''

  for (let i = 0; i < strarr.length; i++) {
    const current = strarr.slice(i, k + i).join('')
    if (current.length > longest.length) longest = current
  }

  return longest
}

//The Office V - Find a Chair
function meeting(x, need) {
  if (need <= 0) return 'Game On'
  let chairs = []

  x.forEach(room => {
    let currentChairs = chairs.reduce((a, b) => a + b, 0)
    
    if (currentChairs < need) {
      if (room[1] - room[0].length > 0) {
        chairs.push(currentChairs + room[1] - room[0].length > need ? need - currentChairs : room[1] - room[0].length)
      } else {
        chairs.push(0)
      }
    }
  }) 
  
  return chairs.reduce((a, b) => a + b, 0) < need ? "Not enough!" : chairs
}
