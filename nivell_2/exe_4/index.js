const names = ["Hole-in-one","Eagle","Birdie","Par","Bogey","Bouble Bogey", "Go Home!"]

const golfScore = (par, strokes) => {
  if(strokes === 1){
    return names[0]
  }else if (strokes <= par - 2) {
    return names[1]
  }else if(strokes === par - 1){
    return names[2]
  }else if (strokes === par){
    return names[3]
  }else if (strokes === par +  1) {
    return names[4]
  }else if(strokes === par +  2) {
    return names[5]
  }else if(strokes === par +  3) {
    return names[6]
  }else{
    return names[6]
  }
  return "Change Me";
  // Only change code above this line
}

const resultado = golfScore(5,2)
console.log(resultado)