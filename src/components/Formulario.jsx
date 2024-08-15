import React, { useState } from "react";
import Card from "./Card";
import "./Formulario.css";

const Formulario = () => {
const [inputValue, setInputValue] = useState({
    nombre: "",
    raza: "",
});

//UseState
const [show, setShow] = useState(false);
const [err, setErr] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    if (
    inputValue.nombre.length >= 3 &&
    inputValue.raza.length >= 6 &&
    inputValue.nombre.indexOf(" ") !== 0
    ) {
    setShow(true);
    setErr(false);
    } else {
    setErr(true);
    setShow(false);
    }
};

return (
    <div className="main-container">
    <form className="form-container" onSubmit={handleSubmit}>
        <label>Ingresa el nombre de tu mascota:</label>
        <input
        className="data-input"
        type="text"
        onChange={(e) =>
            setInputValue({ ...inputValue, nombre: e.target.value })
        }
        />
        <label>Ingresa la raza de tu mascota:</label>
        <input
        className="data-input"
        type="text"
        onChange={(e) =>
            setInputValue({ ...inputValue, raza: e.target.value })
        }
        />
        <button type="submit">Enviar</button>
    </form>

    {show && (
        <Card>
        <div className="data">
            <h2>Hola {inputValue.name}</h2>
            <p>Sabemos que la raza de tu mascota es:</p>
            <div className="raza_mascota">{inputValue.raza}</div>
        </div>
        </Card>
    )}
    {err && <h2>Por favor chequea que la información sea correcta</h2>}
    </div>
);
};

export default Formulario;
