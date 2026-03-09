import "../assets/loginPage.css";

function PaymentForm({cardmodal,setcardmodal}) {

    return (
        <div className='flex h-full w-full relative'>
            <form className='w-1/2 flex-1'>
                <div className=" login-form relative" id="payment-info">
                    <h4 className="subtitle-form absolute p-2 bg-[#262626] -top-6">{cardmodal === 'add' ? 'Añadir Método de Pago' : 'Editar Método de Pago'}</h4>
                    <h2 className="self-start pl-7 m-0">Información de Tarjeta</h2>
                    <div className="login-group">
                        <select className='input-select' name="input-card-type" id="input-card-type">
                            <option value="0">Tipo de Tarjeta</option>
                            <option value="1">Débito</option>
                            <option value="2">Crédito</option>
                        </select>
                        <select className='input-select' name="input-bank" id="input-bank">
                            <option value="0">Banco de la tarjeta</option>
                            <option value="1">BBVA</option>
                            <option value="2">Bancomer</option>
                            <option value="3"></option>
                        </select>
                    </div>
                    
                    <input className="input-form" placeholder="Titular de la tarjeta" type="text" />
                    <input className="input-form" placeholder="Número de Tarjeta" type="text" name="cardNumber" id="cardNumber" />
                    <div className="login-group" id="card-details"> 
                        <div className="login-group">
                            <label htmlFor="expirationDate">Fecha de Expiración: </label>
                            <input className="input-form basis-40" id="expirationDate" type="date" />
                        </div>
                        <input className="input-form basis-40" placeholder="CVV" type="text" name="cvv" id="cvv" />
                    </div>
                    <button type="submit">Guardar tarejeta</button>
                    
                </div>
                
            </form>
            {cardmodal==='edit' && (
                        <button className="exit-btn" onClick={() => setcardmodal(false)}>x</button>
                    )}
        </div>
    );
}

export default PaymentForm;