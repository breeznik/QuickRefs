import * as Redux from "https://unpkg.com/redux@latest/dist/redux.browser.mjs";

//Action Creators
const newBooking = (name, amount) => {
  return {
    type: "NEW_BOOKING",
    payload: {
      name,
      amount,
    },
  };
};

const cancelBooking = (name, refund_Amount) => {
  return {
    type: "CANCEL_BOOKING",
    payload: {
      name,
      refund_Amount,
    },
  };
};

//Reducers
const reservationHistory = (oldReservationList = [], action) => {
  if (action.type === "NEW_BOOKING") {
    return [...oldReservationList, action.payload];
  } else if (action.type === "CANCEL_BOOKING") {
    return oldReservationList.filter(
      (record) => record.name !== action.payload.name
    );
  }
  return oldReservationList;
};

const cancelationHistory = (oldCancelationList = [], action) => {
  if (action.type === "CANCEL_BOOKING") {
    return [...oldCancelationList, action.payload];
  }
  return oldCancelationList;
};

const accounting = (totalMoney = 0, action) => {
  if (action.type === "NEW_BOOKING") {
    return totalMoney + action.payload.amount;
  } else if (action.type === "CANCEL_BOOKING") {
    return totalMoney - action.payload.refund_Amount;
  }
  return totalMoney;
};

//Redux Store
console.log(Redux);

const { createStore, combineReducers } = Redux;

const railwayCentralStore = combineReducers({
  accounting,
  reservationHistory,
  cancelationHistory,
});

const store = createStore(railwayCentralStore);


store.dispatch(newBooking('Nikhil' , 5000));
store.dispatch(newBooking('Nikhil' , 5000));

console.log(store.getState())

