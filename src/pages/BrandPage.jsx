import { useParams, Link } from "react-router-dom";
import { brandData } from "../data/brands";


function BrandPage() {
  const { brand } = useParams();
  const brandKey = brand.toLowerCase();

  const info = brandData[brandKey];
  const [vehicles, setVehicles] = useState([]);
  const [selectedBody, setSelectedBody] = useState("");


  // 🔥 Brand safety check
  if (!info) {
    return <h1 className="text-center text-3xl mt-10">Brand Not Found</h1>;
  }

  // 🔥 Body type filter
  const filteredCars = vehicles.filter((car) =>
    selectedBody ? car.bodyType === selectedBody : true
  );

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-blue-700">{info.title}</h1>
      <p className="mt-4">{info.description}</p>

      {/* Body Type Filter */}
      {info.bodyTypes && (
        <div className="mt-6">
          <label className="mr-3 font-semibold">Select Body Type:</label>
          <select
            value={selectedBody}
            onChange={(e) => setSelectedBody(e.target.value)}
            className="border rounded px-3 py-2"
          >
            {/* <option value="">All</option> */}
            {info.bodyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Cars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {filteredCars.map((car) => {
          const rawImage = car.imageUrls?.[0] || car.imageUrl || "";

          const optimizedUrl = rawImage
            ? rawImage.replace("/upload/", "/upload/f_auto,q_auto,w_auto/")
            : "";

          return (
            <div key={car.id} className="border rounded p-3 shadow">
              <Link to={`/products/${brandKey}/${car.id}`}>
                {optimizedUrl && (
                  <img
                    src={optimizedUrl}
                    alt={car.model}
                    className="w-full h-48 object-cover rounded"
                    loading="lazy"
                  />
                )}

                <p className="font-bold mt-2">{car.model}</p>
                <p>
                  <strong>Price:</strong> ${car.price}
                </p>
                <p>
                  <strong>Mileage:</strong> {car.mileage} km
                </p>
                <p>
                  <strong>Year:</strong> {car.year}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BrandPage;
