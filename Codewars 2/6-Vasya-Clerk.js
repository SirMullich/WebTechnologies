function tickets(peopleInLine){
var ticketPrice = 25
var bills = [0, 0, 0]
 

for (var i = 0; i < peopleInLine.length; i++) { 
  if (peopleInLine[i] == ticketPrice) {
    bills[0] += 1 
  } else if (peopleInLine[i] > ticketPrice) { 
    if (peopleInLine[i] == 50) { 
      if (bills[0] == 0)
        return "NO"
      else {
        bills[0] -= 1
        bills[1] += 1
      }
    } else if (peopleInLine[i] == 100) {
      if ((bills[0] <= 2 && bills[1] == 0))
        return "NO"
      else {
        if (bills[1] == 0
              bills[0] -= 3
        else {
          bills[0] -= 1
          bills[1] -= 1
        }
         
      bills[2] += 1
        }
      }
    }
  }
  return "YES"
}