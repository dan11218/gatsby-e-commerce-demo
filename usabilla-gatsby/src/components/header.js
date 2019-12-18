import React from "react";
import header from './header.module.scss';


export default props => <h1 className={header[`${props.class}`]} >{props.headerText}</h1>