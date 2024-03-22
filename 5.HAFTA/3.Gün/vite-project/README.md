# Nelerden bahsettik?

## Kurulum

1. pnpm create vite

- Projenin adı girilir (vite-project)
- Framework seçilir (React)
- Variant seçilir (JavaScript + SWC)
- Tamamlanınca 2. adıma geçilir

2. cd vite-project

- Proje klasörüne girilir

3. pnpm install

- Proje bağımlılıkları yüklenir

4. pnpm dev

## Counter Örneği

- state hem veri tutar hem de değişiklikleri izler
- state'te olan bir değişiklik, arayüz güncellemesini tetikler
- state kullanmasaydık, normal bir değişkenin değişmesi arayüzü güncellemezdi
- useState(1) denildiğinde bu çağrım bir array geri döndürür

```js
const state = useState(1);
const deger = state[0];
const setDeger = state[1];
// Daha basit yazmak için
// Array destructuring denir
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
const [deger, setDeger] = useState(1);
```

- onClick metodunda handleClick fonksiyonu çağrılır
- onclick yerine onClick olmasının sebebi sentetik event oluşturmak. React'te eventler camelCase olarak yazılır. Tarayıcılar arasındaki uyuşmazlıkları gidermek için React, Sentetik event kullanımını tercih eder.

## CSS-in-JS

- CSS kodlarını JS dosyası içerisinde yazmak
- Bir JSON objesi gibi düşünülebilir
- Bunun yerine CSS dosyaların da kullanılabilir

```jsx
import "./App.css";

<button className="myButtonClass">Hello</button>;
```
