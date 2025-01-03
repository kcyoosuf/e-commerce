export const fetchProductList = async () => {
  try {
    const response = await fetch("/products.json");
    if (response) return response?.json();
  } catch (e) {
    console.log(e);
  }
};
