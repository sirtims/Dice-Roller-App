function rollDice(){
   const numberOfDice = document.getElementById("diceNum").value
   const diceValues = document.getElementById("diceValues")
   const diceImg = document.getElementById("diceImg")
   let values = []
   let image =[]
   for(let i = 0; i < numberOfDice; i++ ){
      const value = Math.floor(Math.random() * 6) + 1
      values.push(value)
      image.push(`<img src="dice-images/${value}.png" alt="${value}">`)
      
   }
  
   diceValues.textContent = `Dice: ${values.join(", ")}`
   diceImg.innerHTML = image.join(" ")
}
