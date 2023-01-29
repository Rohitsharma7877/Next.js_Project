const csstopics = [
  {
    heading: `What is CSS?`,
    content: `CSS stands for Cascading Style Sheets
        CSS describes how HTML elements are to be displayed on screen, paper, or in other media
        CSS saves a lot of work. It can control the layout of multiple web pages all at once
        External stylesheets are stored in CSS files`,
    video: ``,
    code: `{
        body {
            background-color: lightblue;
          }
          
          h1 {
            color: white;
            text-align: center;
          }
          
          p {
            font-family: verdana;
            font-size: 20px;
          }
    }`,
  },
  {
    heading: `CSS Syntax`,
    content: `The selector points to the HTML element you want to style.

        The declaration block contains one or more declarations separated by semicolons.
        
        Each declaration includes a CSS property name and a value, separated by a colon.
        
        Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.`,
    video: ``,
    code: `{
        {
            body {
                background-color: lightblue;
              }
              
              h1 {
                color: white;
                text-align: center;
              }
              
              p {
                font-family: verdana;
                font-size: 20px;
              }
    }`,
  },
  {
    heading: `CSS Selectors`,
    content: `CSS selectors are used to "find" (or select) the HTML elements you want to style.

    We can divide CSS selectors into five categories:
    
    Simple selectors (select elements based on name, id, class)
    Combinator selectors (select elements based on a specific relationship between them)
    Pseudo-class selectors (select elements based on a certain state)
    Pseudo-elements selectors (select and style a part of an element)
    Attribute selectors (select elements based on an attribute or attribute value)
    This page will explain the most basic CSS selectors.`,
    video: ``,
    code: `{
        h1 {
        text-align: center;
        color: red;
      }
      
      h2 {
        text-align: center;
        color: red;
      }
      
      p {
        text-align: center;
        color: red;
      }
    }`,
  },
  {
    heading: `CSS Tables`,
    content: `To specify table borders in CSS, use the border property.

        The example below specifies a solid border for <table>, <th>, and <td> elements:`,
    video: ``,
    code: `table, th, td {
        border: 1px solid;
      }`,
  },
  {
    heading: `CSS Forms`,
    content: `The example above applies to all <input> elements. If you only want to style a specific input type, you can use attribute selectors:

        input[type=text] - will only select text fields
        input[type=password] - will only select password fields
        input[type=number] - will only select number fields
        etc..`,
    video: ``,
    code: `{
        input[type=text] {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            box-sizing: border-box;
          }
          ,
          {
            input[type=text] {
                background-color: #3CBC8D;
                color: white;
              }
          }
    }`,
  },
  {
    heading: `What are CSS Animations?`,
    content: `An animation lets an element gradually change from one style to another.

        You can change as many CSS properties you want, as many times as you want.
        
        To use CSS animation, you must first specify some keyframes for the animation.
        
        Keyframes hold what styles the element will have at certain times.`,
    video: ``,
    code: `{
        @keyframes example {
            from {background-color: red;}
            to {background-color: yellow;}
          }
          
          /* The element to apply the animation to */
          div {
            width: 100px;
            height: 100px;
            background-color: red;
            animation-name: example;
            animation-duration: 4s;
          }
    }`,
  },
  {
    heading: `What is Responsive Web Design?`,
    content: `Responsive web design makes your web page look good on all devices.

        Responsive web design uses only HTML and CSS.
        
        Responsive web design is not a program or a JavaScript.
        
        `,
    video: ``,
    code: `@media only screen and (max-width: 600px) {
        body {
          background-color: lightblue;
        }
      }`,
  },
  {
    heading: `Grid Layout`,
    content: `The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

    `,
    video: ``,
    code: `{<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
  </div>}
,{
    .grid-container {
        display: grid;
      }
      
      
}`,
  },
  {
    heading: `Responsive Web Design - Frameworks`,
    content: ``,
    video: ``,
    code: `{
        <!DOCTYPE html>
<html>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body>

<div class="w3-container w3-blue">
  <h1>W3Schools Demo</h1>
  <p>Resize this responsive page!</p>
</div>

<div class="w3-row-padding">
  <div class="w3-third">
    <h2>London</h2>
    <p>London is the capital city of England.</p>
    <p>It is the most populous city in the United Kingdom,
    with a metropolitan area of over 13 million inhabitants.</p>
  </div>

  <div class="w3-third">
    <h2>Paris</h2>
    <p>Paris is the capital of France.</p>
    <p>The Paris area is one of the largest population centers in Europe,
    with more than 12 million inhabitants.</p>
  </div>

  <div class="w3-third">
    <h2>Tokyo</h2>
    <p>Tokyo is the capital of Japan.</p>
    <p>It is the center of the Greater Tokyo Area,
    and the most populous metropolitan area in the world.</p>
  </div>
</div>

</body>
</html>
    },{
        
<!DOCTYPE html>
<html lang="en">
<head>
<title>Bootstrap 5 Example</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<div class="container-fluid p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap Page</h1>
  <p>Resize this responsive page to see the effect!</p>
</div>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>

</body>
</html>
    }`,
  },
];

export default csstopics;
