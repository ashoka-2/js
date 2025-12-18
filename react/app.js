
import Navbar from "./navbar.js"
import Hero from "./heropage.js"

const App = function(){
    let page = React.createElement("div",{ id: "main" },[Navbar(), Hero()]);
    return page
}

export default App
