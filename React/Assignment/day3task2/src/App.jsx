import logo from "./assets/logo.png"
import ProductCard from "./ProductCard.jsx"
import Navbar from "./Navbar.jsx"
import "./ProductCard.css"
import "./Navbar.css"

const App = ()=>{
  return (<>

    

    <div>
      <h1>Product Card</h1>
    </div>
    <Navbar />  

    <div className="logo">
      <img src={logo} alt=""  />
    </div>

    <ProductCard />
    

  </>)
}

export default App;