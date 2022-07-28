import "./styles.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Header() {
  return <header>Header</header>;
}

function Main({ data }) {
  return (
    <main>
      <div>
        {data.map((item) => (
          <div key={item.UPC}>{item.name}</div>
        ))}
      </div>
    </main>
  );
}

function Footer() {
  return <footer>Footer</footer>;
}
export default function App() {
  const [mainDate, setMainData] = useState([]);

  useEffect(() => {
    const getManiData = async () => {
      axios
        .get(
          "https://assets.fc-dev.instore.oakley.com/assets/products/products.json"
        )
        .then(({ data }) => {
          setMainData(data);
        });
    };

    getManiData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Main data={mainDate} />
      <Footer />
    </div>
  );
}
