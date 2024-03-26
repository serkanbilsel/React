import { useEffect } from "react";

const App = () => {
  console.log("Uygulama render oldu");

  useEffect(function () {
    console.log("Arayüz yüklendi");
    return () => {
      console.log("App arayüz kaldırıldı");
    };
  }, []);
  console.log("Divler yüklendi");

  return <div>App</div>;
};

export default App;
