function convertToRoman(num) {
    let arab = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    let roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
    let result = "";
    let x=1;
    while (num > 0) {
      
      if (num >= arab[arab.length-x]){
   result += roman[arab.length-x];
   num -= arab[arab.length-x];
      }
      else {
        x++;
   
      }
    }
    console.log(result)
    return result
   }
   
   console.log(convertToRoman(36));