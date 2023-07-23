function telephoneCheck(str) {
   
    if (/^[-]/.test(str) || /-\d$/.test(str) || /[)]$/.test(str)) {
      return false 
     }
    if (str.indexOf(")") < 0 && str.indexOf("(") >= 0 || str.indexOf("(") <0 && str.indexOf(")") >=0) return false
  
   var tel = str.replace(/\s|-|[()]|/g, "")
     
   return (/[A-Za-z]/.test(tel) || tel.length < 10 || tel.length > 11 || tel.length == 11 && tel[0] !== "1") ? false : true;
    
  }
  
  console.log(telephoneCheck("55 55-55-555-5")); 
  