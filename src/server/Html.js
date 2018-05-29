const Html = (body) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>A hall</title>
    </head>
    <body>
      <div id="app">${body}</div>
      <script src="/bundle.js" defer></script>
    </body>
  </html>
`;

export default Html;
