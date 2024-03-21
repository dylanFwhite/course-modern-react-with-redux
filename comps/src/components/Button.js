import className from 'classnames'
import { twMerge } from 'tailwind-merge'

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    // Used to capture other props to be passed to the raw button tag e.g.
    // event handlers, input types, etc.
    ...rest
}) {
    const classes = twMerge(
        // Pass `rest.className` to capture bespoke class names
        className(rest.className, 'flex items-center px-3 py-1.5 border', {
            'border-blue-500 bg-blue-400 text-white': primary,
            'border-gray-500 bg-gray-400 text-white': secondary,
            'border-green-500 bg-green-400 text-white': success,
            'border-yellow-400 bg-yellow-300 text-white': warning,
            'border-red-500 bg-red-400 text-white': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-blue-500': outline && primary,
            'text-gray-500': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-500': outline && warning,
            'text-red-500': outline && danger,
        })
    )

    return <button {...rest} className={classes}>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)

        if (count > 1) {
            return new Error('only one of primary, secondary, success, warning, danger can be true')
        }
    }
}

export default Button