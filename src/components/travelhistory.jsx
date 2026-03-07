import "../assets/containers.css"
import "../assets/loginPage.css"

function TravelHistory() {


    return(
        <div className="border border-PageLight-300 rounded-lg w-200">
            <h1>Historial de Viajes</h1>
            <ul ClassName="w-250 bg-PageLight-200">
                <li className="">Viaje 1: Ciudad A a Ciudad B - 01/01/2024</li>
                <li className="">Viaje 2: Ciudad C a Ciudad D - 15/02/2024</li>
            </ul>
        </div>

    );
};

export default TravelHistory;
