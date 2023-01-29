const htmltopics = [
  {
    heading: `HTML Introduction`,
    content: `
        What is HTML?
        HTML stands for Hyper Text Markup Language
        HTML is the standard markup language for creating Web pages
        HTML describes the structure of a Web page
        HTML consists of a series of elements
        HTML elements tell the browser how to display the content
        HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
        `,
    video: "https://www.youtube.com/embed/MDLn5-zSQQI",
    code: `<!DOCTYPE html>
        <html>
        <head>
        <title>Page Title</title>
        </head>
        <body>
        
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
        
        </body>
        </html>`,
  },
  {
    heading: `HTML Editors`,
    content: `
        Step 1: Open TextEdit (Mac)
        Open Finder > Applications > TextEdit
        
        Also change some preferences to get the application to save files correctly. In Preferences > Format > choose "Plain Text"
        
        Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".
        
        Then open a new document to place the code.
        Step 2: Write Some HTML
        Write or copy the following HTML code into Notepad:`,
    video: "https://www.youtube.com/embed/ZiRRR2z3WLs",
    code: `<!DOCTYPE html>
        <html>
        <body>
        
        <h1>My First Heading</h1>
        
        <p>My first paragraph.</p>
        
        </body>
        </html>`,
  },
  {
    heading: `HTML Elements`,
    content: `
        Start tag	Element content	    End tag
        <h1>	    My First Heading	   </h1>
        <p>	        My first paragraph.	    </p>
        <br>	    none    	            none
    `,
    video: "https://www.youtube.com/embed/YCEMHGsKYRc",
    code: `<!DOCTYPE html>
        <html>
        <body>
        
        <h1>My First Heading</h1>
        <p>My first paragraph.</p>
        
        </body>
        </html>`,
  },
  {
    heading: `HTML Attributes`,
    content: `
        HTML Attributes
        All HTML elements can have attributes
        Attributes provide additional information about elements
        Attributes are always specified in the start tag
        Attributes usually come in name/value pairs like: name="value"`,
    video: "https://www.youtube.com/embed/JqHW8Wf254I",
    code: `<a href="https://www.w3schools.com">Visit W3Schools</a>
    <img src="img_girl.jpg">
`,
  },
  {
    heading: `HTML Headings`,
    content: `HTML headings are titles or subtitles that you want to display on a webpage.

    `,
    video: "https://www.youtube.com/embed/1CoBHqSErzg",
    code: `
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
    `,
  },
  {
    heading: `HTML Paragraphs`,
    content: `HTML Paragraphs
        The HTML <p> element defines a paragraph.
        
        A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.
    `,
    video: "https://www.youtube.com/embed/J8qfzFmcmUA",
    code: `
        <p>
        This paragraph
        contains a lot of lines
        in the source code,
        but the browser
        ignores it.
        </p>
        
        <p>
        This paragraph
        contains         a lot of spaces
        in the source         code,
        but the        browser
        ignores it.
        </p>

    `,
  },
  {
    heading: `HTML Styles`,
    content: `The HTML style attribute is used to add styles to an element, such as color, font, size, and more.`,
    video: "https://www.youtube.com/embed/EopTYckcgp4",
    code: `
        <body>

<h1 style="background-color:powderblue;">This is a heading</h1>
<p style="background-color:tomato;">This is a paragraph.</p>

</body>
    `,
  },
  {
    heading: `HTML Tables`,
    content: `Define an HTML Table
        A table in HTML consists of table cells inside rows and columns.
        Table Cells
Each table cell is defined by a <td> and a </td> tag.
Table Rows
Each table row starts with a <tr> and ends with a </tr> tag.
Table Headers
Sometimes you want your cells to be table header cells. In those cases use the <th> tag instead of the <td> tag:

td stands for table data.
    `,
    video: "https://www.youtube.com/embed/31HTSB8X7FI",
    code: `<table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>`,
  },
  {
    heading: `HTML Responsive Web Design`,
    content: `Responsive web design is about creating web pages that look good on all devices!

        A responsive web design will automatically adjust for different screen sizes and viewports.
        Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones):
    `,
    video: "https://www.youtube.com/embed/lAOkx2yZESY",
    code: `
        <picture>
        <source srcset="img_smallflower.jpg" media="(max-width: 600px)">
        <source srcset="img_flowers.jpg" media="(max-width: 1500px)">
        <source srcset="flowers.jpg">
        <img src="img_smallflower.jpg" alt="Flowers">
      </picture>
    `,
  },
];

export default htmltopics;
