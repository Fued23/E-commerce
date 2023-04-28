import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyCarousel from "./components/MyCarousel";
import Footer from "./components/footer";
import NavbarComponent from "./components/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cancel from "./pages/Cancel";
import Store from "./pages/Store";
import Success from "./pages/Success";


function App() {

  return (
    <>
      <div className="row" style={{ backgroundColor: "black" }}>
          <Container >
            <NavbarComponent> </NavbarComponent>
            <BrowserRouter>
              <Routes>
                <Route index element={<Store />} />
                <Route path="success" element={<Success />} />
                <Route path="cancel" element={<Cancel />} />
              </Routes>
            </BrowserRouter>
          </Container>
      </div>

      <div>
        <MyCarousel />
      </div>

      <div>
        <Footer />
      </div>


    </>


  );
}


export default App;
