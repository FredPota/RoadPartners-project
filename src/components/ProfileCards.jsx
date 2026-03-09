import StarRating from "./starRating";
import ReviewForm from "./reviewForm";
import { useState } from "react";

function ProfileCards() {

    const [rating, setRating] = useState(0);

    return (
        <>
        <button className="profile-card">
            <img className="profile-photo-card " src="usuario.png" alt="" />
            <div className="">Mario</div>
            <div className="">Compañeros el 1/10/2025 hacia Facultad de Ciencias Físico Mátemáticas</div>
            <div onClick={() => setRating(true)}><StarRating></StarRating></div>
                
            <div className=""></div>   
            {rating==true && <ReviewForm setreview={setRating} />} 
        </button>
        
        </>
        

    );
}

export default ProfileCards;