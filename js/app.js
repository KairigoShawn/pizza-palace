$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    const pFlavour = $('#flavour').find(":selected").val();
    const pSize = $("#size").find(":selected").val();
    const pCrust = $("#crust").find(":selected").val();
    const pToppings = ''

    const order = new Pizza(pFlavour, pSize, pCrust, quantity, pToppings)

    console.log(pFlavour, pSize, pCrust)

    alert("Thank you for choosing Pizza Palace, sit back while we prepare your order")
  });
});

function Pizza(flavour, size, crust, quantity, toppings) {
  const sizes = {
    large: 1200,
    medium: 950,
    small: 800,
  };
  const crusts = {
    stuffed: 200,
    crispy: 100,
    glutten_free: 150,
  };
  this.flavour = flavour;
  this.size = size;
  this.crust = crust;
  this.quantity = quantity;
  this.toppings = toppings;
  this.totalprice = (toppings.length *100) + sizes[size] + crusts[crust];

}
