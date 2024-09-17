import Helmet from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";
import searchImage from "../assets/productsUpSearch.png";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page not found - Products Up</title>
      </Helmet>
      <Header
        headerStatus={{ messages: true, signedIn: true, name: "Rafael.L" }}
      />
      <div className="container-fluid pt-5 text-center">
        <h3 className="fw-bold my-5">Page not found.</h3>
        <div className="row d-flex justify-content-center">
          <div className="col-md-3 col-sm-6 col-8">
            <img src={searchImage} alt="search" className="img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
