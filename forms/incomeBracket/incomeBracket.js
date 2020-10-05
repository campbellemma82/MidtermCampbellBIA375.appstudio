btnSubmit.onclick=function(){
  let income = inptIncome.value
  let bracket = `With your income of $${income}, you are in a tax bracket of `
    if (income < 30000) {
   lblIncomeBracket.value = bracket + '8%'
    } else if (income < 99999 && income >= 30000) {
   lblIncomeBracket.value = bracket + '15%'
    } else if (income >= 99999) {
   lblIncomeBracket.value = bracket + '25%'
  }
}

btnRetryNew.onclick=function(){
  lblIncomeBracket.value = "Enter another income"
}
