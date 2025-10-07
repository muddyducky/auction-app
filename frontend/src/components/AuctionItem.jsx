import { useState } from "react";
import styles from "./AuctionItem.module.css";

export default function AuctionItem({ item }) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleView = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <img
            src={item.image}
            alt={item.title}
            className={styles.image}
            style={{ display: showDescription ? "none" : "block" }}
          />
        </div>

        <div className={styles.itemInfo}>
          <h3>{item.title.toUpperCase()}</h3>
      
          <span>Starting Bid: ${item.startPrice}</span>
          <br />
          <span>Reserve Price: ${item.reservePrice}</span>

          {showDescription && (
            <div className={styles.descriptionText}>
              <hr />
              <br />
              <p>{item.description.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.tabs}>
        <button onClick={toggleView}>
          {showDescription ? "BACK" : "DESCRIPTION"}
        </button>
        <button>BID</button>
        <button>BUY NOW</button>
      </div>
    </div>
  );
}






