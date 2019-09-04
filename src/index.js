'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'es6-promise';

import popup from './modules/popup';
import accordeon from './modules/accordeon';
import moreCart from './modules/moreCart';
import sendForm from './modules/sendForm';
import calc from './modules/calc';

// popup header/footer
popup();

// accordeon
accordeon();

// more
moreCart();

// send form
sendForm();

//Calc
calc();