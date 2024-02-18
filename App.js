import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cardData = data.map(item =>{
        return(
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div>
            <Header />
            <section className="cards-list">
              {cardData}
            </section>
        </div>
    )
}