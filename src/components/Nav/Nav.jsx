import styles from "./Nav.module.css";
import React, { useEffect, useState } from "react";
import logo from "../../assets/cinema/popcorn.png";
import search from "../../assets/cinema/search.svg"
import inputSearch from "../../assets/inputSearch.svg";
import car from "../../assets/car.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import cardStore from "../../stores/userStore";
import { Link } from "react-router-dom";
import storeCount from "../../stores/countStores";
import productShoppingStore from "../../stores/productShoppingStore";
import titulo_svg from "../../assets/titulo.svg";

export const Nav = (props) => {
  const [users, setUsers] = useState(cardStore.getUser());

  const [countNav, setCountNav] = useState(storeCount.getCounts());

  useEffect(() => {
    // debugger;
    productShoppingStore.addChangeListener(updateCount);
    // return productShoppingStore.removeChangeListener(updateCount);
  }, []);

  function updateCount() {
    // debugger;
    setCountNav(productShoppingStore.getTotalCant());
  }

  return (
    <>
      <div className={styles.container}>
        <Link className={styles.container_links} to={"/"}>
          <img src={logo} alt="" className={styles.container__nav__logo} />
        </Link>
            <div className={styles.container__seach__image}>

              <img src={search} className={styles.search__image} alt="" />
            </div>
            <div  className= {`   ${styles.sud_sud_header} ` } >


              <Link className={styles.container__izq} to={"/"}>
                <p>Generos</p>
              </Link>

              <Link className={styles.container__izq}  to={"/registroE"}>
                <p>Iniciar Sesion</p>
              </Link>
                

            </div>      


      </div>


    </>
  );
};
