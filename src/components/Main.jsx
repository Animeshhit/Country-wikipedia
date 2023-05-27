import { useEffect, useState } from "react";
import Grid from "./Grid";
import data from "../data.json";

const Main = () => {
  const [dropDownValue, setDropDownValue] = useState("REG");
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [apiData, setApiData] = useState(null);

  // for opening the dropdown 
  const openDropdown = () => {
    setDropDownOpen(!dropDownOpen);
  };
  const setDropDown = (value) => {
    setDropDownValue(value);
    setDropDownOpen(false);
  };

  //end

   //sor the array 
  data.sort((a, b) => {
    if (dropDownValue == "REG") {
      if (a.region < b.region) {
        return -1;
      }
      if (a.region > b.region) {
        return 1;
      }
    } else if (dropDownValue == "AREA") {
      if (a.area > b.area) {
        return -1;
      }
      if (a.area < b.area) {
        return 1;
      }
    } else if (dropDownValue == "NAME") {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    } else {
      if (a.population > b.population) {
        return -1;
      }
      if (a.population < b.population) {
        return 1;
      }
    }
    return 0;
  });

  //end

  useEffect(() => {
     setApiData(data);
  },[data])



  const getSearchResults = (e) => {
    setSearchKeyword(e.target.value);
    let regex = new RegExp(e.target.value, "i");
    let searchResults = data.filter((country) => {
      return regex.test(country.name);
    });
    setApiData(searchResults);
  };

  return (
    <>
      <section id="sorting">
        <div className="container">

          <div className="sort_container flex items-center justify-between mt-8">
            <div className="flex items-center text-lighttextcolor bg-lightelmcolor dark:bg-darkelmcolor rounded shadow-lg gap-3 px-4 dark:text-lightmodeinput">
              <ion-icon className="text-2xl" name="search-outline"></ion-icon>
              <input
                type="text"
                value={searchKeyword}
                onChange={getSearchResults}
                placeholder="Search for a country.."
                className="bg-transparent dark:text-lightmodebg py-3 sm:px-4 border-none outline-none dark:placeholder:text-lightmodeinput"
              />
            </div>
            <div className="relative text-lighttextcolor dropdown-menu bg-lightelmcolor dark:bg-darkelmcolor rounded shadow-lg dark:text-lightmodeinput cursor-pointer">
              <div
                className="flex items-center justify-between just gap-2 py-3 px-4"
                onClick={openDropdown}
              >
                <input
                  type="text"
                  disabled
                  className="bg-transparent cursor-pointer"
                  value={
                    dropDownValue == "REG"
                      ? "Filter By Region"
                      : dropDownValue == "AREA"
                      ? "Filter By Area"
                      : dropDownValue == "NAME"
                      ? "Filter By Name"
                      : "Filter By Population"
                  }
                />
                <ion-icon
                  onClick={openDropdown}
                  name="chevron-down-outline"
                ></ion-icon>
              </div>
              <div className="drop_menu dark:bg-darkelmcolor bg-lightmodebg shadow-2xl rounded absolute top-full mt-3 left-0 right-0">
                <ul className={dropDownOpen ? "" : "hidden"}>
                  <li
                    onClick={() => {
                      setDropDown("NAME");
                    }}
                    className="block dark:text-lightmodebg py-3 px-4 hover:bg-lightmodeinput dark:hover:bg-darkmcolor"
                  >
                    Name
                  </li>
                  <li
                    onClick={() => {
                      setDropDown("POP");
                    }}
                    className="block dark:text-lightmodebg py-3 px-4 mb-1 hover:bg-lightmodeinput dark:hover:bg-darkmcolor"
                  >
                    Population
                  </li>
                  <li
                    onClick={() => {
                      setDropDown("AREA");
                    }}
                    className="block dark:text-lightmodebg py-3 px-4 hover:bg-lightmodeinput dark:hover:bg-darkmcolor"
                  >
                    Area
                  </li>
                  <li
                    onClick={() => {
                      setDropDown("REG");
                    }}
                    className="block dark:text-lightmodebg py-3 px-4 hover:bg-lightmodeinput dark:hover:bg-darkmcolor"
                  >
                    Region
                  </li>
                </ul>
              </div>
            </div>


          </div>


        </div>
      </section>
      <Grid data={apiData} sortBy={dropDownValue} />
    </>
  );
};

export default Main;
