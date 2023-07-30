  //1st problem:
  var market = prompt("Please enter Total amount:");


  if (market < 50 ){
      document.write("No discount is applied.")
  }

else if (market >= 50 && market <= 99){
  Discount = 0.05*market;
  document.write("Discount:"+ Discount.toFixed(2) +"<br>")
  Discounted_amount =  market - Discount;
  document.write("Discounted amount:"+ Discounted_amount.toFixed(2) +"<br>")
  document.write("Total amount:"+ market)
}else if(market >= 100 && market <= 199){
  Discount = 0.10*market;
  document.write("Discount:"+ Discount.toFixed(2) +"<br>")
  Discounted_amount =  market - Discount;
  document.write("Discounted amount:"+ Discounted_amount.toFixed(2) +"<br>")
  document.write("Total amount:"+ market)
}else if(market >= 200){
  Discount = 0.15*market;
  document.write("Discount:"+ Discount.toFixed(2) +"<br>")
  Discounted_amount =  market - Discount;
  document.write("Discounted amount:"+ Discounted_amount.toFixed(2) +"<br>")
  document.write("Total amount:"+ market)
}