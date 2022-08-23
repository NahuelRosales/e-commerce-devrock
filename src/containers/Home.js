import React, { useContext, useEffect} from "react";
import Contexto from "../context/Contexto";
import "../assets/css/Home.css";
import Item from "../components/Item";

const Home = () => {
  useEffect(() => {
    listameProductos()
  }, []);
  const { listameProductos, productos } = useContext(Contexto)
  return (
    <>
      <div className="container">
        <div className="wraper">
          
          <div className="home">
            {
              productos.map((item) =>(
                <Item {...item} key={item.id}></Item>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
