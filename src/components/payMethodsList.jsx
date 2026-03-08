import PayCard from './payCard.jsx';

function PayMethodsList({cardaction, setcardaction}) {
    
    //Información de prueba
    const cards=[{
        number: '**** **** **** 1234',
        type: 'Visa',
        expiration: '12/24',
        cvv: '123',
        titular: 'John Doe'
    },
    {
        number: '**** **** **** 5678',
        type: 'MasterCard',
        expiration: '11/23',
        cvv: '456',
        titular: 'John Doe'
    },
    {
        number: '**** **** **** 9012',
        type: 'Amex',
        expiration: '10/25',
        cvv: '789',
        titular: 'John Doe'
    }
    ];

    return (
        <div className="flex flex-col w-300 p-8 h-auto border border-PageLight-300 rounded-lg items-center relative">
            <p className='subtitle-form bg-[#262626] -top-4'>Métodos de Pago</p>
            <ul className="list-container">
                {cards.map((card, index) => (
                    <PayCard
                        card={card}
                    />
                ))}
            </ul>

            <nav className='nav-btns items-start gap-2 my-5'>
                <button className="profile-btn" onClick={() => setcardaction('add')}>Agregar Método de Pago</button>
                <button className="profile-btn" onClick={() => setcardaction('edit')}>Editar Método de Pago</button>
                <button className="profile-btn" onClick={() => setcardaction('delete')}>Eliminar Método de Pago</button>
            </nav>

        </div>
    );
}

export default PayMethodsList;