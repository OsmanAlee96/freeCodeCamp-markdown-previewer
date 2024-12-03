import React from "react";
import { useState } from "react";
import { marked } from "marked";
import './app.css';

function App() {
  const [text, setText] = useState(`
# Welcome to My Markdown Previewer!

## Subheading: A Closer Look at Markdown

[Click here to learn Markdown](https://www.markdownguide.org)

Inline code: \`<div>Hello, world!</div>\`

\`\`\`
// Code block example
function greet() {
  console.log("Hello, world!");
}
\`\`\`

- List Item 1
- List Item 2
- List Item 3

> Blockquote: "Markdown is awesome!"

**Bold Text Example**

![Markdown Logo](https://markdown-here.com/img/icon256.png)
  `);

  marked.setOptions({
    breaks:true
  });

  return (
    <div className="App">
      <div className="row">
        <div className="column">
          <textarea
            id="editor"
            onChange={(event) => {
              setText(event.target.value);
            }}
            value={text}
          ></textarea>
        </div>
        <div className="column">
          <div
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(text),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
