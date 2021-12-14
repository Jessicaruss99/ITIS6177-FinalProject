<h1>ITIS6177-FinalProject</h1>
<h2  style="color:pink;">Swagger Documentation</h2>
<p><a href = "http://157.245.253.65:3001/docs"> Available here</p>
<h2>Introduction</h2>
<p>The Microsoft Azure Computer Vision API is an AI that analyzes the contents of images. With this API, you can indirectly access the computer vision api and analyze images and extract text from an image as well</p>

<h2 style="color:pink;" >Functions</h2>
<h3 style="color:lightpink;" >Analyze an Image</h3>
<ul>
  <li>Endpoint: http://157.245.253.65:3001/postanalyzeimage</li>
   <li>Method: Post</li>
</ul>
<p>This method takes an image url as an input, then the api communicates with the azure computer vision api, and returns a json file of important or noticable aspects about the image</p>
<p>A sample url that will return a status 200 is https://i.stack.imgur.com/jYikH.jpg</p>
<h3 style="color:lightpink;" >Extract Text from an Image</h3>
<ul>
  <li>Endpoint: http://157.245.253.65:3001/postocr </li>
   <li>Method: Post</li>
</ul>
<p>This method takes an image url as an input, then the api communicates with the azure computer vision api, and returns a json file of readable text from the image</p>
<p>A sample url that will return a status 200 is https://i.stack.imgur.com/jYikH.jpg</p>
