const initState = [
  {
    id: 1,
    name: "Iphone 1",
    price: 110,
    status: true,
  },
  {
    id: 2,
    name: "Iphone 2",
    price: 120,
    status: true,
  },
  {
    id: 3,
    name: "Iphone 3",
    price: 130,
    status: true,
  },
];

const productReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productReducer;
