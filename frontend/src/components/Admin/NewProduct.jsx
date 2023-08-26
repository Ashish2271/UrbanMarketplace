import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from '../../actions/productAction';
import { Navigate } from 'react-router-dom';


const NewProduct = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.newProduct)

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(clearErrors());
  //   }

  //   if (success) {
  //     alert.success("Product Created Successfully");
  //     Navigate("/admin");
  //     dispatch({ type: NEW_PRODUCT_RESET });
  //   }
  // }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();

    console.log("Name:", name);
    console.log("Price:", price);
    console.log("Description:", description);
    console.log("Category:", category);
    console.log("Stock:", Stock);

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    // Debug: Log the FormData object
    console.log("FormData:", myForm);
    // myForm.set("images", images);

    // images.forEach((image) => {
    //   myForm.append("images", image);
    // });
    // dispatch(createProduct(myForm));
    const formDataToJson = (formData) => {
      const json = {};
      for (const [key, value] of formData.entries()) {
        json[key] = value;
      }
      return json;
    };
    
    // Usage
    const jsonRepresentation = formDataToJson(myForm);
    console.log(jsonRepresentation);
    dispatch(createProduct(jsonRepresentation))
  };

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6 text-center">Create Product</h1>
      <form onSubmit={createProductSubmitHandler} encType="multipart/form-data" className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <label htmlFor="name" className="block font-medium mb-2">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
  
        <label htmlFor="price" className="block font-medium mb-2">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          step="0.01"
          className="border border-gray-300 p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
  
        <label htmlFor="description" className="block font-medium mb-2">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full mb-4 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
  
        <label htmlFor="category" className="block font-medium mb-2">Category:</label>
        <textarea
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full mb-4 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
  
        <label htmlFor="stock" className="block font-medium mb-2">Stock:</label>
        <input
          type="number"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border border-gray-300 p-2 rounded-md w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
  
        {/* Add images input here */}
  
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Product
        </button>
      </form>
    </div>
  );
  
  
}

export default NewProduct
