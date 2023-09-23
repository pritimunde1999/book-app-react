import React,{useState} from "react";
import Navbar from "./Component/Navbar";
import DisplayBook from "./Component/DisplayBook";
import MoreBooks from "./Component/MoreBooks";
import "./style.css"

const App = () =>{

    const[searchedBook,setSearchedBook] = useState("");
    console.log(searchedBook);

    return(
        <div>
           <Navbar setSearchedBook={setSearchedBook}/>
           <DisplayBook />
           <MoreBooks />
        </div>
    )
}

export default App;