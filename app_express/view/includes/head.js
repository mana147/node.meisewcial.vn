// public/includes/head.js
import { html } from 'html-express-js';

export const view = () => html`
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"
  />

  <link rel="stylesheet" href="/css/main.css" />
  <script src="/js/test.js"></script>
`;