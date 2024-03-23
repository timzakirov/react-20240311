import React from 'react'
import ReactDOM from 'react-dom/client'
import { restaurants } from './constants/mock'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>

    <div>
      <h3>{ restaurants[0].name }</h3>
      <h4>Меню</h4>
      <ul>
        <li>{restaurants[0].menu[0].name}</li>
        <li>{restaurants[0].menu[1].name}</li>
        <li>{restaurants[0].menu[2].name}</li>
      </ul>
      <h4>Отзывы</h4>
      <ul>
        <li>{restaurants[0].reviews[0].text}</li>
        <li>{restaurants[0].reviews[1].text}</li>
      </ul>
    </div>

    <div>
      <h3>{ restaurants[1].name }</h3>
      <h4>Меню</h4>
      <ul>
        <li>{restaurants[1].menu[0].name}</li>
        <li>{restaurants[1].menu[1].name}</li>
      </ul>
      <h4>Отзывы</h4>
      <ul>
        <li>{restaurants[1].reviews[0].text}</li>
        <li>{restaurants[1].reviews[1].text}</li>
        <li>{restaurants[1].reviews[2].text}</li>
      </ul>
    </div>

    <div>
      <h3>{ restaurants[2].name }</h3>
      <h4>Меню</h4>
      <ul>
        <li>{restaurants[2].menu[0].name}</li>
        <li>{restaurants[2].menu[1].name}</li>
        <li>{restaurants[2].menu[2].name}</li>
      </ul>
      <h4>Отзывы</h4>
      <ul>
        <li>{restaurants[2].reviews[0].text}</li>
      </ul>
    </div>

    <div>
      <h3>{ restaurants[3].name }</h3>
      <h4>Меню</h4>
      <ul>
        <li>{restaurants[3].menu[0].name}</li>
        <li>{restaurants[3].menu[1].name}</li>
      </ul>
      <h4>Отзывы</h4>
      <ul>
        <li>{restaurants[3].reviews[0].text}</li>
        <li>{restaurants[3].reviews[1].text}</li>
      </ul>
    </div>

  </div>

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

