import React from "react";

import {hydrate} from "react-dom";

import App from '../pages/index'

hydrate(<App/>, document.getElementById("root"));