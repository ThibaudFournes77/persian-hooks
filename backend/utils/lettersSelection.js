export const getId = (datas) => {
    const tabIdLetters = []
    datas.map((data, index) =>
      (tabIdLetters.push(data.id))
    )
    return tabIdLetters
}

export const getOneRandom = (arr) => {
    var result,
        len = arr.length;
        var x = Math.floor(Math.random() * len);
        result = arr[x]
    return result;
}

export const getRandom = (arr, count) => {
    let answer = [], counter = 0;
   
    while(counter < count){
      let rand = arr[Math.floor(Math.random() * arr.length)];
      if(!answer.some(an => an === rand)){
        answer.push(rand);
        counter++;
      }
    }
    
    return answer;
}

export const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }