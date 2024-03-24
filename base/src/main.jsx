import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './components/layout/component'
import { Restaurant } from './components/restaurant/component'
import { restaurants } from './constants/mock'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))};
  </Layout>

// Доп (пример одного магазина)
  // React.createElement("div", {
  //   children: [
  //     React.createElement("h3", {
  //       children: restaurants[0].name
  //     }),
  //     React.createElement("h4", {
  //       children: "Меню"
  //     }),
  //     React.createElement("ul", {
  //       children: [
  //         React.createElement("li", {
  //           children: restaurants[0].menu[0].name
  //         }),
  //         React.createElement("li", {
  //           children: restaurants[0].menu[1].name
  //         }),
  //         React.createElement("li", {
  //           children: restaurants[0].menu[2].name
  //         })
  //       ]
  //     }),
  //     React.createElement("h4", {
  //       children: "Отзывы"
  //     }),
  //     React.createElement("ul", {
  //       children: [
  //         React.createElement("li", {
  //           children: restaurants[0].reviews[0].text
  //         }),
  //         React.createElement("li", {
  //           children: restaurants[0].reviews[1].text
  //         })
  //       ]
  //     }),
  //   ]
  // })
)

