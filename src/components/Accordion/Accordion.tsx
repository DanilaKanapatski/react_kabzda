export function Accordion(props:any) {
    debugger
    return (
        <div>
            <AccordionTitle text={props.text } />
            <AccordionBody />
        </div>
    )
}

function AccordionTitle(props:any) {
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