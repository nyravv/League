// basketAmount Общая сумма корзины
// numberOfGoods Количество товаров в корзине

function calculateCost(basketAmount, numberOfGoods, promocode) {
if (promocode == 'ДАРИМ300') {
  basketAmount -= 300
  if (basketAmount < 0) {
    basketAmount = 0
  }
} if (numberOfGoods >= 10) {
  basketAmount *= 0.95
} if (basketAmount > 50000) {
  basketAmount -= (basketAmount - 50000) * 0.2
} if (promocode == 'СКИДКА15' && basketAmount >= 20000) {
  basketAmount *= 0.85
} 
return basketAmount
}

export default calculateCost