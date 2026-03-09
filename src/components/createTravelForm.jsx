function CreateTravelForm({onexit}) {

        return (
            <div className="modal-overlay">
                <div className=" relative login-form w-200 h-100 justify-around rounded-lg p-10 bg-PageLight-950 text-PageDark-950">
                    <h3 className="text-lg font-semibold">Crear Viaje</h3>
                    <div className="flex justify-around w-full">
                        <input className="input-form basis-70" placeholder="Punto de salida: " type="text" name="start-origin" id="start-origin" />
                        <input className="input-form basis-70" placeholder="Destino: " type="text" name="start-destiny" id="start-destiny" />
                    </div>
                    
                    <div className='login-group justify-around w-full'>
                        <div className='flex w-auto relative gap-2'>
                            <label className='w-auto text-right' htmlFor="start-datetime">Inicio del Viaje: </label>
                            <input className="input-form basis-50" placeholder="Fecha y hora de salida: " type="datetime-local" name="start-datetime" id="start-datetime" />
                        </div>
                        <input className="input-form basis-50" placeholder="Número de pasajeros: " type="number" name="passengers" id="passengers" />
                        <input className="input-form basis-50" placeholder="Costo del viaje: " type="number" name="cost" id="cost" />
                    </div>
                    <button onClick={() => onexit(false)} className="btnSubmit-form self-center">Publicar Viaje</button>
                    <button  className="exit-btn top-5 right-5" onClick={() => onexit(false)}>x</button>
                    
                </div>
            </div>
        );
    
};
export default CreateTravelForm;