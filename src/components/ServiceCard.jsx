import img from "../img/map.png";
import ReactStarsRating from "react-awesome-stars-rating";

const ServiceCard = ({ place }) => {
  return (
    <div className="block md:grid md:grid-cols-12 p-4 gap-3 border-b">
      <div className="col-span-3 rounded overflow-hidden max-h-[200px] md:max-h-[150px] relative">
        <p>
          {/* <img scr={map} alt="map" className="object-cover h-full w-full" /> */}
          <img src={img} alt="" className="w-full h-full mr-3 object-cover" />
        </p>
      </div>
      <div className="col-span-9 flex flex-wrap">
        <div className="w-full self-start">
          {/* Result Object Name */}
          <h3 className="font-semibold text-lg mb-2 mt-1 md:mt-0">
            {place.name}
          </h3>
          <h4 className="font-semibold text-sm mb-2 mt-1 md:mt-0">
            Type: {place.category}
          </h4>
          <h5 className="font-semibold text-sm mb-2 mt-1 md:mt-0">
            {place?.providers[0]?.name && (
              <p>Provider: {place?.providers[0]?.name}</p>
            )}
          </h5>

          {/* --- */}
          {place.ratingsAverage && (
            <div className="text-sm text-dark">
              <ReactStarsRating
                value={place.ratingsAverage}
                className="flex mr-2"
                size={15}
                isEdit={false}
                primaryColor="#00afef"
                secondaryColor="#e5e7eb"
              />
              <span className="text-xs text-gray-500">
                {place.ratingsAverage} ({place.ratingsQuantity}){" "}
              </span>
            </div>
          )}
        </div>

        {/* Review Snippet Displayed If Available */}
        <div className="w-full self-end text-xs mmd:text-sm text-dark mt-5 mmd:mt-0 space-y-1">
          <p className="font-light text-sm mb-2 mt-1 md:mt-0">
            {place.location}
          </p>
          {place?.description && (
            <p className="items-center font-semibold">
              High light:
              <p className="font-light">{place.description}</p>
            </p>
          )}
        </div>
        {/* / Review Snippet Displayed If Available */}
      </div>
    </div>
  );
};

export default ServiceCard;
