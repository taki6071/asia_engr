import img1 from "../photo/project_pic/holy.jpg"; //13
import img2 from "../photo/project_pic/nazrul.jpg"; //12
import img3 from "../photo/project_pic/azher.jpg"; //11
import img4 from "../photo/project_pic/residen.jpg"; //4
import img5 from "../photo/project_pic/beach.jpg"; //10
import img6 from "../photo/project_pic/khan.jpg"; //3
import img7 from "../photo/project_pic/residen1.jpg"; //5
import img8 from "../photo/project_pic/cum.jpg"; //2
import img9 from "../photo/project_pic/bondhon.jpg"; //9
// import img10 from "../photo/project_pic/rover.png"; //8
// import img11 from "../photo/project_pic/subaru.png"; //6
// import img12 from "../photo/project_pic/suzuki.png"; //7
// import img13 from "../photo/project_pic/toyota.png"; //1
import { Link } from "react-router-dom";

function Products() {
  const brands = [
    {
      name: "The Holy Monzil",
      image: img1,
      site: "South Middle Halishahar, Chattogram",
      area: "5.5",
      condition: "On Going"
    },
    {
      name: "10 storied Nazrul BN House",
      image: img2,
      site: "Road-12, CDA R/A, Agrabad, Chattogram",
      area: "13.50",
      condition: "On Going"
    },
    {
      name: "10 storied Azher Tower",
      image: img3,
      site: "Access Road, Bakolia, Chattogram",
      area: "3.50",
      condition: "On Going"
    },
    {
      name: "10 storied Residential Building",
      image: img4,
      site: "Hillview R/A, Sholoshahar, Chattogram",
      area: "6",
      condition: "On Going"
    },
    {
      name: "Hotel Beach Way",
      image: img5,
      site: "Plot-21, Block-C, Kolatoli, Cox’s Bazar",
      area: "7.50",
      condition: "Executed"
    },
    {
      name: "Khan City Center",
      image: img6,
      site: "Jorargonj, Baroiar Hat, Mirshorai, Chattogram",
      area: "36.11",
      condition: "Executed"
    },
    {
      name: "10 storied Residential Building",
      image: img7,
      site: "Plot-158, Road-06, Paharika Housing Society, Roufabad, Chattogram",
      area: "5.50",
      condition: "On Going"
    },
    {
      name: "8 storied Commercial Cum Residential Building",
      image: img8,
      site: "Khilpara, Anwara, Chattogram",
      area: "12",
      condition: "On Going"
    },
    {
      name: "10 storied Bondhon Palace",
      image: img9,
      site: "168/153, Chotora, Cumilla",
      area: "9.50",
      condition: "On Going"
    },
    // {
    //   name: "lamborghini",
    //   image: img5,
    // },
    // {
    //   name: "bmw",
    //   image: img3,
    // },
    // {
    //   name: "benz",
    //   image: img2,
    // },
    // {
    //   name: "audi",
    //   image: img1,
    // },
  ];

  // const q = query(collection(db, "vehicles"), where("brand", "==", brands.name));

  return (
    <div className="w-[90%] max-w-[900px] mx-auto mt-8 bg-white p-3 md:p-8 rounded-xl shadow-lg shadow-amber-400">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-[#0b3d91] mb-3">Our Projects</h1>

      <p className="text-[16px] leading-7 mt-2 text-gray-700">
        Since 2007, we have been delivering quality architectural and engineering solutions across more than 500+ projects.
      </p>

      

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 gap-y-12 pt-9">
        {brands.map((brand) => (
          <div className="w-full h-98 shadow-2xl shadow-blue-300 rounded-lg">
            <div className="p-2 h-15 font-semibold">
              <p className="text-center">{brand.name}</p>
            </div>
            <div>
              <img
                src={brand.image}
                alt={brand.name}
                className="w-full h-50 sm:h-40 pl-2 pr-2"
              />
            </div>
            <div className="p-2 text-sm">
              <p><strong>Site : </strong>{brand.site}</p>
              <p><strong>Area : </strong>{brand.area} Katha</p>
              <p><strong>Status: </strong>{brand.condition}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
