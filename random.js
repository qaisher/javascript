function repeatStringNumTimes(str, num) {
  
    for(let i = 0; i<num-1; i++){
      str+=str;
    }
    return str;
  }
  
  console.log(repeatStringNumTimes("abc", 3));