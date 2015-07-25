---
author: dachi.xu@gmail.com
comments: true
date: 2014-08-06 16:02:33+00:00
layout: post
slug: '48'
title: 2014-08-06 "Turing's Code"
wordpress_id: 48
categories: general
---

Today I studied:

MIT OCW Mathematic For Computer Science Text-note 1-4.3 Alan Turing:

At the beginning, let's look at a string of numbers:

               **50369825549820718594667857.**

What the heck is that huh? Imagine it's WWII now, and that is actually a piece of encrypted information which hidden the secret to defeat Nazi! World Peace depends on you!

Ok so how do we decipher this piece of code? One equation will helpful:

               **m* = m * k** 

m is the original number representation of the word (A = 01, B = 02, ... e.g Hello = 08 05 12 12 15), please note the number has to be a prime, if the original number is not a prime, we will append numbers to make it a prime.

k is the secret key number shared only between sender and receiver ( a large prime)

m* is the encrypted number.

During the war time figuring out the key prime would take endless computations, so are the secrets all safe?

Actually not, though computing or guessing the k is mission impossible, but if the Nazi get two message, they can use Euclid's algorithm to figure out the great common divisor of m*1 and m*2. the Nazi can keep calculating using "gcd(a,b) = gcd(b,rem(a,b))" until they get the k!

Oops!

(The hidden message is "victory" , 22 09 03 20 15 18 25 appending 13 to make it a prime, and key is 22801763489, so
m* = 2209032015182513 * 22801763489)



