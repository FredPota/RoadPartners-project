import "../assets/loginPage.css";

function PaymentForm() {

    return (
        <form>
            <div className=" login-form" id="payment-info">
                <h2 className="self-start pl-7 m-0">Información de Pago</h2>
                <input className="input-form" placeholder="Titular de la tarjeta" type="text" />
                <input className="input-form" placeholder="Número de Tarjeta" type="text" name="cardNumber" id="cardNumber" />
                <div className="login-group" id="card-details"> 
                    <div className="login-group">
                        <label htmlFor="expirationDate">Fecha de Expiración: </label>
                        <input className="input-form basis-40" id="expirationDate" type="date" />
                    </div>
                    <input className="input-form basis-40" placeholder="CVV" type="text" name="cvv" id="cvv" />
                </div>
            </div>
        
        </form>
    );
}

export default PaymentForm;