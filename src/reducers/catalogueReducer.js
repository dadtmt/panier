const initialState = [
  {
    id: 1,
    name: "Zidane",
    price: 45,
    imgSrc:
      "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
  },
  {
    id: 2,
    name: "Leboeuf",
    price: 45,
    imgSrc:
      "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
  },
  {
    id: 3,
    name: "Pires",
    price: 45,
    imgSrc:
      "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
  },
  {
    id: 4,
    name: "Karembeu",
    price: 45,
    imgSrc:
      "https://www.foot01.com/img/images/650x600/2018/Jan/20/benzema-revient-zidane-recupere-l-arme-fatale-du-real-zidane-16,207169.jpg"
  }
];

// initialState is the default value of prevState
const catalogueReducer = (prevState = initialState, action) => prevState;

export default catalogueReducer;
