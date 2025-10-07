import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <form className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
      }}
    />
    </form>
  );
}
