# 使い方

1. iconを探す
2. _app.jsに登録する
3. pageで使用する

---

### 1. iconを探す

リンク先から使いたいiconを探す。
なお、グレーアウトしてあるのは有料。

[fontAwesome](https://fontawesome.com/icons?d=gallery&p=2)

---

### 2. _app.jsに登録する

```js

import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
    faHeadset,
    faEdit,
    faCode,
    faBriefcase,
    faUser,
    faBlog,
    faEnvelope,
    faWindowMaximize,
    faWifi,
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(
    faHeadset,
    faEdit,
    faCode,
    faBriefcase,
    faUser,
    faBlog,
    faEnvelope,
    faWindowMaximize,
    faWifi,
    faYoutube,
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

```

---

### 3. pagesで使用する

```js

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <h1>lean fontAwesome</h1>
      <FontAwesomeIcon icon="window-maximize" />
      <FontAwesomeIcon icon="wifi" size="2x"/>
      <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" fixedWidth />
      <FontAwesomeIcon className="" icon="headset" size="2x" fixedWidth />

    </>
  )
}


```

