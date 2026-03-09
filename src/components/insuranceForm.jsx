function InsuranceForm({ onexit }) {
    
    return (
        <div className="modal-overlay">
                <div className="login-form bg-PageLight-950 text-PageDark-950 w-auto h-auto p-10 rounded-lg relative">
                    <div className=" relative login-form w-100 rounded-lg p-10 bg-PageLight-950 text-PageDark-950">
                        <h3 className="text-lg font-semibold">Agregar Seguro</h3>
                        <input className="input-form " placeholder="Nombre de la aseguradora" type="text" name="insuranceCompany" id="insuranceCompany" />
                        <input className="input-form " placeholder="Número de póliza" type="text" name="policyNumber" id="policyNumber" />
                        <div className=" text-right flex w-full gap-2 justify-center items-center">
                            <label htmlFor="startDate">Inicio de Poliza:</label>
                            <input className="input-form basis-30" type="date" name="startDate" id="startDate" />
                        </div>
                        <div className=" text-right flex w-full gap-2 justify-center items-center">
                            <label htmlFor="endDate">Finalización de Poliza:</label>
                            <input className="input-form basis-30" type="date" name="endDate" id="endDate" />
                        </div>
                        <button className="btnSubmit-form self-center" onClick={onexit}>Agregar Seguro</button>
                        <button className="exit-btn top-8 right-8" onClick={onexit}>X</button>
                    </div>
                </div>
        </div>
    );
};

export default InsuranceForm;