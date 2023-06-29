import "./App.scss";
import Context from "./Context";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import  card1  from "./components/svg/card1.svg";
import  card2  from "./components/svg/card2.svg";
import  card3  from "./components/svg/card3.svg";
import  card4  from "./components/svg/card4.svg";
import  card5  from "./components/svg/card5.svg";

function App() {
  const ForCustomersArray = [
    {
      id: 1,
      ucons: <img src={card1} width={40} height={40} alt="" />,
      title: "Найкращі сорти кави",
      subTitle: `Ми пропонуємо найширший вибір найвищої якості зернової кави. 
        Всі наші сорти були ретельно підібрані та мають неперевершений смак та аромат. 
        Клієнти вибирають нас, оскільки ми пропонуємо найкращі
         сорти кави для задоволення їхніх смакових потреб.`,
    },
    {
      id: 2,
      ucons: <img src={card2} width={40} height={40} alt="" />,
      title: "Експертиза та знання",
      subTitle: `Наша команда складається з експертів у галузі кави, які володіють глибокими знаннями про
       процес обсмажування, сорти кави та способи приготування. 
      Ми завжди готові ділитися своїми знаннями з клієнтами та допомагати їм обрати ідеальний варіант кави.`,
    },
    {
      id: 3,
      ucons: <img src={card3} width={40} height={40} alt="" />,
      title: "Персоналізований підхід",
      subTitle: `Персоналізований підхід: Ми цінуємо наших клієнтів і
       надаємо персоналізований підхід до обслуговування. Наші фахівці завжди 
       готові вислухати побажання та вимоги клієнтів
       і запропонувати найкращий варіант кави, що відповідає їхнім потребам.`,
    },
    {
      id: 4,
      ucons: <img src={card4} width={40} height={40} alt="" />,
      title: "Якість та свіжість",
      subTitle: `У нас ви можете бути впевнені в якості та свіжості кави. 
      Ми працюємо тільки з надійними постачальниками, а всі наші зерна обсмажуються на замовлення.
       Клієнти обирають нас, оскільки вони цінують смак та аромат свіжої кави.`,
    },
    {
      id: 5,
      ucons: <img src={card5} width={40} height={40} alt="" />,
      title: "Зручність та швидка доставка",
      subTitle: `Ми розуміємо, що нашим клієнтам важливо отримати свої 
      замовлення швидко та зручно. 
      Тому ми пропонуємо швидку доставку, яка дозволяє нашим`,
    },
  ];
const AssortmentCardArray = [
  {
    id:1,
    img: '/img/boasi.png',
    title: "Caffe Boasi",
    subTitle:"Перевершення кожного ковтка: секрети смаку та задоволення від Caffe Boasi"
  },
  {
    id:2,
    img: '/img/Covim.png',
    title: "Covim",
    subTitle:"Вдохновение, окутанное ароматом: гастрономические наслаждения с Covim"
  },  
  {
    id:3,
    img: '/img/lavazza.png',
    title: "Lavazza",
    subTitle:"Зануртесь у спокусу смаку: обирайте Lavazza для справжніх шанувальників кави"
  }
]
  return (
    <Context.Provider value={{ForCustomersArray,AssortmentCardArray}}>
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
