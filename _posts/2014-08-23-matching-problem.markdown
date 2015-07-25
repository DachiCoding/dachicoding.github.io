---
author: dachi.xu@gmail.com
comments: true
date: 2014-08-23 21:33:20+00:00
layout: post
slug: 2014-08-23-matching-problem
title: 2014-08-23 "Matching Problem"
wordpress_id: 57
categories:
- General
---

First of all, my deep apologies for not updating about weeks. My excuses are:
1.I spent a week in Orlando for vacation.
2.After came back from Orlando, my neck and back hurt so much thus kept me away from laptops.

Today's study material: MIT OCW Mathematic For Computer Science Lecture 6 Graph Theory
***Please beware the below text might cover gender-related contents

**Question: on average who has more opposite-gender partners in United States: men or women?**

Below are two results from University of Chicago and ABC news who conducted surveys on random people

Answer A(From U Chicago): Men have 78% more of opposite-gender partners than women
Answer B(From ABC News ): Men have 233% more of opposite-gender partners than women.

Don't get excited or upset by the numbers above, because we can use basic graph theory to show what the reality is.

First let's introduce some basic definition of graph theory:
_Vertex_: or dot or node, in this example is a man or a woman.
_Edge_: or line, in this example a line represents one pair of man and woman who have sexual relationship.
_Degree_: number of edges joined by one vertex, in this example if Mr.X are connected with 3 different women in total, his degree is 3, and I don't think I have to explain what does it mean in this example :)

So we can come up with one particular graph(Bipartite graph) fits this example really well.

[![Screen Shot 2014-08-23 at 4.22.36 PM](http://dachicj.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-23-at-4.22.36-PM-289x300.png)](http://dachicj.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-23-at-4.22.36-PM.png)

Men are on the left of the above chart, and women are on the right. Each node represents one man or woman, and the edge(line)represents they are having *** relationship.

Let's back to the ratio of men to women opposite-gender partners,

so the average number of opposite-gender-partners on men would be the sum of degrees on the left side divide by the number of men population, same applies for the women.

Guess what, the sum of degree on the men and women are equal, which is obvious. So the ratio totally depends on the ratio between men and women population. And men's population in U.S is about 147.6M and women's is about 152.4M. Therefore the ratio should be 152.4/147.6- 100% = 3.25%. Based on the calculation men have 3.25% more opposite-gender partners than women.

Computer science blows my mind.

Thanks for reading!
 


