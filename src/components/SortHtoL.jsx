export const SortHtoL = ({children,setList}) => {
    
    const handleClick = () => {
        fetch("http://localhost:3001/details").then((data) => data.json()).then((data) => {
            let temp = data.sort((a, b) => {
                return b.price - a.price;
            });
            setList(temp);
        })
        
    }
    return <button onClick={handleClick}>{children}</button>

}