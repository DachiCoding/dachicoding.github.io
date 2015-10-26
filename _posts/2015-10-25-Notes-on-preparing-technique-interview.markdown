---
author: dachi.xu@gmail.com
comments: true
date: 2015-10-25
layout: post
title:  Notes on preapring technique interview
categories: General

---

I recently had a phone screen interview with Google, unfortunately I was not able to move forward to an onsite interview, but I would love to share something about preparing a technique interview. 

Technique interview questions could have a great variety of different stuff, let me "hash" them into few categories:

+ **Data Structure and Algorithm:**
<br>  
This is where most of your interview questiones will come from, you might have to spend a lot of time on it. DataS and algorithm topics includes:

	1.Bits manipulation: Bitwise opeartions  
	2.Data type related: Math(number theory),String(String conversion, pattern matching)  
	3.Data structure related: Linear DS(Array,LinkedList), Hahses, Trees and Graph.  
	4.General algo design: Divide and conquer, Dynamic programming/Greedy algo.  
	5.Design: e.g Implementing iteratro  
<br>  	
	There is a logic sequence might help you better connecting different topics above togather:<br>    
**Bit(01)=(Enconde)=>Data Type(int, string) =(Organize)=>Data Structure =(Design)=>Programs.**
<br>    
	When reviewing DS/algorithm problems, it will be good to **study fundamental theory and practice algorithm exercises** at the same time. You definitely want to use some OJ such as LeetCode but it is also necessary to review your algorithm textbook in case you run across some question that has never seen, so you still can recoginze what kind of problem it is in an instant.  
	<br>
	*Recommend study material:*<br>  
	1.[Algorithm 4th Ed](http://www.amazon.com/Algorithms-4th-Edition-Robert-Sedgewick/dp/032157351X)  
	2.[Intro to algorithm](http://www.amazon.com/gp/product/0262033844/ref=pd_lpo_sbs_dp_ss_1?pf_rd_p=1944687762&pf_rd_s=lpo-top-stripe-1&pf_rd_t=201&pf_rd_i=032157351X&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=0JG05DDS4Z9GBQD0JX5A)  
	3.[CC150](http://www.amazon.com/Cracking-Coding-Interview-6th-Programming/dp/0984782850/ref=sr_1_1?s=books&ie=UTF8&qid=1445800204&sr=1-1&keywords=CC150)  
	4.[LeetCode](http://www.amazon.com/Cracking-Coding-Interview-6th-Programming/dp/0984782850/ref=sr_1_1?s=books&ie=UTF8&qid=1445800204&sr=1-1&keywords=CC150)  
	5.I also found this data strucutre open course on [Coursera](https://www.coursera.org/learn/shuju-jiegou-suanfa) really helpful.    
<br>	    
  		
+ **Coding**:<br>	      
	Know detail stuff about your favoriate language, try to pracitce them with implemnting different data structures and algorihtms, for python lover I recommend this [The Hitchhiker's guide to python](http://docs.python-guide.org/en/latest/)
<br><br>    	            
  
+ **Opearting System knowledeges**:<br>  
	You might need to familar yourself with process manageemnt, mutex, semaphore, lock(deadlock) and parallel computing concepts.
	
	Recommend material:  
	1 [Modern Opearting System](http://www.amazon.com/gp/product/0136006639?keywords=modern%20operating%20system&qid=1445800770&ref_=sr_1_2&sr=8-2)  
	2 [A coursera open course from PKU about OS](https://www.coursera.org/course/os)    
<br><br>
	
+ **Shell scripting/Regex**:<br>  
	I was given a regex problem at the interview, so you should expect yourself will run across it too, try to play with command line and regex (grep/sed/awk) a little bit. One of my favorite book on the topic is [How Linux Works](http://www.amazon.com/gp/product/1593275676?keywords=how%20linux%20works&qid=1445824874&ref_=sr_1_1&sr=8-1)    
<br><br>

+ **System Design**:<br>  
	Read google [mapreduce](http://research.google.com/archive/mapreduce.html)/[big table](http://research.google.com/archive/bigtable.html) papers and stuff recommend in further reading.  
<br><br>

+ **Discrete mathematics**:<br>
  
	You might want to take sometime to review:  
	1.Induction and recursive  
	2.Boolean algebra  
	3.Couting  
	4.Probablity
	
	This [MIT Open Course of discrete mathematic](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-fall-2010/index.htm?utm_source=OCWDept&utm_medium=CarouselSm&utm_campaign=FeaturedCourse) is a great stuff to check out. 
<br><br>    

###Further reading:
* [The Five Essential Phone-Screen Questions](https://sites.google.com/site/steveyegge2/five-essential-phone-screen-questions)
* [Godd read on system desing interview](https://github.com/checkcheckzz/system-design-interview)

