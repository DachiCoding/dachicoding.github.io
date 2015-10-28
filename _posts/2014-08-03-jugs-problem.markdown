---
author: dachi.xu@gmail.com
comments: true
date: 2014-08-03 20:21:37+00:00
layout: post
title: Jugs Problem
categories: computer science
---

What I've studied today:

1.MIT OCW: Mathematics For Computer Science Lecture 4 Number Theory I

Let's watch a clip from "Die Hard 3" first.
[Die Hard 3 Jugs Problem](https://www.youtube.com/watch?v=BVtQNK_ZUJg)

My solution is: 
1.Fill the 3 gallon jug, and pour it into the 5 gallon jug, then we have (0,3) gallons in the 3g and 5g jugs
2.Fill the 3 gallon jug again , and pour the water into the 5 gallon jug until it is full, then we have (1,5) gallons.
3.Dump all the water in the 5 gallon jug and then pour the 1 gallon of water from the 3 gallon jug to 5 gallon (1,5) -> (1, 0) -> (0, 1)
4.Fill the 3 gallon jug and pour all the water into the 5 gallon jug (3,1) -> (0, 4).
5.Done

Let's look at the problem from a more abstract perspective, can we use a 3 gallon jug and 6 gallon jug to get 4 gallons of water? 
Maybe not, "suppose that we have water jugs with capacities a and b, the amount of water in each jugs is always a linear combination 
of a and b."  

Below is the proof steps using induction from the MIT text-note.
[gallery ids="37"]

Ok, but why bother studying the number theory? because SECURITY matters! "Number theory underlies modern cryptography, which is what 
enable secure online communication."


