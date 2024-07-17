export function Rating(props:any) {
    debugger
    return (
        <div>
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={true} />

        </div>
    )
}



function Star(props:any) {
    if (props.selected == true) {
        return (
            <span>
                <b>star-</b>
            </span>
        )
    } else return (
        <span>
            star-
        </span>
    )
}