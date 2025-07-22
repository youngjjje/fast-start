

function CounterButton({count, onClick}) {
    return (
        <>
            <button onClick={onClick}>
                Clicked {count} times
            </button>
        </>
    )
}

export default CounterButton