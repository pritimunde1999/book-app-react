import React,{useState} from "react";
import logo from "../images/logo.png"
import bookLogo from "../images/bookLogo.png"
import bookName from "../images/KeazoNBOOKS.png"
import diamondIcon from "../images/dimondIcon.png"
import notification from "../images/notoficationIcon.png"
import profile from "../images/profileIcon.png"
import { FaSearch } from 'react-icons/fa';


const Navbar = ({setSearchedBook}) =>{

    const[search,setSearch] = useState("");
    return(
        <div className="navbar">
          <div className="right">
              <img style={{width:"80px",backgroundColor:"#292828"}} src={logo} alt="logo"/>
              <img style={{width:"150px", backgroundColor:"#292828"}} src={bookName} alt="bookName" />
          </div>

          <div className="mid">
              <div className="searchbar">
              <FaSearch style={{color:"#373737", backgroundColor:"#373737"}}/>
              <input onChange={e=>setSearch(e.target.value)} type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot.." />
              </div>
              <button onClick={()=>setSearchedBook(search)}>Search</button>
          </div>

          <div className="left">
             <img src={bookLogo} alt="book" />
             <img src={notification} alt="notification" />
             <img src={diamondIcon} alt="diamond" />
             <img src={profile} alt="profile" />
          </div>
        </div>
    )
}

export default Navbar;