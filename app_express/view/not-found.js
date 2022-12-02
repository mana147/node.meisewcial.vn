import { html } from 'html-express-js';

export const view = (data, state) => html`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      ${state.includes.head}
      <title>404</title>
    </head>
    <body>
      404 - Not found!
    </body>
  </html>
`;