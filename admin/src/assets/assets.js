import logo from "./logo.png";
import add_icon from "./add_icon.png";
import order_icon from "./order_icon.png";
import upload_area from "./upload_area.png";
import parcel_icon from "./parcel_icon.png";
import all_order_items from "./all_order_items.png";
import prasad_photo from "./prasad_profile.jpeg";

export const assets = {
  logo,
  add_icon,
  order_icon,
  upload_area,
  parcel_icon,
  all_order_items,
  prasad_photo
};

// export const url = "http://localhost:8000";
export const url = import.meta.env.VITE_APP_BACKEND_URL;
