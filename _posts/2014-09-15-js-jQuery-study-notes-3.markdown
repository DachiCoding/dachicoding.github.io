---
author: dachi.xu@gmail.com
comments: true
date: 2014-09-15 15:26:30+00:00
layout: post
title: JS and jQuery Study Notes 09/15/2014
---

**Programming:**

#### Study material: JavaScript & JQuery (Jon Duckett)

#### Study focus: how to select elements in DOM Tree

#### Summary:

Let's write some simple piece of mark-ups:

<html>
<head></head>
<body>
<h1 id=“header”>Header</h1>
<ul>
<li id=“1” class=“list">1</li>
<li id=“2” class=“list”>2</li>
<li id=“3” class=“list”>3</li>
</ul>
</body>
</html>



	
  * Selecting individual element:


Let's say the "h1" element, we can do it by

var headerElement = **document.getElementById('header');  //document.getElementById(id of the element you want to select)**

or

var ulElement = **document.querySelector('ul'); // return the first match **



	
  * And if we want to select a group of elements:


var listElement = **document.getElementByClassName("list"); // parameter should be the class name of the elements**

var listElement = **document.getElementByTagName("li"); //parameter should be the element type, such as h1, p, li and etc...**

var listElement = **document.querySelectorAll("li.list"); // parameter could be type or id or class.**



	
  *  Once we get some elements , we can traverse around the element(s):


going up: listElement.**parentNode** is ulElement

going dn: ulElement.**firstChild** is the first li element, ulElement.**lastChild** is the third li element

going left & right:  listElement[1].**previousSibling** will be listElement[0], listElement[1].**nextSibling** will be listElement[2];





* * *



**Product:** Timeline Hunt (http://timeline-product-hunt.herokuapp.com/)

#### Description: The best products of Product Hunt on a timeline

#### Prototype:

[![Screen Shot 2014-09-15 at 10.25.24 AM](http://dachicj.com/wp-content/uploads/2014/09/Screen-Shot-2014-09-15-at-10.25.24-AM-300x194.png)](http://dachicj.com/wp-content/uploads/2014/09/Screen-Shot-2014-09-15-at-10.25.24-AM.png)


