import { v4 as uuidv4 } from 'uuid';

let templateList = [
  {
    id: uuidv4(),
    textInput: "Project Title (h1)",
    combinedInput: "# Project Title",
    htmlOutput: `<h1> <a id="user-content-project-title" class="anchor" href="#project-title" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Project Title</h1> `,
    name: "Headings",
    edit: false
  },
  {
    id: uuidv4(),
    textInput: "brief website description",
    combinedInput: "brief website description",
    htmlOutput: `<p>brief website description</p> `,
    name: "Paragraphs",
    edit: false
  },
  {
    id: uuidv4(),
    altTextInput: "website image or video",
    srcInput: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    combinedInput: "![website image or video](https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80)",
    htmlOutput: `<p><img src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1169&amp;q=80" alt="website image or video" style="max-width:100%;"></p> `,
    name: "Images",
    edit: false
  },
  {
    id: uuidv4(),
    textInput: "Tech Stack (h2)",
    combinedInput: "## Tech Stack",
    htmlOutput: `<h2>
    <a id="user-content-tech-stack" class="anchor" href="#tech-stack" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Tech Stack</h2> `,
    name: "Headings",
    edit: false
  },
  {
    id: uuidv4(),
    textInput: ``,
    combinedInput:`- Languages:<br/>
&nbsp;&nbsp;- Javascript<br/>
&nbsp;&nbsp;- HTML<br/>
&nbsp;&nbsp;- CSS<br/>`,
    htmlOutput: `<ul>
    <li>Languages:
    <ul>
    <li>Javascript</li>
    <li>HTML</li>
    <li>CSS</li>
    </ul>
    </li>
    </ul> `,
    name: "Unordered Lists",
    listItems: [{
      id: uuidv4(),
      itemTextForMarkdown:"- Languages:<br/>",
      itemTextForFetch:"- Languages:",
      itemTextInput:"Languages:",
      nested:false
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"&nbsp;&nbsp;- Javascript<br/>",
      itemTextForFetch:" - Javascript",
      itemTextInput:"Javascript",
      nested:true
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"&nbsp;&nbsp;- HTML<br/>",
      itemTextForFetch:" - HTML",
      itemTextInput:"HTML",
      nested:true
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"&nbsp;&nbsp;- CSS<br/>",
      itemTextForFetch:" - CSS",
      itemTextInput:"CSS",
      nested:true
    },

  ],
    edit: false
  },
  {
    id: uuidv4(),
    textInput: ``,
    combinedInput:`- APIs:<br/>
&nbsp;&nbsp;- API 1<br/>
&nbsp;&nbsp;- API 2<br/>`,
    htmlOutput: `<ul>
    <li>APIs:
    <ul>
    <li>API 1</li>
    <li>API 2</li>
    </ul>
    </li>
    </ul> `,
    name: "Unordered Lists",
    listItems: [{
      id: uuidv4(),
      itemTextForMarkdown:"- APIs:<br/>",
      itemTextForFetch:"- APIs:",
      itemTextInput:"APIs:",
      nested:false
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"&nbsp;&nbsp;- API 1<br/>",
      itemTextForFetch:" - API 1",
      itemTextInput:"API 1",
      nested:true
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"&nbsp;&nbsp;- API 2<br/>",
      itemTextForFetch:" - API 2",
      itemTextInput:"API 2",
      nested:true
    },

  ],
    edit: false
  },
  {
    id: uuidv4(),
    textInput: ``,
    combinedInput:`- Bootstrap<br/>
- Flexbox<br/>
- AJAX<br/>`,
    htmlOutput: `<ul>
    <li>Bootstrap</li>
    <li>Flexbox</li>
    <li>AJAX</li>
    </ul> `,
    name: "Unordered Lists",
    listItems: [{
      id: uuidv4(),
      itemTextForMarkdown:"- Bootstrap<br/>",
      itemTextForFetch:"- Bootstrap",
      itemTextInput:"Bootstrap",
      nested:false
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"- Flexbox<br/>",
      itemTextForFetch:"- Flexbox",
      itemTextInput:"Flexbox",
      nested: false
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"- AJAX<br/>",
      itemTextForFetch:" - AJAX",
      itemTextInput:"AJAX",
      nested: false
    },

  ],
    edit: false
  },
  {
    id: uuidv4(),
    textInput: "Stretch Goals (h2)",
    combinedInput: "## Stretch Goals",
    htmlOutput: `<h2>
    <a id="user-content-stretch-goals" class="anchor" href="#stretch-goals" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Stretch Goals</h2> `,
    name: "Headings",
    edit: false
  },
  {
    id: uuidv4(),
    textInput: ``,
    combinedInput:`- Goal 1<br/>
- Goal 2<br/>`,
    htmlOutput: `<ul>
    <li>Goal 1</li>
    <li>Goal2</li>
    </ul> `,
    name: "Unordered Lists",
    listItems: [{
      id: uuidv4(),
      itemTextForMarkdown:"- Goal 1<br/>",
      itemTextForFetch:"- Goal 1",
      itemTextInput:"Goal 1",
      nested:false
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"- Goal2<br/>",
      itemTextForFetch:"- Goal2",
      itemTextInput:"Goal2",
      nested: false
    },
  ],
    edit: false
  },
  {
    id: uuidv4(),
    textInput: "Code Snippets (h2)",
    combinedInput: "## Code Snippets",
    htmlOutput: `<h2>
    <a id="user-content-code-snippets" class="anchor" href="#code-snippets" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Code Snippets</h2> `,
    name: "Headings",
    edit: false
  },
  {
    id: uuidv4(),
    textInput: `
// brief describe function
function sum(arrayNums){
    let count = 0
    for(let i = 0; i < arrayNums.length; i++){
      let num = arrayNums[i]
      count += num
    }
    return count   
};
//Written by Your Name
`,
    combinedInput: "<pre><code>```"+`
// brief describe function
function sum(arrayNums){
    let count = 0
    for(let i = 0; i < arrayNums.length; i++){
      let num = arrayNums[i]
      count += num
    }
    return count   
};
//Written by Your Name
`  + "```</code></pre>",
    htmlOutput: `<pre><code>// brief describe function  
function sum(arrayNums){  
  let count = 0  
for(let i = 0; i &lt; arrayNums.length; i++){  
  let num = arrayNums[i]  
  count += num  
  }  
  return count  
};  
//Written by Your Name
</code></pre> `,
    name: "Code",
    edit: false
  },
  {
    id: uuidv4(),
    textInput: `
// brief describe function
function sum(arrayNums){
    let count = 0
    for(let i = 0; i < arrayNums.length; i++){
      let num = arrayNums[i]
      count += num
    }
    return count   
};
//Written by Your Name
`,
    combinedInput: "<pre><code>```"+`  
// brief describe function  
function sum(arrayNums){  
  let count = 0  
for(let i = 0; i < arrayNums.length; i++){  
  let num = arrayNums[i]  
  count += num  
  }  
  return count  
};  
//Written by Your Name
`  + "```</code></pre>",
    htmlOutput: `<pre><code>// brief describe function  
function sum(arrayNums){  
  let count = 0  
for(let i = 0; i &lt; arrayNums.length; i++){  
  let num = arrayNums[i]  
  count += num  
  }  
  return count  
};  
//Written by Your Name
</code></pre> `,
    name: "Code",
    edit: false
  },
  {
    id: uuidv4(),
    textInput: "Screenshots (h2)",
    combinedInput: "## Screenshots",
    htmlOutput: `<h2>
    <a id="user-content-screenshots" class="anchor" href="#screenshots" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Screenshots</h2> `,
    name: "Headings",
    edit: false
  },
  {
    id: uuidv4(),
    altTextInput: "1st image",
    srcInput: "https://www.sitesuite.com.au/images/sitesuite-website-design.jpg",
    combinedInput: "![1st image](https://www.sitesuite.com.au/images/sitesuite-website-design.jpg)",
    htmlOutput: `<p><a href="https://camo.githubusercontent.com/4f3f450137f0694d55af8d0f0567de5eedff8d4f9e4834993ed4da68ad8ff8ed/68747470733a2f2f7777772e7369746573756974652e636f6d2e61752f696d616765732f7369746573756974652d776562736974652d64657369676e2e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/4f3f450137f0694d55af8d0f0567de5eedff8d4f9e4834993ed4da68ad8ff8ed/68747470733a2f2f7777772e7369746573756974652e636f6d2e61752f696d616765732f7369746573756974652d776562736974652d64657369676e2e6a7067" alt="1st image" data-canonical-src="https://www.sitesuite.com.au/images/sitesuite-website-design.jpg" style="max-width:100%;"></a></p> `,
    name: "Images",
    edit: false
  },
  {
    id: uuidv4(),
    altTextInput: "2nd image",
    srcInput: "https://images.ctfassets.net/xiodjcyu2mf8/5AAWL1ZZsY08088HEJBbMU/ab2975109563f91b1d962d30a4133afd/Theme_collage_desktop__1_-min.jpg",
    combinedInput: "![2nd image](https://images.ctfassets.net/xiodjcyu2mf8/5AAWL1ZZsY08088HEJBbMU/ab2975109563f91b1d962d30a4133afd/Theme_collage_desktop__1_-min.jpg)",
    htmlOutput: `<p><a href="https://camo.githubusercontent.com/b5e43386ecbd174640d9cbd2e2ff3b85035c298114071e06713b250e11930c68/68747470733a2f2f696d616765732e6374666173736574732e6e65742f78696f646a637975326d66382f354141574c315a5a7359303830383848454a42624d552f61623239373531303935363366393162316439363264333061343133336166642f5468656d655f636f6c6c6167655f6465736b746f705f5f315f2d6d696e2e6a7067" target="_blank" rel="nofollow"><img src="https://camo.githubusercontent.com/b5e43386ecbd174640d9cbd2e2ff3b85035c298114071e06713b250e11930c68/68747470733a2f2f696d616765732e6374666173736574732e6e65742f78696f646a637975326d66382f354141574c315a5a7359303830383848454a42624d552f61623239373531303935363366393162316439363264333061343133336166642f5468656d655f636f6c6c6167655f6465736b746f705f5f315f2d6d696e2e6a7067" alt="2nd image" data-canonical-src="https://images.ctfassets.net/xiodjcyu2mf8/5AAWL1ZZsY08088HEJBbMU/ab2975109563f91b1d962d30a4133afd/Theme_collage_desktop__1_-min.jpg" style="max-width:100%;"></a></p> `,
    name: "Images",
    edit: false
  },
  {
    id: uuidv4(),
    textInput: "Developers: (h2)",
    combinedInput: "## Developers:",
    htmlOutput: `<h2>
    <a id="user-content-developers" class="anchor" href="#developers" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Developers:</h2> `,
    name: "Headings",
    edit: false
  },
  {
    id: uuidv4(),
    textInput: ``,
    combinedInput:`- Name 1:<br/>
&nbsp;&nbsp;- Role 1<br/>
&nbsp;&nbsp;- Role 2<br/>`,
    htmlOutput: `<ul>
    <li>Name 1:
    <ul>
    <li>Role 1</li>
    <li>Role 2</li>
    </ul>
    </li>
    </ul> `,
    name: "Unordered Lists",
    listItems: [{
      id: uuidv4(),
      itemTextForMarkdown:"- Name 1:<br/>",
      itemTextForFetch:"- Name 1:",
      itemTextInput:"Name 1:",
      nested:false
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"&nbsp;&nbsp;- Role 1<br/>",
      itemTextForFetch:" - Role 1",
      itemTextInput:"Role 1",
      nested:true
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"&nbsp;&nbsp;- Role 2<br/>",
      itemTextForFetch:" - Role 2",
      itemTextInput:"Role 2",
      nested:true
    },

  ],
    edit: false
  },

  {
    id: uuidv4(),
    altTextInput: "github account 1",
    srcInput: "https://github.com/",
    combinedInput: "[github account 1](https://github.com/)",
    htmlOutput: `<p><a href="https://github.com/">github account 1</a></p> `,
    name: "Links",
    edit: false
  },
  {
    id: uuidv4(),
    textInput: ``,
    combinedInput:`- Name 2:<br/>
&nbsp;&nbsp;- Role 1<br/>
&nbsp;&nbsp;- Role 2<br/>`,
    htmlOutput: `<ul>
    <li>Name 2:
    <ul>
    <li>Role 1</li>
    <li>Role 2</li>
    </ul>
    </li>
    </ul> `,
    name: "Unordered Lists",
    listItems: [{
      id: uuidv4(),
      itemTextForMarkdown:"- Name 2:<br/>",
      itemTextForFetch:"- Name 2:",
      itemTextInput:"Name 2:",
      nested:false
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"&nbsp;&nbsp;- Role 1<br/>",
      itemTextForFetch:" - Role 1",
      itemTextInput:"Role 1",
      nested:true
    },
    {
      id: uuidv4(),
      itemTextForMarkdown:"&nbsp;&nbsp;- Role 2<br/>",
      itemTextForFetch:" - Role 2",
      itemTextInput:"Role 2",
      nested:true
    },

  ],
    edit: false
  },

  {
    id: uuidv4(),
    altTextInput: "github account 2",
    srcInput: "https://github.com/",
    combinedInput: "[github account 2](https://github.com/)",
    htmlOutput: `<p><a href="https://github.com/">github account 2</a></p> `,
    name: "Links",
    edit: false
  },
  
];

export default templateList;