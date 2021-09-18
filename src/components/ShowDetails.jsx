export function ShowDetails({ list }) {
  return (
    <div>
      {list.map((el) => {
        return (
          <div key={el.id}>
            <div>
              <img src={el.image} alt="" />
            </div>
            <div>
              <div>{el.title}</div>
              <div>Price for one: {el.price}</div>
                    <div>Rating:{el.rating}</div>
                    <div>Category:{el.category}</div>
              <div>
                PaymentOptions:{el.cash ? (el.upi ? "Cash/":"Cash" ):( <></> )}
                {el.card ?  ( el.cash ? "/Card" : "Card"):(<></>)}
                {el.upi ? (el.card ? "/UPI":"UPI" ): (<></>)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
