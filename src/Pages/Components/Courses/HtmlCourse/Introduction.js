import React from "react";
import { Link} from "react-router-dom";

const Introduction = () => {
  
  return (
    <div>
      <pre>
        &lt;!DOCTYPE html&gt; <br />
        &lt;html&gt;
        <br />
        &lt;head&gt;
        <br />
        &lt;title&gt;Page Title&lt;/title&gt;
        <br />
        &lt;/head&gt;
        <br />
        &lt;body&gt;
        <br />
        &lt;h1&gt;My First Heading&lt;/h1&gt;
        <br />
        &lt;p &gt;My first paragraph.&lt;/p&gt; <br />
        &lt;/body&gt;
        <br />
        &lt;/html&gt;
        <br />
      </pre>
      <h1 className="text-2xl font-bold my-3">Example explained</h1>
      <ul>
        <li>
          The &lt;!DOCTYPE html&gt; declaration defines that this document is an
          HTML5 document
        </li>
        <li>The &lt;html&gt; element is the root element of an HTML page</li>
        <li>
          The &lt;head&gt; element contains meta information about the HTML page
        </li>
        <li>
          The &lt;title&gt; element specifies a title for the HTML page (which
          is shown in the browser's title bar or in the page's tab)
        </li>
        <li>
          The &lt;body&gt; element defines the document's body, and is a
          container for all the visible contents, such as headings, paragraphs,
          images, hyperlinks, tables, lists, etc.
        </li>
        <li>The &lt;h1&gt; element defines a large heading</li>
        <li>The &lt;p&gt; element defines a paragraph</li>
      </ul>
      <Link to='/quiz'className="btn btn-primary">
        Take a quiz
      </Link>
    </div>
  );
};

export default Introduction;
