/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  
    let answer = '';
  
    const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    const digit = {
      '1000': 'M',
      '900': 'CM',
      '500': 'D',
      '400': 'CD',
      '100': 'C',
      '90': 'XC',
      '50': 'L',
      '40': 'XL',
      '10': 'X',
      '9': 'IX',
      '5': 'V',
      '4': 'IV',
      '1': 'I'
    };
  
    const keys = Object.keys(digit);
  
    for(let i = 0; i < numbers.length; i++) {
      const value = numbers[i];
      
      while(value <= num) {
        num -= value;
        answer += digit[value];
      }
    }
  
    
  
    return answer;

};