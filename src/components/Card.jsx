import { NavLink } from "react-router-dom";
import convertToInternationalCurrencySystem from "./convert";
const Card = ({ id, src, countryName, population, region, Capital }) => {
  return (
    <>
      <div className="card hover:shadow-xl rounded-md shadow-lg inline dark:bg-darkelmcolor">
        <NavLink to={`/info/${id}`}>
          <img
            src={src}
            loading="lazy"
            className="w-full card h-60 rounded-t-lg object-cover object-center bg-darkmodelist"
            alt={countryName + "flag image"}
          />
          <h1 className="font-bold heading-font mt-3 px-4 text-xl dark:text-lightmodebg">
            {countryName}
          </h1>
          <ul className="my-3 px-4">
            <li className="dark:text-darkmodelist">
              Population : {convertToInternationalCurrencySystem(population)}
            </li>
            <li className="dark:text-darkmodelist">Region : {region}</li>
            <li className="dark:text-darkmodelist">Capital : {Capital}</li>
          </ul>
        </NavLink>
      </div>
    </>
  );
};

export default Card;
