function CardPay({card}) {
    return (
        <button className="paycard">
            <h2>{card.type}</h2>
            <p className="card-number">{card.number}</p>
            <div>
                <p className="card-expiration">Exp: {card.expiration}</p>
            </div>
        </button>
    );
};

export default CardPay;