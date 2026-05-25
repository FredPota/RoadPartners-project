import "../assets/reviewCard.css";

export default function ReviewCard({review}) {
    return (
        <>
           <div key={review.id} className="review-card">

                    <div className="review-header">


                        <div className="review-rating">
                            ★ {review.puntuacion}
                        </div>

                    </div>

                    <p className="review-comment">
                        {review.comentario}
                    </p>

                </div>
        </>
    );
}