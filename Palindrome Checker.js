function palindrome(str) {
    let arr = str.toLowerCase().split("");
   
     for (let i = 0; i<arr.length; i++) {
      if (/[_\W]/.test(arr[i])) {
  arr.splice(i,1)
  i--;
      }
    }
  
    for (let i = 0; i<arr.length; i++) {
          if (arr[i] !== arr[arr.length-1-i]){
         
        return false
      }
      
    }
  
   return true
  }
  
  palindrome("almostomla");