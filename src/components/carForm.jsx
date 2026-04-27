import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CarForm({user, onexit}) {

    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [year, setYear] = useState("");
    const [capacity, setCapacity] = useState("");
    const [color, setColor] = useState("");
    const [plates, setPlates] = useState("");

    const userId = user?._id;

    // console.log("usuario en CarForm:", user._id);

    const printFormData = () => {

        console.log("Marca:", marca);
        console.log("Modelo:", modelo);
        console.log("Año:", year);
        console.log("Capacidad:", capacity);
        console.log("Color:", color);
        console.log("Placas:", plates);
        console.log("ID Conductor:", userId);
        console.log("Token en CarForm:", localStorage.getItem("token"));
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        let response;
        let data;
    
        try {
            response = await fetch("http://localhost:3000/createCar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${localStorage.getItem("token")}`
                },
                body: JSON.stringify({
                    marca: marca,
                    modelo: modelo,
                    año: year,
                    capacidad: capacity,
                    color: color,
                    placa: plates,
                    id_conductor: user._id
                })
            });

            data = await response.json();

            if (!response.ok) {
                console.error("Error en la respuesta del backend:", data);
                alert("Error al agregar el vehículo: " + (data.message || "Respuesta no OK"));
                return;
            }

            console.log("Vehículo agregado exitosamente:", data);
            alert("Vehículo agregado exitosamente");
            onexit();

            
        } catch (error) {
            console.error("Error al agregar el vehículo:", error);
            alert("Error al agregar el vehículo");
        }


    }


    return (
        <div className="modal-overlay">
            <div className="login-form bg-PageLight-950 text-PageDark-950 w-auto h-auto p-10 rounded-lg relative">
                <form method="post" onSubmit={handleSubmit}  className=" relative login-form w-100 rounded-lg p-10 bg-PageLight-950 text-PageDark-950">
                    <h3 className="text-lg font-semibold">Agregar Vehículo</h3>
                    
                        <input className="input-form " placeholder="Marca: " type="text" name="brand" id="brand" 
                            onChange={(e) => setMarca(e.target.value)}/>
                        <input className="input-form " placeholder="Modelo: " type="text" name="model" id="model" 
                            onChange={(e) => setModelo(e.target.value)}/>
                    
                        <div className='flex w-auto relative gap-2'>
                            <label className='w-auto text-right' htmlFor="year">Año: </label>
                            <input className="input-form " placeholder="Año: " type="number" name="year" id="year" 
                                onChange={(e) => setYear(e.target.value)}/>
                        </div>
                        <input className="input-form " placeholder="Capacidad: " type="number" name="capacity" id="capacity" 
                            onChange={(e) => setCapacity(e.target.value)}/>
                        <input className="input-form " placeholder="Color: " type="text" name="color" id="color" 
                            onChange={(e) => setColor(e.target.value)}/>
                        <input className="input-form " placeholder="Placas: " type="text" name="plates" id="plates" 
                            onChange={(e) => setPlates(e.target.value)}/>
                        
                    <button type="submit" className="btnSubmit-form self-center" >Agregar Vehículo</button>
                    <button className="exit-btn top-8 right-8" onClick={onexit}>X</button>
                </form>
            </div>
            
        </div>

    );

};

export default CarForm;