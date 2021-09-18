export const SortLtoH = ({children,setList}) => {
    
    const handleClick = () => {
        fetch("http://localhost:3001/details").then((data) => data.json()).then((data) => {
            let temp = data.sort((a, b) => {
                return a.price - b.price;
            });
            setList(temp);
        })
        
    }
    return <button onClick={handleClick}>{children}</button>

}