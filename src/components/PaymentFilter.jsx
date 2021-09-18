export const PaymentFilter = ({ children,setList,valueCash,valueCard,valueUpi }) => {
  const handleClick = () => {
    fetch("http://localhost:3001/details")
      .then((data) => data.json())
      .then((data) => {
        let temp = data.filter(({ cash, card, upi }) => {
          return cash ===valueCash  && card === valueCard && upi === valueUpi;
        });
        setList(temp);
      });
  };

  return <button onClick={handleClick}>{children}</button>;
};
