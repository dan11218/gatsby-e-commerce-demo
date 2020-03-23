import React from "react"
import buttonStyles from "./button.module.scss"


export default props => {

    const color = props.color;
    const fill = props.fill;

    const colorclassMap = {
        'red': `buttonStyles.button--red`,
        'blue': 'button--blue'
    }

    const fillclassMap = {
        'yes': buttonStyles.outline,
        'no': ' '
    }

    const classes = `button ${colorclassMap[color]} ${fillclassMap[fill]}`

    return (
        <span className={classes}>{props.text}</span>
    )
}