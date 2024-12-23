import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopNav from "./components/TopNav";
import Feature from "./components/Feature";
import Delivery from "./components/Delivery";
import TopPick from "./components/TopPick";
import Meal from "./components/Meal";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopNav />
      <Feature />
      <Delivery />
      <TopPick />
      <Meal />
      <Category />
      <Footer />
    </>
  );
}

export default App;
