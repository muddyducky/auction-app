import { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
import AuctionItem from "../AuctionItem";
import styles from "./BuySell.module.css";

export default function BuySellPage() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const url = query.trim()
          ? `http://localhost:4000/api/search?keyword=${encodeURIComponent(query)}`
          : `http://localhost:4000/api/items`; 

        const res = await fetch(url);
        const data = await res.json();

        if (!res.ok || !Array.isArray(data)) {
          setItems([]);
          return;
        }

        setItems(data);
      } catch (err) {
        console.error("Error fetching auction items:", err);
        setItems([]);
      }
    };

    fetchItems();
  }, [query]);

  return (
    <div className={styles.buySellContainer}>
      <SearchBar onSearch={(value) => setQuery(value)} />

      <div className={styles.itemsContainer}>
        {items.length > 0 ? (
          items.map((item, index) => (
            <AuctionItem key={item._id || index} item={item} />
          ))
        ) : (
          <h1>No matching auction items found.</h1>
        )}
      </div>
    </div>
  );
}
