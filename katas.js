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
function wave(str){
    let waveArr = [];
    
    [...str].forEach((char, index) => {
      if(char !== ' ') {
      waveArr.push(str.slice(0, index) + str.charAt(index).toUpperCase() + str.slice(index + 1))
      } 
    })
    
    return waveArr
}