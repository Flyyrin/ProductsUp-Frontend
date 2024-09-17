import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header headerStatus={{ messages: true, notifications: true }} />
      <div className="container mt-4">
        <h3 className="fw-bold my-4 text-md-center ps-2 ps-md-0">Home</h3>
      </div>
      <Footer />
    </>
  );
}

export default Home;
