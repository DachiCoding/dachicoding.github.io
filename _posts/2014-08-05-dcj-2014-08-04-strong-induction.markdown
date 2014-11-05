---
author: dachi.xu@gmail.com
comments: true
date: 2014-08-05 03:09:00+00:00
layout: post
slug: dcj-2014-08-04-strong-induction
title: DCJ 2014-08-04 "Strong Induction"
wordpress_id: 43
categories:
- Daily
---

What I’ve studied today:

1.MIT OCW: Mathematics For Computer Science Lecture 3 Strong Induction.

Ok, why we need to study induction?

According to the textbook of this course: 

"One of the most important uses of induction in computer science involves proving that a program or process preserves
one or more desirable properties as it proceeds. A property that is preserved through a series of operations or steps 
is known as an invariant. "

Have you ever play the 8 puzzle game? (In China we have a similar game named "Hua Rong Dao", which have a better UI I guess.)
[![8_puzzle_goal_state_a](http://dachicj.com/wp-content/uploads/2014/08/8_puzzle_goal_state_a.png)](http://dachicj.com/wp-content/uploads/2014/08/8_puzzle_goal_state_a.png)

Whether if you are a fan of this game, let's try to figure out whether the chart on the left could reach to the right?

[![Screen Shot 2014-08-04 at 10.02.29 PM](http://dachicj.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-04-at-10.02.29-PM-300x140.png)](http://dachicj.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-04-at-10.02.29-PM.png)

The answer is no actually.

Because in the situation above there only exist one set of inversion, but a row move(moving from left to right or vice versa)does not change the 
number of inversion, and a column move(change up and down)change even number of inversion. It is unreachable to make it right by the move allowed
in this game.

Official proof goes here:

[![Screen Shot 2014-08-04 at 10.08.19 PM](http://dachicj.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-04-at-10.08.19-PM-300x135.png)](http://dachicj.com/wp-content/uploads/2014/08/Screen-Shot-2014-08-04-at-10.08.19-PM.png)



  
