import { AddDetails } from "./AddDetails";
import { ShowDetails } from "./ShowDetails";
import "../App.css";

import React, { useState } from "react";
import styled from "styled-components";

import { RatingFilter } from "./RatingFilter";
import { PaymentFilter } from "./PaymentFilter";
import { ShowAll } from "./ShowAll";
import { SortLtoH } from "./SortLtoH";
import { SortHtoL } from "./SortHtoL";

export function RestaurantMain() {
  const [list, setList] = useState([]);

  const DataPage = styled.div`
    display: flex;
  `;
  const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
  `;

  return (
    <div className="mainContainer">
      <div className="inputContainer">
        <AddDetails list={list} setList={setList} />
      </div>
      <DataPage>
        <div className="dataContainer">
          <ShowDetails list={list} />
        </div>

        <div className="sideContainer">
          <ButtonDiv>
            <h3>Filter by rating</h3>
            <RatingFilter setList={setList} value="4">
              4 Star
            </RatingFilter>
            <RatingFilter setList={setList} value="3">
              3 Star
            </RatingFilter>
            <RatingFilter setList={setList} value="2">
              2 Star
            </RatingFilter>
            <RatingFilter setList={setList} value="1">
              1 Star
            </RatingFilter>
          </ButtonDiv>
          <ButtonDiv>
            <h3>Filter by payment method</h3>
            <PaymentFilter
              setList={setList}
              valueCash={true}
              valueCard={false}
              valueUpi={false}
            >
              Cash Only
            </PaymentFilter>
            <PaymentFilter
              setList={setList}
              valueCash={false}
              valueCard={true}
              valueUpi={false}
            >
              Card Only
            </PaymentFilter>
            <PaymentFilter
              setList={setList}
              valueCash={false}
              valueCard={false}
              valueUpi={true}
            >
              Upi Only
            </PaymentFilter>
            <ShowAll setList={setList}>Show All</ShowAll>
          </ButtonDiv>
          <ButtonDiv>
            <h3>Sort by Price</h3>
            <SortHtoL setList={setList}>High to Low</SortHtoL>
            <SortLtoH setList={setList}>Low to High</SortLtoH>
          </ButtonDiv>
        </div>
      </DataPage>
    </div>
  );
}
