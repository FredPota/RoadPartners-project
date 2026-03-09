function ChangePassword({setisediting}) {

    return (
        <div className="modal-overlay">
            <div className="bg-PageLight-950 w-100 h-100 p-5 rounded-4xl relative text-PageDark-950">
                <form className="login-form p-10 h-full">

                    <h2 className="title-form ">Cambio de Contraseña</h2>
                    <div className="form-group">
                        <label htmlFor="current-password">Nueva Contraseña:</label>
                        <input className="input-form" name="current-password" type="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new-password">Confirmar Contraseña:</label>
                        <input className="input-form" name="new-password" type="password" />
                    </div>

                    <button className="btnSubmit-form" type="submit">Cambiar Contraseña</button>
                    <button className="exit-btn top-8 right-8" onClick={() => setisediting('')}>X</button>

                </form>
            </div>
        </div>
    
    );
};

export default ChangePassword;