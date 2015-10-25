---
author: dachi.xu@gmail.com
comments: true
date: 2015-10-25
layout: post
title:  Notes on preapring technique interview
categories: General

---
### Notes on preapring technique interview
I recently had a phone screen interview with Google, unfortunately I was not able to move forward to an onsite interview, but I would love to share something about preparing a technique interview. 

Technique interview questions could have a great variety of different stuff, let me "hash" them into few categories:

* **Data Structure and Algorithm:**
This is where most of your interview questiones will come from, you might have to spend a lot of time on it. DS and algorithm topics includes:

 * *Bits manipulation*: Bitwise opeartions
 * *Data type related*: Math(number theory),String(String conversion, pattern matching)
 * *Data structure related*: Linear DS(Array,LinkedList),Hahsed,Trees and Graph
 * *General algo design*: Divide and conquer, Dynamic programming/Greedy algo
 * *Design*: e.g Implementing iteratro 

	There is a logic order might help you better understand the layers relationship between different topics above:

	Bit(0101010...) ===(Enconde)===> Data Type(int, char, string) ===(Organize)===> Data Structure ===(Design & Coding)===> Programs.
	
	When reviewing DS/algorithm problems, it will be good to **study fundamental theory and practice algorithm exercises** at the same time. You definitely want to use some OJ such as LeetCode but it is also necessary to review your algorithm textbook in case you run across some question that has never seen, so you still can recoginze what kind of problem it is in an instant.
	
	Recommend material:
		1.Algorithm 4th Ed [http://www.amazon.com/Algorithms-4th-Edition-Robert-Sedgewick/dp/032157351X]
		2.Intro to algorithm [http://www.amazon.com/gp/product/0262033844/ref=pd_lpo_sbs_dp_ss_1?pf_rd_p=1944687762&pf_rd_s=lpo-top-stripe-1&pf_rd_t=201&pf_rd_i=032157351X&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=0JG05DDS4Z9GBQD0JX5A]
		3.CC150 [http://www.amazon.com/Cracking-Coding-Interview-6th-Programming/dp/0984782850/ref=sr_1_1?s=books&ie=UTF8&qid=1445800204&sr=1-1&keywords=CC150]
		4.LeetCode [http://www.amazon.com/Cracking-Coding-Interview-6th-Programming/dp/0984782850/ref=sr_1_1?s=books&ie=UTF8&qid=1445800204&sr=1-1&keywords=CC150]
		5.I also found this data strucutre open course on courera really helpful [https://www.coursera.org/learn/shuju-jiegou-suanfa]

* **Coding**:

	Know detail stuff about your favoriate language, try to pracitce them with implemnting different data structures and solving the algorihtm problems, for python lover I recommend this article: [http://docs.python-guide.org/en/latest/]

* **Opearting System knowledeges**:

	You might need to familar yourself with process manageemnt, mutex, semaphore, lock(deadlock) and parallel concepts.
	
	Recommend material:
	1.Modern Opearting System [http://www.amazon.com/gp/product/0136006639?keywords=modern%20operating%20system&qid=1445800770&ref_=sr_1_2&sr=8-2]
	2.A coursera open course from PKU about OS [https://www.coursera.org/course/os]
	
* **Shell scripting/Regex**:
	I was given a regex problem at the interview, so you should expect yourself will run across it too, try to play with command line and regex (grep/sed/awk) a little bit.

* **System Design**

* **Discrete mathematics**


###Further reading:
* The Five Essential Phone-Screen Questions [https://sites.google.com/site/steveyegge2/five-essential-phone-screen-questions] 
* Great system desing interview stuff [https://github.com/checkcheckzz/system-design-interview]

