import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


 function MyApp(){
    return(
        <>
        <h1>Chai aur React! nikhil</h1>
        </>
    )
   
}

// const reactElement = {
//     type: 'a',
//     props: {
//         herf: "https://google.com",
//         target: "_blank"
//     },
//     children: "click me to visit google"
    
//  }

 const anotherElement = (
    <a herf="http://google.com" target='_blank'>Click Me</a>
 )

  const username = "Nikhil"


  const reactElement = React.createElement(
    'a',
    {herf:"http://google.com", target:'_blank'},
    'Click Me if you want to visit google',
    username
  )

   const greet = 'Namaste'
  const reactElements = React.createElement(
    'h1',
    {},
    'Hello World!',
    greet
  )


ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElements
   

)
