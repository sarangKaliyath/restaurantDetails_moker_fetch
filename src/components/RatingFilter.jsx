export const RatingFilter = ({ value, setList, children }) => {
  const handleClick = () => {
    fetch("http://localhost:3001/details")
      .then((data) => data.json())
      .then((data) => {
        setList(data.filter((el) => el.rating === value));
      });
  };

  return <button onClick={handleClick}>{children}</button>;
};
