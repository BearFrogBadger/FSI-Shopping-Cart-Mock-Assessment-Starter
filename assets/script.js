function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
}
let quantity = 1

const quantUp = document.querySelector("#quantity-up")
const quantDown = document.querySelector("#quantity-down")

quantUp.addEventListener('click', function() {
    quantity++
    updateQuantity('Quantity: ${quantity}')
}) 

quantUp.addEventListener('click', function(e) {
    if (quantity > 0) {
        quantity --
    }
    updateQuantity('Quantity: ${quantity}')
})