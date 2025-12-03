import "./App.css";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <Header />
      <div>
        <h1>This is nikhil first react app </h1>
      </div>

      <p className="read-the-docs">
        I'm using CI/CD pipeline and it deployed on versel
      </p>
      <p>this is learn with Next.js </p>

      <div className="flex gap-4">
        <Card title="Black Tea" imageUrl="https://www.alveus.eu/wp-content/smush-webp/020-a.jpg.webp" buttonText="Order Now" />
        <Card title="Green Tea" imageUrl="https://www.vahdam.com/cdn/shop/articles/Green_Tea_Header_copy.jpg?v=1714738610&width=2048" buttonText="Buy Now"/>
        <Card title="Escpresso Coffee" imageUrl="https://www.holidayscalendar.com/wp-content/uploads/2020/08/National-Espresso-Day.jpg" buttonText="Join Us"/>
      </div>
    </>
  );
}

export default App;
