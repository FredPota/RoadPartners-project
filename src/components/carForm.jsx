function CarForm({onexit}) {

    return (
        <div className="modal-overlay">
            <div className="login-form bg-PageLight-950 text-PageDark-950 w-auto h-auto p-10 rounded-lg relative">
                <div className=" relative login-form w-100 rounded-lg p-10 bg-PageLight-950 text-PageDark-950">
                    <h3 className="text-lg font-semibold">Agregar Vehículo</h3>
                    
                        <input className="input-form " placeholder="Marca: " type="text" name="brand" id="brand" />
                        <input className="input-form " placeholder="Modelo: " type="text" name="model" id="model" />
                    
                        <div className='flex w-auto relative gap-2'>
                            <label className='w-auto text-right' htmlFor="year">Año: </label>
                            <input className="input-form " placeholder="Año: " type="number" name="year" id="year" />
                        </div>
                        <input className="input-form " placeholder="Color: " type="text" name="color" id="color" />
                        <input className="input-form " placeholder="Placas: " type="text" name="plates" id="plates" />
                        
                    <button className="btnSubmit-form self-center" onClick={onexit}>Agregar Vehículo</button>
                    <button className="exit-btn top-8 right-8" onClick={onexit}>X</button>
                </div>
            </div>
            
        </div>

    );

};

export default CarForm;