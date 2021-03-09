import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import Menu from "../components/Menu";

function Home() {
  return (
    <div className="bg-color">
        <div className="container grid-container">
            <Header />
            <Menu/>
            <ProductList />
            <Footer />
        </div>
    </div>
  );
}

export default Home;
