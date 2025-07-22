import MyButton from "./MyButton"
import react from "react"
import {useState} from 'react'

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
]

function Products({onBackClick}) {
    const listItems = products.map(products =>(
        <li key={products.id} style={{color: products.isFruit ? 'magenta' : 'darkgreen'}}>
            {products.title}
        </li>
    ))

    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <>
            <ul>{listItems}</ul>
            <button onClick={onBackClick}>뒤로가기</button>

            <button onClick={handleClick}>Clicked {count} </button>
        </>
    )
}

export default Products