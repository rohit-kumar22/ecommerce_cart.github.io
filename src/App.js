import "./App.css";
import { data } from "./ProductsData";

function App() {
  const cart = [];

  function add(item) {
    let found = cart.find((element) => element === item);
    if (found !== undefined) {
      console.log("Item is already present");
    } else {
      cart.push(item);
      const totalItems = cart.length;

      console.log(cart);
      console.log("item added successfully");
      console.log(`Total items in cart ${totalItems}`);
    }
  }

  function remove(item) {
    let found = cart.findIndex((element) => element === item);

    if (found !== -1) {
      cart.splice(found, 1);
      const totalItems = cart.length;
      console.log("item removed successfully");
      console.log(`Total items in cart ${totalItems}`);
    } else {
      console.log("Item is not present in the cart");
    }
  }

  return (
    <div className="container">
      <div className="nav">
        <h2>Parakh</h2>
      </div>
      <div>
        <h1>Our Products</h1>
      </div>
      {data.data.map((item, index) => (
        <div className="product-bar">
          <p style={{ border: "1px solid black" }}>{item.name}</p>
          {item.productList.map((product) => (
            <div style={{ paddingTop: "20px" }}>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button
                type="addToCart"
                value="Add To Cart"
                id="true"
                className="button1"
                onClick={() => add(`${product.name}`)}>
                Add to the Cart
              </button>
              <button
                type="removeFromCart"
                value="Remove From Cart"
                id="true"
                className="button2"
                onClick={() => remove(`${product.name}`)}>
                Remove From Cart
              </button>
            </div>
          ))}
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default App;
