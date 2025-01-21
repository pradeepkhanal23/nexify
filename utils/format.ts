// so the price could be either number of Nan, null or undefined in some case
// if the price is  a falsy value (ie we have either undefined or null), then we assign default value of "0" to the australianDollor
export const formatPrice = (price: number | null) => {
  let australianDollor = price || 0;
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(australianDollor);
};
