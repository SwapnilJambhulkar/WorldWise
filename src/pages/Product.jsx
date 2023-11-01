import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWise</h2>
          <p>
          The web app is a travel tracking and adventure registration application. Its main purpose is to allow users to register and keep track of the places they have traveled to, providing them with a visual representation of their adventures on a map. The app is built using React with the react-router-dom library for navigation and the context API for state management.
          </p>
          <p>
           <strong> Features: </strong>
           <li><strong>View a list of cities and their locations on a map.</strong></li>
           <li><strong>Click on a city marker to see detailed information. </strong></li>
           <li><strong>Create a new city by providing its details.</strong></li>
           <li><strong>Delete a city from the list.</strong></li>
          </p>
        </div>
      </section>
    </main>
  );
}
