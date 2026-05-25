import { useState } from "react";

function ReviewForm({ setreview, id_viaje, id_usuario, id_autor }) {
    const [comentario, setComentario] = useState("");
    const [puntuacion, setPuntuacion] = useState(5);
    const [enviando, setEnviando] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEnviando(true);
        setError("");
        
        //

        const reviewData = {
            id_viaje: id_viaje,
            id_usuario: id_usuario,
            puntuacion: puntuacion,
            comentario: comentario,
            id_autor: id_autor
        };

        try {
            const response = await fetch("http://localhost:3000/reviews/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ reviewData: reviewData })
            });

            const data = await response.json();

            if (response.ok) {
                // Éxito: cerrar el modal
                setreview(false);
                // Opcional: recargar las reseñas o mostrar mensaje
                alert("¡Reseña enviada con éxito!");
            } else {
                setError(data.message || "Error al enviar la reseña");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Error de conexión con el servidor");
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div className="modal-overlay">
            <div className="w-2/3 max-w-300 rounded-lg p-10 bg-PageLight-950 text-PageDark-950">
                <form onSubmit={handleSubmit} method="post" className="login-form w-full">
                    <h3 className="text-lg font-semibold mb-4">Deja tu reseña</h3>
                    
                    {/* Selector de puntuación (1-5 estrellas) */}
                    <div className="mb-4">
                        <label className="block mb-2">Puntuación:</label>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    key={num}
                                    type="button"
                                    onClick={() => setPuntuacion(num)}
                                    className={`px-3 py-1 rounded ${
                                        puntuacion === num 
                                            ? "bg-yellow-500 text-white" 
                                            : "bg-gray-300"
                                    }`}
                                >
                                    {num} ★
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Campo de comentario */}
                    <textarea
                        className="input-form w-full mb-4"
                        placeholder="Escribe tu reseña aquí..."
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        rows="4"
                    ></textarea>

                    {/* Mensaje de error */}
                    {error && <p className="text-red-500 mb-4">{error}</p>}

                    {/* Botones */}
                    <div className="flex justify-end gap-3">
                        <button 
                            type="button" 
                            onClick={() => setreview(false)}
                            className="btnCancel-form"
                        >
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            className="btnSubmit-form"
                            disabled={enviando}
                        >
                            {enviando ? "Enviando..." : "Enviar Reseña"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReviewForm;