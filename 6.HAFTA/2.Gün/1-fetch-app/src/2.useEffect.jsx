import { useEffect } from "react";

const App = (prop) => {
  function appDestroyEdilince() {
    console.log("App arayüz kaldırıldı");
  }

  // Aynı zamanda her prop değiştğinde çalışır
  function renderSonrasi() {
    console.log("Arayüz yüklendi");
    // App componenti destroy edilirse
    return appDestroyEdilince;
  }

  useEffect(renderSonrasi, [prop]);

  return <div>App</div>;
};

export default App;
