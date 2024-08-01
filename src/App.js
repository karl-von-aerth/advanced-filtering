import { useState } from "react"


const App = () => {

const [selectedCategory, setSelectedCategory] = useState([])

//----------------Input Filter-------------------
const [query, setQuery] = useState("this is a query")

const handleInputChange = (e) => {
    setQuery(e.target.value)
}

const filteredItems = products.filter(
(product) => product.title.toLowerCase().indexOf(query.toLowerCase())!==-1)


//----------------Radio Filtering----------------------
const handleChange = (e) => {
    setSelectedCategory(e.target.value)
}

//---------------Button Filtering----------------------

const handleClick = (e) => {
    setSelectedCategory(e.target.value)
}

function filteredData(products, selected, query) {
    let filteredProducts = products

    //Filtering Input Items
    if (query) {
        filteredProducts = filteredItems
    }


    //Applying selected filter
    if(selected) {
        filteredProducts = filteredProducts.filter(
            ({category, color, company, newPrice, title}) => 
                category === selected ||
                color === selected ||
                company === selected || 
                newPrice === selected ||
                title === selected 
            
        )
    } 


    return filteredProducts.map(
        ({img, title, star, reviews, prevPrice, newPrice, company, color, category}) =>
        (
            <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
            />

        )
    )
}

const result = filteredData(product, selectedCategory, query)

return (
<>
<Navigation query={query} onChange={handleInputChange}/>
<Sidebar handleChange={handleChange}/>
<Products reuslt={result}/>
<Recommended handleClick={handleClick}/>
</>
)
}

export default App