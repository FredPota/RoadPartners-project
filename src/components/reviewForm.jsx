function ReviewForm({setreview}) {
    return (
        <div className="modal-overlay">
            <div className="w-2/3 max-w-300 rounded-lg p-10 bg-PageLight-950 text-PageDark-950">
                <div className="login-form w-full">
                    <h3 className="text-lg font-semibold">Deja tu reseña</h3>
                    <textarea className="input-form" placeholder="Escribe tu reseña aquí..."></textarea>
                    <button onClick={() => setreview(false)} className="btnSubmit-form">Enviar Reseña</button>
                </div>
            </div>
        </div>
        
    );  
}

export default ReviewForm;