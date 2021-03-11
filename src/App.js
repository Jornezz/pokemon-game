import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import PokemonBg from "./images/bg1.jpg";

//!-- Кстате у меня норм организация кода?
//!-- Ответ:

const App = () => {
  return (
    <>
      <Header
        title="Super puper good pokemon game"
        descr="lorem ipsum dolot koroche riba text..."
      />
      <Layout
        title="Happy text number 1"
        descr="Word around the office is that you've got a ..."
        urlBg={PokemonBg}
      />
      <Layout
        title="Happy text number 2"
        descr="Word around the office is that you've got a ..."
        colorBg="#eee"
      />
      <Layout
        title="Happy text number 3"
        descr="Word around the office is that you've got a ..."
        urlBg={PokemonBg}
      />
      <Layout />
      <Footer />
    </>
  );
};

export default App;
