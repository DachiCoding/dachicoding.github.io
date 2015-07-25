---
author: dachi.xu@gmail.com
comments: true
date: 2014-10-27 21:49:29+00:00
layout: post
title: CSAPP Study Notes 10/27/2014
abstract: **1. What is I/O (Input/Output)?** , According to the definitions in CSAPP: Memory ==(Output)===> I/O Devices, Memory <==(Input)====  I/O Devices

---

#### Study Focus: Unix I/O and Standard I/O in C

#### Study Material: Computer System A Programmer's Perspective

#### Study Summary:

**1. What is I/O (Input/Output)?**

According to the definitions in CSAPP:

Memory ==(Output)===> I/O Devices

Memory <==(Input)====  I/O Devices

**2. Type and levels of I/O operations**

2.1 Unix I/O (Low level)

function calls including: open(), close(), read(), write()

2.2 Standard I/O (C Library)

function calls including: fopen(), fread(), fwrite(), fclose(),fstat() and etc.

Those functions are mostly used in c programming i/o operations

2.3 Robust I/O

Inlcuding rio_readn, rio_writen(), RIO are mostly used for network socket related programming.






