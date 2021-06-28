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


//IQ test 
function iqTest(numbers){
  let evens = []
  let odds = []
  
  const numArr = numbers.split(' ')
  numArr.forEach(num => num % 2 === 0 ? evens.push(num) : odds.push(num))
  
  return evens.length > odds.length ? numArr.indexOf(odds[0]) + 1 : numArr.indexOf(evens[0]) + 1
}

//Good vs Evil
function goodVsEvil(good, evil){ 
  const worth = [ [1, 2, 3, 3, 4, 10], [1, 2, 2, 2, 3, 5, 10] ];
  const goodForce = good.split(' ').reduce((s,v,i) => s + worth[0][i] * v, 0);
  const evilForce = evil.split(' ').reduce((s,v,i) => s + worth[1][i] * v, 0);
  
  return goodForce === evilForce ? 'Battle Result: No victor on this battle field' : goodForce > evilForce ? 'Battle Result: Good triumphs over Evil' : 'Battle Result: Evil eradicates all trace of Good'
}