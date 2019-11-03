'use strict';

import 'bootstrap';
import '../css/style.scss';

(function() {
    const signupBtn = document.querySelector('#signup');
    const loginBtn = document.querySelector('#login');
    const tabSignup = document.querySelector('.tab-signup');
    const tabLogin = document.querySelector('.tab-login');
    const fname = document.querySelector('#fname');
    const lname = document.querySelector('#lname');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    //helper function to toggle add or remove active class
    function toggleClass(elementsArr, addRemove) {
        if (addRemove.toLowerCase() === 'add') return elementsArr.forEach(el => el.classList.add('active'));

        elementsArr.forEach(el => el.classList.remove('active'));
    }

    //helper function to check if elem has no input value
    const checkError = (elem) => { if (elem.value.length === 0 || elem === '') elem.classList.add('error') };

    //toggle tabs/btns between signup or register
    signupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (signupBtn.classList.contains('active')) return;

        toggleClass([signupBtn, tabSignup], 'add');
        toggleClass([loginBtn, tabLogin], 'remove');
    });

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (loginBtn.classList.contains('active')) return;

        toggleClass([loginBtn, tabLogin], 'add');
        toggleClass([signupBtn, tabSignup], 'remove');
    });

    //validation on submit
    submitSignup.addEventListener('click', function(e) {
        [fname, lname, email, password].forEach(el => checkError(el));
    });

    submitLogin.addEventListener('click', function(e) {
        [email2, password2].forEach(el => checkError(el));
    });

    //check on blur event and remove error if elem has value || custom label as placeholder
    [fname, lname, email, password, email2, password2].forEach(el => {
        el.addEventListener('blur', function(e) {
            if (e.target) {
                if (e.target.value.length === 0 || e.target === '') {
                    e.target.nextSibling.nextSibling.style.display = "block";
                    return;
                }
                e.target.classList.remove('error');
            }

            if (e.target.value.length > 0) {
                e.target.nextSibling.nextSibling.style.display = "none";
            }
        }, true)
    })


})();