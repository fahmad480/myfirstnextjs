"use client";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const UpdateProduct = ({ brands, product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [brand, setBrand] = useState(product.brandId);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await axios.patch(`/api/products/${product.id}`, {
      name: name,
      price: Number(price),
      brandId: Number(brand),
    });
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={toggleModal}>
        Edit
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Product {product.name}</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label font-bold">Product Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered"
                placeholder="Product Name"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Product Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="input input-bordered"
                placeholder="Product Price"
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">Brand Name</label>
              <select
                value={brand}
                onChange={(e) => setBrand(Number(e.target.value))}
                className="select select-bordered"
              >
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={toggleModal}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
