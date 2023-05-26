import Card from "./Card";

const Grid = ({data}) => {
  return(
    <>
      <section id="grid" className="mt-14 mb-12">
        <div className="container">
            <div className="grid-container">
            {
            data.length > 0 ? data.map((item,index) => {
              return <Card
                      key={index}
                       id={item.alpha3Code}
                       src={item.flag}
                       countryName={item.name ? item.name : "None"}
                       population={item.population ? item.population : "00"} 
                       region={item.region ? item.region : "None"}
                       Capital={item.capital ? item.capital : "Node"}
                       />
            }) : <h3 className="text-2xl font-bold dark:text-lightelmcolor">Not Found...</h3>
          }
        </div>
        </div>
      </section>
    </>
  )
}

export default Grid;