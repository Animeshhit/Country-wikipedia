import { NavLink, useParams, useNavigate } from "react-router-dom";
import data from "../data.json";
import { useEffect, useState } from "react";
import convertToInternationalCurrencySystem from "../components/convert";

const Info = ({ props }) => {
  const params = useParams().id;
  const [target, setTarget] = useState({});
  const [currency, setCurrency] = useState(null);
  const [lang, setLang] = useState("Loading...");
  const [topDomain, setTopDomain] = useState("Loading...");
  const [border, setBorder] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    const targetData = data.filter((country) => {
      return country.alpha3Code == params;
    })[0];
    console.log(targetData);
    setTarget(targetData);
    if (targetData.currencies) {
      setCurrency(targetData.currencies[0].code);
    } else {
      setCurrency("None");
    }
    if (targetData.languages) {
      let html = targetData.languages.map((lang, index) => {
        if (index == targetData.languages.length - 1) {
          return <span>{lang.name}</span>;
        } else {
          return <span>{`${lang.name}, `}</span>;
        }
      });
      setLang(html);
    } else {
      setLang(<span>None</span>);
    }
    if (targetData.topLevelDomain) {
      let domainHtml = targetData.topLevelDomain.map((domain, index) => {
        if (index == targetData.topLevelDomain.length - 1) {
          return <span>{domain}</span>;
        } else {
          return <span>{`${domain}, `}</span>;
        }
      });
      setTopDomain(domainHtml);
    } else {
      setTopDomain(<span>None</span>);
    }
    let borderHtml;
    if (targetData.borders) {
      borderHtml = targetData.borders.map((border) => {
        return (
          <li className="py-0 px-4 border-2 rounded-full dark:text-darkmodelist">
            <NavLink to={`/info/${border}`}>{border}</NavLink>
          </li>
        );
      });
      setBorder(borderHtml);
    } else {
      setBorder(
        <li className="py-0 px-4 border-2 rounded-full dark:text-darkmodelist">
          None
        </li>
      );
    }
  }, [params]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section className="info mt-8">
        <div className="container">
          <button
            type="button"
            onClick={goBack}
            className="text-lighttextcolor dark:text-darkmodelist flex items-center gap-4 shadow-md hover:shadow-lg py-3 px-6 rounded-lg bg-lightelmcolor dark:bg-darkelmcolor"
          >
            <ion-icon name="return-up-back-outline"></ion-icon>
            <span>Back</span>
          </button>
          <div className="info_container w-full mt-14 flex items-center justify-center gap-16">
            <img
              className="flagonInfo rounded-lg bg-lightelmcolor dark:bg-darkelmcolor"
              loading="lazy"
              src={target.flag}
              alt="flag"
            />
            <div className="info_right lg:w-1/2">
              <div className="w-full h-full main_info flex items-center gap-8 justify-between">
                <div className="left">
                  <h1 className="text-lighttextcolor dark:text-lightmodebg text-3xl font-bold heading-font">
                    {target.name ? target.name : "None"}
                  </h1>
                  <ul className="mt-6">
                    <li className="dark:text-darkmodelist pb-3">
                      <b>
                        Native Name:{" "}
                        <span className="ml-2 text-lighttextcolor dark:text-lightmodebg">
                          {target.nativeName ? target.nativeName : "None"}
                        </span>
                      </b>
                    </li>
                    <li className="dark:text-darkmodelist pb-3">
                      <b>Population:</b>
                      <span className="ml-2 text-lighttextcolor dark:text-lightmodebg">
                        {target.population
                          ? convertToInternationalCurrencySystem(
                              target.population
                            )
                          : "000"}
                      </span>
                    </li>
                    <li className="dark:text-darkmodelist pb-3">
                      <b>Region:</b>
                      <span className="ml-2 text-lighttextcolor dark:text-lightmodebg">
                        {target.region ? target.region : "None"}
                      </span>
                    </li>
                    <li className="dark:text-darkmodelist pb-3">
                      <b>Sub Region:</b>
                      <span className="ml-2 text-lighttextcolor dark:text-lightmodebg">
                        {target.subregion ? target.subregion : "None"}
                      </span>
                    </li>
                    <li className="dark:text-darkmodelist pb-3">
                      <b>Capital:</b>
                      <span className="ml-2 text-lighttextcolor dark:text-lightmodebg">
                        {target.capital ? target.capital : "None"}
                      </span>
                    </li>
                    <li className="dark:text-darkmodelist pb-3">
                      <b>Area:</b>
                      <span className="ml-2 text-lighttextcolor dark:text-lightmodebg">
                        {target.area
                          ? convertToInternationalCurrencySystem(target.area) +
                            " m²"
                          : "unKnown"}
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="right">
                  <ul>
                    <li className="dark:text-darkmodelist pb-3">
                      <b>Top Level Domain:</b>
                      <span className="ml-2 text-lighttextcolor dark:text-lightmodebg">
                        {topDomain}
                      </span>
                    </li>
                    <li className="dark:text-darkmodelist pb-3">
                      <b>Currencies:</b>
                      <span className="ml-2 text-lighttextcolor dark:text-lightmodebg">
                        {currency}
                      </span>
                    </li>
                    <li className="dark:text-darkmodelist pb-3">
                      <b>Languages:</b>
                      <span className="ml-2 text-lighttextcolor dark:text-lightmodebg">
                        {lang}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex mt-6 items-center">
                <span className="dark:text-darkmodelist text-ligthDark">
                  <b>Border Countries:</b>
                </span>
                <ul className="flex items-center ml-3 gap-3 flex-wrap">
                  {border}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
