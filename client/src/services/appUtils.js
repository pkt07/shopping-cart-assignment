const API_URL = "http://localhost:5000";

const appUtils = {
  api: {
    getBanners: API_URL + "/banners",
    getCategories: API_URL + "/categories",
    getProducts: API_URL + "/products",
    addToCart: API_URL + "/addToCart",
  },
};

export default appUtils;
