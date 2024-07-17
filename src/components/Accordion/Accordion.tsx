type AccordionPropsType = {
    text: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle text={props.text } />
            </div>
        )
    } else return (
        <div>
            <AccordionTitle text={props.text } />
            <AccordionBody />
        </div>
    )
}

type AccordionTitlePropsType = {
    text: string
}

function AccordionTitle(props:AccordionTitlePropsType) {
    debugger
    return (
        <h3>{props.text}</h3>
    )
}

function AccordionBody() {
    debugger
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}