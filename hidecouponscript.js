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
  console.log(items);
  //const keys = Object.keys(items);
  const values = Object.values(items);
  console.log(values);
  for (let value of values) {
    console.log(value);
    console.log(value.product_name);
    if (value.product_name !== "Thai Family Meal Donation") {
      onlyDonation = false;

    }
  }
  if (onlyDonation == true) {
    console.log(document.getElementsByClassName('coupon')[0].classList)
    document.getElementsByClassName('coupon')[0].classList.add('hide')
  }

}
// Call functions
const http = new easyHTTP;
http.get(cart_api_url)
  .then(result => hideCouponForm(result))
  .catch(err => console.log(err));


