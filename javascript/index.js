import {render} from 'react-dom';
import React from 'react';
import Application from './components/Application'

require("../style.css");

import Content from './content.js'

render(<Application />, document.getElementById('react-container'));