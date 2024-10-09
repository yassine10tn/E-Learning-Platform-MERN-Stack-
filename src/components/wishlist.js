import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTrash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate(); 
  useEffect(() => {
    fetchWishlistItems();

    const interval = setInterval(fetchWishlistItems, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchWishlistItems = () => {
    axios
      .get("http://localhost:8080/api/wishlist")
      .then((response) => {
        const items = response.data;
        setWishlistItems(items);

        const total = items.reduce((acc, item) => {
          const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
          return acc + (isNaN(priceNumber) ? 0 : priceNumber);
        }, 0);

        setTotalPrice(total);
      })
      .catch((error) => {
        console.error("There was an error fetching the wishlist items!", error);
      });
  };

  const deleteAllWishlistItems = () => {
    axios
      .delete("http://localhost:8080/api/wishlist")
      .then(() => {
        setWishlistItems([]);
        setTotalPrice(0);
      })
      .catch((error) => {
        console.error("Failed to delete all wishlist items", error);
      });
  };

  const deleteWishlistItem = (id) => {
    axios
      .delete(`http://localhost:8080/api/wishlist/${id}`)
      .then(() => {
        setWishlistItems(wishlistItems.filter((item) => item._id !== id));
        const newTotal = wishlistItems.reduce((acc, item) => {
          const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
          return acc + (isNaN(priceNumber) ? 0 : priceNumber);
        }, 0);
        setTotalPrice(newTotal);
      })
      .catch((error) => {
        console.error("Failed to delete the wishlist item", error);
      });
  };

  const handleCheckout = () => {
    navigate("/order");
  };

  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        style={{ width: "35%" }}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header d-flex justify-content-between align-items-center">
          <h5 id="offcanvasRightLabel" className="mb-0">
            Wishlist
          </h5>
          <div className="d-flex align-items-center ms-auto">
            <button
              className="btn btn-link text-decoration-none text-muted d-flex align-items-center me-2"
              onClick={deleteAllWishlistItems}
            >
              <FaTrash className="me-1" /> Delete All
            </button>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <hr className="my-2" />
        <div className="offcanvas-body d-flex flex-column justify-content-between">
          <div>
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <div className="card mb-3 shadow-sm" key={item._id}>
                  <div className="row g-0 h-50">
                    <div className="col-auto">
                      <img
                        src={item.img}
                        alt="Product"
                        className="rounded-start"
                        style={{
                          width: "200px",
                          height: "250px",
                        }}
                      />
                    </div>
                    <div className="col">
                      <div className="card-body d-flex flex-column justify-content-between h-100">
                        <div>
                          <h6 className="card-title mb-1 fw-bold">
                            {item.desc}
                          </h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold fs-5 text-end">
                            {item.price} $
                          </span>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteWishlistItem(item._id)}
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">Your wishlist is empty</p>
            )}
          </div>
          <div className="border-top pt-3">
            <p className="mb-1 fw-bold">Subtotal:</p>
            <h5 className="fw-bold text-end">{totalPrice.toFixed(2)} $</h5>
            <p className="text-muted">
              Final price and discounts will be determined at time of payment
              processing.
            </p>
            <button
              className="btn btn-success w-100 mt-3 shadow"
              onClick={handleCheckout}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
