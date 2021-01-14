import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

export default function Limiter(props) {
    // Outside component
    const MAX_LENGTH = 250;

    const { text } = props.text;
    
    function Detalhes(e) {
        return (window.location.href = '#detalhes/'+e)
    }
    
    return (
        <div>
        {props.text.length > MAX_LENGTH ?
            (
            <div>
                {`${props.text.substring(0, MAX_LENGTH)}...`}<a style={{cursor:"pointer"}} onClick={() => Detalhes(props.id)}>Ler mais...</a>
            </div>
            ) :
            <p>{props.text}</p>
        }
        </div>
    );
}