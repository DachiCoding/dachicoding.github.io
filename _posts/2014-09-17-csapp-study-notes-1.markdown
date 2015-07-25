---
author: dachi.xu@gmail.com
comments: true
date: 2014-09-17 20:49:39+00:00
layout: post
slug: dcj-2014-09-17-daily-summary
title: 2014-09-17 Daily Summary
wordpress_id: 91
categories:
- General
---

**Programming:**

#### Study material: Computer Systems A Programmer's Perspective

#### Study focus: Optimization (in C language)

#### Summary:

One of the most important concerning when optimizing you code is to ensure a safety optimization, which is your optimization

will not change the behavior of your program.

For example : pointer aliasing.



	
  1. void foo1(int *xp, int *yp){

	
  2.   *xp += *yp;

	
  3.   *xp += *yp;

	
  4. }


could be optimized into

	
  1. void foo2(int *xp, int *yp){

	
  2.  *xp += 2* *yp;

	
  3. }


However when I was trying to execute following code.

[![Screen Shot 2014-09-17 at 3.45.09 PM](http://dachicj.com/wp-content/uploads/2014/09/Screen-Shot-2014-09-17-at-3.45.09-PM-300x232.png)](http://dachicj.com/wp-content/uploads/2014/09/Screen-Shot-2014-09-17-at-3.45.09-PM.png)



I am getting an unexpected output like this:



	
  * Before Swap
1 1
0x7fff5f659978 0x7fff5f659978

	
  * After Swap
0 0
0x7fff5f659978 0x7fff5f659978


Be careful when optimizing involved pointer aliasing.

**Product:**

No time for product analysis today. You catch me! Send "catch you lazy man!" to me on Weixin(WeChat) and there is a small reward for you! （offer expires at 23:59 09/17/2014)
