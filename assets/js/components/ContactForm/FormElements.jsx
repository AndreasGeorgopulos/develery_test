import React from "react";

export function Input({ name, type, labelTitle, value, handleChange, error, disabled, className }) {
    const elementId = `contact-form-${name}`;
    const elementClass = `form-control ${className}`;

    return (
        <div className="form-floating mb-5">
            <input type={type} id={elementId} name="{name}" className={elementClass} value={value} onChange={handleChange} disabled={disabled} />
            <label htmlFor={elementId}>{labelTitle}</label>
            <sub className="text-danger error_text">{error}</sub>
        </div>
    );
}

export function TextArea({ name, labelTitle, value, error, handleChange, disabled, className }) {
    const elementId = `contact-form-${name}`;
    const elementClass = `form-control ${className}`;

    return (
        <div className="form-floating mb-5">
            <textarea id={elementId} name={name} className={elementClass} onChange={handleChange} disabled={disabled}>{value}</textarea>
            <label htmlFor={elementId}>{labelTitle}</label>
            <sub className="text-danger error_text">{error}</sub>
        </div>
    );
}

export function SubmitButton({ title, disabled, submitting, className }) {
    const buttonClass = `btn ${className} ${disabled ? 'btn-secondary disabled' : 'btn-success'} ${submitting ? 'submitting' : ''}`;

    return (
        <div className="text-center mt-3">
            <button type="submit" className={buttonClass}>{title}</button>
        </div>
    );
}