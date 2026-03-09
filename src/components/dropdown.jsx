import { useState } from 'react';

export function Dropdown({ options, dropdownName }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button 
                className="nav-header-btn relative" 
                onClick={() => setIsOpen(!isOpen)}
                onMouseLeave={() => setIsOpen(false)}
                >
                { dropdownName || 'Select an option' }
                {isOpen && (
                    <ul className="dropdown-menu">
                        {options.map((option) => (
                            <li 
                                className="dropdown-menu-item"
                                key={option.value} 
                                onClick={() => {
                                option.onClick();
                                setIsOpen(false);
                            }}>
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </button>

            
        </>
    );
}

export default Dropdown;