---
author: dachi.xu@gmail.com
comments: true
date: 2014-09-03 20:23:42+00:00
layout: post
title: Write a class in python
---

**_Programming:_**
**Python**
#### write a class in python:
class Parent(object):
  def __init__(self):
    #### constructor

  def method(self,parameter):
    #### do something

class Child(Parent):

   def __init__(self):
     #### constructor

   def method(self,parameter):
      super(Child).method(self,parameter) #### override parent's method

**Vim:**
Searching
#### f : find text
#### t : stop before text

Moving
#### ctrl + u: scroll up pages
#### ctrl + d: scroll down pages

Deleting
#### dw : delete a word

#### J : joining

#### ~ : change case

#### how to record a macro:
qa - q:record / a: store the macro at register a
do something
q - stop recording
@a - call the macro at register a

**_Product:_**
#### 1 mockup per day
https://itunes.apple.com/cn/app/bao-he-jian-fei-jian-shen/id457856023?l=en&mt;=8

[![mockup](http://dachicj.com/wp-content/uploads/2014/09/mockup-300x100.png)](http://dachicj.com/wp-content/uploads/2014/09/mockup.png)
