import React from "react"
import buttonStyles from "./buttons.scss"
import {Link} from "gatsby"


export default props => {

    const color = props.color;
    const fill = props.fill;
    const to = props.to;

    const colorclassMap = {
        'red': `buttonStyles.button--red`,
        'blue': 'button--blue'
    }

    const fillclassMap = {
        'yes': 'button--outline',
        'no': ' '
    }

    const classes = `button ${colorclassMap[color]} ${fillclassMap[fill]}`

    return (
        <span className={classes}>{props.text}</span>
    )
}