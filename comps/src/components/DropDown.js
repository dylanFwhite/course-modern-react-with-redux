import { useState, useEffect, useRef } from "react"
import { GoChevronDown } from "react-icons/go"
import Panel from './Panel'

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {
            // Add check to see if the reference exists
            if (!divEl.current) {
                return
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        };

        document.addEventListener('click', handler, true);

        // Clean up function to remove event listener when componenet is
        // removed from the screen
        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        // CLOSE DROPDOWN
        setIsOpen(false)
        // Update selection
        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return(
            <div 
            className="hover:bg-sky-100 rounded cursor-pointer p-1" 
            onClick={() => handleOptionClick(option)} 
            key={option.value}>
                {option.label}
            </div>
        )
    })

    return (
        <div ref={divEl} className="w-48 relative">
            {/* We can use the ? shorthand to test for truthy values */}
            <Panel 
                className="flex justify-between items-center" 
                onClick={handleClick}
            >
                {value?.label || "Select..."}
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
        </div>
    )
}

export default Dropdown