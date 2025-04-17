const Controller = ({count, setCount}) => {
    return (
        <div className="buttons">
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(count - 10)}>-10</button>
            <button onClick={() => setCount(count - 100)}>-100</button>
            <button onClick={() => setCount(count + 100)}>+100</button>
            <button onClick={() => setCount(count + 10)}>+10</button>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default Controller