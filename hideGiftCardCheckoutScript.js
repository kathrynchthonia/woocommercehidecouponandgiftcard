// Make an HTTP GET Request  to woocom api
const cart_api_url = "https://maleesonmain.com/wp-json/cocart/v1/get-cart";
class easyHTTP {
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
}
// Hide the coupon form if cart only contains "Thai Family Meal Donation"
const hideCouponForm = (items) => {
  onlyDonation = true;
  //const keys = Object.keys(items);
  const values = Object.values(items);
  for (let value of values) {
    if (value.product_name !== "Thai Family Meal Donation") {
      onlyDonation = false;
    }
  }
  if (onlyDonation == true) {
    console.log('onlyDonation', onlyDonation)
    console.log('pwgc-redeem-gift-card-form', document.getElementById('pwgc-redeem-gift-card-form'))
    //document.getElementById('pwgc-redeem-gift-card-form').classList.add('hide')
  }

}
// Call functions
const http = new easyHTTP;
http.get(cart_api_url)
  .then(result => hideCouponForm(result))
  .catch(err => console.log(err));


