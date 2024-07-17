type RatingPropsType = {
    value: 0 | 1 | 2 |3 | 4 | 5
}

export function Rating(props:RatingPropsType) {
    if (props.value == 3) {
        return (
            <div>
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
    
            </div>
        )
    }
    return (
        <div>
            <Star selected={true} />
            <Star selected={false} />
            <Star selected={true} />

        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props:StarPropsType) {
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