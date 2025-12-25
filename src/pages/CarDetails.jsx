import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function CarDetails() {
  const { brand, id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState(""); // ⭐ main preview image


  if (loading) {
    return <h1 className="text-center text-2xl mt-10">Loading...</h1>;
  }

  if (!car) {
    return <h1 className="text-center text-3xl mt-10">Car Not Found</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-blue-700">{car.model}</h1>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ⭐ Main Image */}
        <div>
          <img
            src={mainImage}
            className="w-full h-96 object-cover rounded shadow-lg"
            alt="Main Car"
          />

          {/* ⭐ Thumbnail Images */}
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {car.images?.map((img, i) => {
              const optimized = img.replace(
                "/upload/",
                "/upload/f_auto,q_auto,w_300/"
              );

              return (
                <img
                  key={i}
                  src={optimized}
                  className="w-24 h-24 object-cover rounded cursor-pointer border hover:scale-105 transition"
                  onClick={() =>
                    setMainImage(
                      img.replace("/upload/", "/upload/f_auto,q_auto,w_auto/")
                    )
                  }
                />
              );
            })}
          </div>
        </div>

        {/* ⭐ Car Info */}
        <div className="border p-6 rounded shadow text-lg">
          <p><strong>Brand:</strong> {car.brand}</p>
          <p><strong>Price:</strong> ${car.price}</p>
          <p><strong>Mileage:</strong> {car.mileage} km</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Body Type:</strong> {car.bodyType}</p>
          {car.description && (
            <p><strong>Description:</strong> {car.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarDetails;
