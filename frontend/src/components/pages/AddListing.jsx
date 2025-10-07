import { useState } from "react";
import styles from "./AddListing.module.css";

export default function AddListing() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startPrice: "",
    reservePrice: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:4000/api/add-listing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Listing added successfully!");
        setFormData({
          title: "",
          description: "",
          startPrice: "",
          reservePrice: "",
        });
      } else {
        alert(data.message || "Error adding listing");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Server error.");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.listItem}>
        <h1>ADD A LISTING</h1>
        <form className={styles.addListingForm} onSubmit={handleSubmit}>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter your item's title"
          />

          <label>Item Description: </label>
          <textarea
            name="description"
            placeholder="Enter your item's description"
            className={styles.descriptionInput}
            value={formData.description}
            onChange={handleChange}
          />

          <div className={styles.bottomInput}>
            <label>Start Price:</label>
            <input
              type="number"
              name="startPrice"
              value={formData.startPrice}
              onChange={handleChange}
              placeholder="Enter start price"
            />

            <label>Reserve Price:</label>
            <input
              type="number"
              name="reservePrice"
              value={formData.reservePrice}
              onChange={handleChange}
              placeholder="Enter reserve price"
            />
          </div>

          <button type="submit">GO LIVE</button>
        </form>
      </div>
    </div>
  );
}
