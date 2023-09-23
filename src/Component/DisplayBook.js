import React,{useState,useEffect} from "react";
import axios from "axios";

const DisplayBook = ({searchedBook}) =>{
    const [data, setData] = useState([]);
    
    
    useEffect(()=>{
        const url1 = "https://www.googleapis.com/books/v1/volumes?q=Sherlock Holmes";
        const url2 = "https://www.googleapis.com/books/v1/volumes?q=harry+potter"

        Promise.all([axios.get(url1),axios.get(url2)])
        .then(([res1,res2]) =>{
            const data1 = res1.data.items;
            const data2 = res2.data.items;
            const combined = [...data1,...data2];
            setData(combined);
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);
 

    return(
        <div className="displayBook">
            {
                data && 
                data.map((book)=>(
                    <div className="card-container">
                    <div className="image">
                        <img  src={book.volumeInfo.imageLinks.thumbnail} alt="book"/>
                    </div>
                    <div className="info">
                        <h2>{book.volumeInfo.title}</h2>
                        <p>{book.volumeInfo.description}</p>
                        <button>Read Now!</button>
                    </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayBook;