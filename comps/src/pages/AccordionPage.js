import Accordion from "../components/Accordion"

function AccodionPage() {
    const items = [
        {
            id: 'asffve',
            label: 'Can i use react pls?',
            content: 'Of course you can, Of course you can, Of course you can, Of course you can'
        },
        {
            id: 'kjhgfxv',
            label: 'Can i use tailwind pls?',
            content: 'Of course you can, Of course you can, Of course you can, Of course you can'
        },
        {   
            id: 'oaiicvhijpok',
            label: 'Can i use Node pls?',
            content: 'Of course you can, Of course you can, Of course you can, Of course you can'
        }
    ]

    return <Accordion items={items} />
}

export default AccodionPage