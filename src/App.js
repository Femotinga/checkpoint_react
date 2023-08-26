
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Description from './components/Description';
import Price from './components/Price';
import Image from './components/Image';
import Name from './components/Name';
import { Product } from './Database/Product';
import Cards from './components/Cards';





function App() {
  return (
    <>
    <Description />
    <Image />
    <Price />
    <Name />

    {
      Product.map(sp => <  Cards productData = {sp} key={sp.productName} />)
    }


    </>
  );
}

export default App;
