import React, { useState } from "react";
import './Form.css';

const Form = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [gender, setGender] = useState('male');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeSurname = (e) => {
        setSurname(e.target.value);
    }

    const onChangeGender = (e) => {
        setGender(e.target.value);
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input 
                className={"input"}
                type="text"
                placeholder={"Имя"}
                value={name}
                onChange={onChangeName}
            />
            <input 
                className={"input"}
                type="text"
                placeholder={"Фамилия"}
                value={surname}
                onChange={onChangeSurname}
            />
            <select className={"select"} value={gender} onChange={onChangeGender}>
                <option value={"male"}>Мужской</option>
                <option value={"female"}>Женский</option>
            </select>
        </div>
    );
};

export default Form;