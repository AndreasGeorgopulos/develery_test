import React from "react";

const Card = ({title, children, className}) =>  {
    const cardClass = `card contact-form-card ${className}`;

    return (
        <div className={cardClass}>
            <div className="card-header">
                <h1 className="card-title">{title}</h1>
            </div>
            <div className="card-body p-5">
                {children}
            </div>
        </div>
    );
}

Card.defaultProps = {
    title: 'Kapcsolatfelvétel',
};

export default Card;