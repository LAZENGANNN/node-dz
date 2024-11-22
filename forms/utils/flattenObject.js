const flattenObject = (obj) => {
    const result = {};
    for (const key in obj) {
  
      if (obj.hasOwnProperty(key) && obj[key].length > 0) {
        result[key] = obj[key][0];
      }
      else{
        console.log("flattenObject ERROR")
      }
  
    }
    return result;
  };



  module.exports = {
    flattenObject
  }