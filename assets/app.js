/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';

const loadComponent = function (elementId, component) {
    const element = document.getElementById(elementId);
    if (!element) {
        return;
    }

    ReactDOM.render(component, element);
};

import ContactForm from "./js/components/ContactForm/ContactForm";
loadComponent('contact-form', <ContactForm />);