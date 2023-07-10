"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const DeleteProduct = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleDelete = async (productId) => {
    await axios.delete(`/api/products/${productId}`);
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={toggleModal}>
        Delete
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure to delete {product.name}?
          </h3>
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={toggleModal}
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-error"
              onClick={() => handleDelete(product.id)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
