import React, { useState, useEffect } from 'react';
import './ContactForm.css';
import Card from "./Card";
import {Input, TextArea, SubmitButton} from "./FormElements";
import {statusOptions, statusMessages, validationMessages} from "./Settings"

export default function ContactForm() {
    const [validated, setValidated] = useState(false);
    const [status, setStatus] = useState(statusOptions.FORM);
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(true);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(true);
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(true);

    const isValidated = () => {
        return nameError === false && emailError === false && messageError === false;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus(statusOptions.SUBMITTING);

            const response = await fetch('/api/contact-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) {
                throw new Error(`HTTP hiba! Állapotkód: ${response.status}`);
            }

            setStatus(statusOptions.COMPLETED);
        } catch (error) {
            console.error('Hiba a kérés során:', error.message);
            setStatus(statusOptions.ERROR);
        }
    };

    const handleChangeName = (event) => {
        const value = event.target.value;
        if (value === '') {
            setNameError(validationMessages.name.required)
        } else if (value.length < 3 || value.length > 100) {
            setNameError(validationMessages.name.length)
        } else {
            setNameError(false);
        }
        setName(value);
    };

    const handleChangeEmail = (event) => {
        const value = event.target.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value === '' || !emailRegex.test(value)) {
            setEmailError(validationMessages.email.required)
        } else {
            setEmailError(false);
        }
        setEmail(value);
    };

    const handleChangeMessage = (event) => {
        const value = event.target.value;
        if (value === '') {
            setMessageError(validationMessages.message.required)
        } else if (value.length > 500) {
            setMessageError(validationMessages.message.length)
        } else {
            setMessageError(false);
        }
        setMessage(value);
    };

    useEffect(() => {
        setValidated(isValidated);
    }, [nameError, emailError, messageError]);

    return (
        <Card>
            {status === statusOptions.COMPLETED && (
                <div className="pb-5 text-center text-success">{statusMessages.COMPLETED}</div>
            )}
            {status === statusOptions.ERROR && (
                <div className="pb-5 text-center text-danger">{statusMessages.ERROR}</div>
            )}
            {(status === statusOptions.FORM || status === statusOptions.SUBMITTING) && (
                <form onSubmit={handleSubmit}>
                    <Input
                        name="name"
                        type="text"
                        labelTitle="Teljes név"
                        value={name}
                        error={nameError}
                        handleChange={handleChangeName}
                        disabled={status === statusOptions.SUBMITTING}
                    />

                    <Input
                        name="email"
                        type="email"
                        labelTitle="E-mail cím"
                        value={email}
                        error={emailError}
                        handleChange={handleChangeEmail}
                        disabled={status === statusOptions.SUBMITTING}
                    />

                    <TextArea
                        name="message"
                        labelTitle="Üzenet"
                        value={message}
                        error={messageError}
                        handleChange={handleChangeMessage}
                        disabled={status === statusOptions.SUBMITTING}
                    />

                    <SubmitButton
                        title="Üzenet küldése"
                        disabled={!validated || status === statusOptions.SUBMITTING}
                        submitting={status === statusOptions.SUBMITTING}
                    />
                </form>
            )}
        </Card>
    );
};