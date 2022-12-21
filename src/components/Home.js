import React from "react";
import Product from "components/Product.js";
import "styles/Home.css";
import samsung from "images/samsung.jpg"
import oneplus from "images/oneplus.avif"
import redmi from "images/redmi.jpg"
import realme from"images/realme.jpg"
import oppo from "images/oppo.jpg"
import vivo from "images/vivo.jpg"
export default function Home() {
  return (
    <div className="home">
      <div className="home__row">
        <Product
          id= "123456"
          title="Samsung"
          price={11000}
          rating={2}
          image={samsung}
        />
        <Product
          id="38643"
          title="Oneplus"
          price={12000}
          rating={4}
          image={oneplus}
        />
        <Product
          id="49712"
          title="Redmi"
          price={13000}
          rating={5}
          image={redmi}
        />
      </div>

      <div className="home__row">
        <Product
          id="432139"
          title="Realme"
          price={14000}
          rating={5}
          image={realme}
        />
        <Product
          id="57869"
          title="Oppo"
          price={15000}
          rating={3}
          image={oppo}
        />
        <Product
          id="6789"
          title="Vivo"
          price={16000}
          rating={2}
          image={vivo}
        />
      </div>
    </div>
  );
}
