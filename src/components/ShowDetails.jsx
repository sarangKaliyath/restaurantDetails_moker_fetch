import styled from "styled-components";

export function ShowDetails({ list }) {

    const Products = styled.div`

        display:grid;
        grid-template-columns: repeat(3,30%);
        grid-column-gap:1%;
        grid-row-gap: 5%;
        justify-content:space-evenly;
    `;
    const Image = styled.img`
        width: 100px;
        height: 100%;
    `
    const Card = styled.div`
      border: 1px solid black;
      display:flex;
    `;

  return (
    <Products>
      {list.map((el) => {
        return (
          <Card key={el.id}>
            <div>
              <Image src={el.image} alt="" />
            </div>
            <div>
              <div>{el.title}</div>
              <div>Price for one: {el.price}</div>
              <div>Rating:{el.rating}</div>
              <div>Category:{el.category}</div>
              <div>
                PaymentOptions:{el.cash ? el.upi ? "Cash/" : "Cash" : <></>}
                {el.card ? el.cash ? "/Card" : "Card" : <></>}
                {el.upi ? el.card ? "/UPI" : "UPI" : <></>}
              </div>
            </div>
          </Card>
        );
      })}
    </Products>
  );
}
