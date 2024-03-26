import { useState } from "react";
import AddPage from "./pages/AddPage";
import DeletePage from "./pages/DeletePage";
import HomePage from "./pages/HomePage";
import UpdatePage from "./pages/UpdatePage";

export const API_URL = "http://localhost:3000";

const App = () => {
  const [userId, setUserId] = useState(null);
  const [route, setRoute] = useState("/");

  const handleRoute = (e) => {
    e.preventDefault();
    const url = new URL(e.target.href);
    const pathName = url.pathname;
    setRoute(pathName);
  };

  const redirectHomepage = () => {
    setRoute("/");
  };

  const redirectToDelete = (id) => {
    setUserId(id);
    setRoute("/delete");
  };
  const redirectToEdit = (id) => {
    setUserId(id);
    setRoute("/update");
  };

  return (
    <>
      <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
        <a href="/" onClick={handleRoute}>
          Anasayfa
        </a>
        <a href="/add" onClick={handleRoute}>
          Ekle
        </a>
        <a href="/update" onClick={handleRoute}>
          Güncelle
        </a>
        <a href="/delete" onClick={handleRoute}>
          Sil
        </a>
      </div>

      {route === "/" && (
        <HomePage
          onDelete={(id) => redirectToDelete(id)}
          onEdit={(id) => {
            redirectToEdit(id);
          }}
        />
      )}
      {route === "/add" && <AddPage onAdd={redirectHomepage} />}
      {route === "/delete" && (
        <DeletePage userId={userId} onDelete={redirectHomepage} />
      )}
      {route === "/update" && (
        <UpdatePage userId={userId} onSave={redirectHomepage} />
      )}
    </>
  );
};

export default App;
