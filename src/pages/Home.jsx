import { useState } from "react";
import { Container } from "../global/components.js";
import ToggleButton from "../Components/ToggleButton";

export default function Home() {
  const defaultProduct = { name: "", price: "" };
  const [allProduct, setAllProduct] = useState([]);
  const [product, setProduct] = useState(defaultProduct);
  const handelInput = (e) => {
    const { id, value } = e.target;
    setProduct({
      ...product,
      [id]: value,
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    setAllProduct([product, ...allProduct]);
    setProduct(defaultProduct);
  };
  return (
    <div className="home">
      <Container>
        <form onSubmit={(e) => handelSubmit(e)}>
          <label htmlFor="name">Product Name</label>
          <input
            onChange={(e) => handelInput(e)}
            type="text"
            id="name"
            value={product.name}
            required
          />
          <br />
          <label htmlFor="price">Product Price</label>
          <input
            onChange={(e) => handelInput(e)}
            type="number"
            id="price"
            value={product.price}
            required
          />
          <br />
          <button type="submit">Submit</button>
        </form>

        <ul style={{ listStyle: "none" }}>
          {allProduct.map((item, index) => {
            return (
              <li key={index}>
                <br />
                <div> {item.name}</div>
                <div>{item.price}</div>
              </li>
            );
          })}
        </ul>
      </Container>
      <Container>
        <section>
          <h3>section 1</h3>
          <ToggleButton />
        </section>
      </Container>
    </div>
  );
}
