export const ShowAll  = ({setList,children}) => {
    const handleClick = () => {
        fetch("http://localhost:3001/details")
          .then((data) => data.json())
          .then((data) => setList(data));
    }
    return <button onClick={handleClick}>{children}</button>
};