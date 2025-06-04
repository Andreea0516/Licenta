const snippets = [
    {
      id: 1,
      lines: [
        '<!DOCTYPE html>',
        '<html>',
        '<head>',
        '<title>Sample Page</title>',
        '</head>',
        '<body>',
        '<h1>Hello World</h1>',
        '<p>This is a simple HTML snippet.</p>',
        '</body>',
        '</html>'
      ],
    },
    {
        id: 2,
        lines: [
            '<form action="/submit" method="post">',
            '  <label for="name">Name:</label>',
            '  <input type="text" id="name" name="name" required>',
            '  <label for="email">Email:</label>',
            '  <input type="email" id="email" name="email" required>',
            '  <label for="message">Message:</label>',
            '  <textarea id="message" name="message"></textarea>',
            '  <button type="submit">Send</button>',
            '</form>'
        ],
      },
      {
        id: 3,
        lines: [
            '<nav>',
            '  <ul class="nav">',
            '    <li><a href="/">Home</a></li>',
            '    <li><a href="/about">About</a></li>',
            '    <li><a href="/contact">Contact</a></li>',
            '  </ul>',
            '</nav>'
        ],
      },
  ];
  
  export default snippets;
  