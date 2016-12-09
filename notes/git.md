GIT
---

**download repository url into this folder:**  

	git clone https://github.com/paulshorey/NYCDA.git group_projects

---

before you make any changes, and after, download new changes from github:  
	
	git pull
  
(1) **add everything in the current folder** (commit these later) 
	
	git add .
	
add only this specific file or folder  

	git add Alissa  
	
undo “git add filename"  

	git reset filename
  
(2) **save the files which you just added, with a descriptive message** (to your local computer)  
	
	git commit -m “this is my new folder”
	
(3) **uploads your saved files to github** (the things which you just comitted (saved) to your local computer)  
	
	git push

---

super-“undo” undoes everything you have on your computer and gets the latest version from github.com:
	
	git reset --hard origin/master
	...or...
	git reset --hard origin/YOUR_BRANCH_NAME
	
---

**delete the branch on MY COMPUTER:**  
(make sure youre not inside that branch - git checkout master - first)
	
	git branch -D branchname
	

**delete the branch on THE SERVER - GITHUB OR WHATEVER**  
(make sure youre not inside that branch - git checkout master - first)

	git push origin :branchname

---

what branches are there on MY COMPUTER?
	
	git branch
	
what branches are there on THE SERVER - GITHUB	
	
	git branch -r
	
	
	
	
