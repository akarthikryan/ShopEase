
import { Link } from "react-router-dom";
import {
  Smartphone,
  Shirt,
  Laptop,
  Sofa,
  ShoppingBasket,
  Dumbbell,
  Sparkles
} from "lucide-react";

const categories = [
  { name: "Mobiles", icon: Smartphone },
  { name: "Fashion", icon: Shirt },
  { name: "Electronics", icon: Laptop },
  { name: "Home", icon: Sofa },
  { name: "Grocery", icon: ShoppingBasket },
  { name: "Sports", icon: Dumbbell },
  { name: "Beauty", icon: Sparkles }
];

function CategoryBar() {
  return (
    <div className="category-bar">
      {categories.map((category) => {
        const Icon = category.icon;

        return (
          <Link
            key={category.name}
            to={`/?category=${encodeURIComponent(category.name)}`}
            className="category-item"
          >
            <Icon size={30} />
            <span>{category.name}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default CategoryBar;
