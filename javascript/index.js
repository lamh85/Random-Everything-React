import {render} from 'react-dom';
import React from 'react';
import Application from './components/Application'

require("../style.css");

import Content from './content.js'

console.log(Content);

console.log('making changes...');

console.log('making more changes...');

render(<Application />, document.getElementById('react-container'));