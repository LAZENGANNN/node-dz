function getRandomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }




function getRandomSymbols(count, string){
    
    let result = ''
    for(let i = 1; i <= count; i++){
        result+= string.charAt(getRandomInt(0, string.length))
    }
    
    return result

}

module.exports = {
    getRandomInt,
    getRandomSymbols
}