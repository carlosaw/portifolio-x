import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Criação & inspiração.</h1>
        <p className="pl-desc">
        Com nossa ampla gama de serviços, nos esforçamos para criar um trabalho com carga cultural que seja emocionalmente ressonante e orientado a resultados.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} img2={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;