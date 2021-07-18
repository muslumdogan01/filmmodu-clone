import { myApp } from "./app.js";
import { Header } from "./components/Header.js";
import { Content } from "./components/Content.js";

myApp(`<div class="container">
<!-- Header Alanı -->
${Header()}
<!-- Content Alanı -->
${Content()}
<!-- Content Items -->
<div id="userList">
  
</div>

<!-- Content Items -->

<!-- Footer Alanı -->
</div>
`);
