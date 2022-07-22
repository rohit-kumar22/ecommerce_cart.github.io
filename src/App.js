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
      console.log(`${item} added successfully`);
      console.log(`Total items in cart: ${cart}`);
    }
  }

  function remove(item) {
    let found = cart.findIndex((element) => element === item);

    if (found !== -1) {
      cart.splice(found, 1);
      const totalItems = cart.length;
      console.log(`${item} removed successfully`);
      console.log(`Total items in cart ${cart}`);
    } else {
      console.log(`${item} is not present in the cart`);
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
      {data.data.map((item, id) => (
        <div>
          <p className="category">&emsp;{item.name}</p>
          <div className="grid-container">
            {item.productList.map((product) => (
              <div className="grid-items">
                <p>{`Name: ${product.name}`}</p>
                <p>{`Price: ${product.price}`}</p>
                <button
                  type="addToCart"
                  value="Add To Cart"
                  id="true"
                  className="button1"
                  onClick={() => add(`${product.name}`)}>
                  Add to the Cart
                </button>
                <br></br>
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
