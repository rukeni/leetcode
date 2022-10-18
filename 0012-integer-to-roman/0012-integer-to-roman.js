/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let answer = '';
  
    while (num >= 1000) {
      num -= 1000;
      answer += 'M';
    }
  
    while (num >= 900) {
      num -= 900;
      answer += 'CM';
    }
  
    while (num >= 500) {
      num -= 500;
      answer += 'D';
    }
  
    while (num >= 400) {
      num -= 400;
      answer += 'CD';
    }
  
    while (num >= 100) {
      num -= 100;
      answer += 'C';
    }
  
    while (num >= 90) {
      num -= 90;
      answer += 'XC';
    }
  
    while (num >= 50) {
      num -= 50;
      answer += 'L';
    }
  
    while (num >= 40) {
      num -= 40;
      answer += 'XL';
    }
  
    while (num >= 10) {
      num -= 10;
      answer += 'X';
    }
  
    while (num >= 9) {
      num -= 9;
      answer += 'IX';
    }
  
    while (num >= 5) {
      num -= 5;
      answer += 'V';
    }
  
    while (num >= 4) {
      num -= 4;
      answer += 'IV';
    }
  
    while (num >= 1) {
      num -= 1;
      answer += 'I';
    }
  
    return answer;

};