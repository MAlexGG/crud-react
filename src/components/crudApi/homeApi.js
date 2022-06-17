import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import { Link, useParams } from "react-router-dom";
import { serviceApi } from "../../services/serviceApi";
import CrudApiCard from "./CrudApiCard";

function HomeApi() {

    const [cards, setCards] = useState([]);

    let api = serviceApi();
 
    useEffect(() => {
        api.get().then(res => {
            setCards(res.data.data);
        }).catch((error) => {
            alert(`Error ${error.response.status}. Sorry, ${error.response.statusText}`);
        });
    }, [api.url]);
  
    return (
        <div>
            <Navbar txtColor1="txtColor2" txtColor2="txtColor2" txtColor3="txtColor2" txtColor4="txtColor2" txtColor5="txtColor1" />
            <h2 className="txt-title">CRUD using Api from Laravel</h2>
            <Link to="/crud-api-form"><button className='bt-form-create'>Create Card</button></Link>
            <div className="ct-cards">
                {
                    cards.map((card, index) => (
                        <CrudApiCard key={index} card={card}/>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeApi;
