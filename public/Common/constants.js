// Image CDN URL for Restaurant card
 //export const IMG_CDN_URL = `${process.env.REACT_MEDIA_ASSETS_BASE_URL}image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

 //export const IMG_CDN_URL =  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

 export const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/`;

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/`;


// Swiggy API to get Restaurant data using foodfire server
//export const FOODFIRE_API_URL = `${process.env.REACT_FOODFIRE_APP_BASE_URL}restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING`;

export const FOODFIRE_API_URL = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

// Swiggy API to get Restaurant Menu data using foodfire server
export const FOODFIRE_MENU_API_URL =  `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9046136&lng=77.614948&restaurantId=`;


// shimmer card unit
export const shimmer_card_unit = 20;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 10;

// Github - username
export const Github_UserName = "Shantanu Patel";
export const Github_Repository_Name = "Food Villa";

// Github API for User
export const Github_API_User = "https://github.com/shantanu1807";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/shantanu-patel-147845227";
export const Twitter_Link = "https://x.com/102Shantanu";
export const Github_Link = "https://github.com/shantanu1807";
export const Email_Link = "mailto:shantanupatel1807@gmail.com@gmail.com";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};

// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";