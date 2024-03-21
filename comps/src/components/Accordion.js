import { useState } from "react"
import { GoChevronDown, GoChevronLeft} from 'react-icons/go'

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }
    
    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex

        const icon = <span className="text-xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
        </span>

        return (
            // Always need to provide keys when building lists
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {/* `&&` returns the first false value or the last truthy value
                Utilised for conditional rendering */}
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )
    })
    
    return (
        <div className="border-x border-t rounded">{renderedItems}</div>
    )
}

export default Accordion