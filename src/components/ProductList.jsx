import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import plants from "../data/plants";
import Navbar from "./Navbar";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((plant) => plant.category))];

  const isInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="products-page">
      <Navbar />

      <main className="products-container">
        <h1>Our Plants</h1>

        <p className="products-intro">
          Discover beautiful plants to bring nature into your home.
        </p>

        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section className="category-section" key={category}>
              <h2>{category}</h2>

              <div className="product-grid">
                {categoryPlants.map((plant) => (
                  <div className="product-card" key={plant.id}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="plant-image"
                    />

                    <div className="product-info">
                      <h3>{plant.name}</h3>

                      <p className="price">
                        ${plant.price.toFixed(2)}
                      </p>

                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isInCart(plant.id)}
                        className="add-button"
                      >
                        {isInCart(plant.id)
                          ? "Added to Cart"
                          : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default ProductList;