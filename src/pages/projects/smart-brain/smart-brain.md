---
posttype: "project"
path: "/projects/smart-brain/smart-brain/"
gitlink: "https://github.com/danielballoch/smart-brain"
image: "./steve.PNG"
date: "2020-02-27"
title: "Smart-Brain"
service: "Full stack app development"
published: true
tags: ['Brand Identity', 'Ecommerce',]

intro1: "Smart Brain is a full stack project which makes use of the clarifai api for face recognition. "

intro2: "Create a face recognition app with routing, secure sign in and register capabilitys and a functional database as the final challenge in 'The Complete Web Developer in 2020'."
intro3: "I used the clarifai api to recognise faces from submitted images, set up a database with Express, PostgreSQL and Knex.js. Passwords were hashed and kept secure using bcrypt and the server and front end app were deployed on Heroku (versions managed on github)." 

intro4: "

"


heading1: "App Development"

paragraph1_1: "
Majority of the app was planned out by Andrai, the course instructor, however I made sure to style the app myself, make it mobile friendly, and add a few features to improve UX, so the life of whoever views this is a little easier and to show I actually learned the tools used."

paragraph1_2: "
To improve user experience I set out to make three additions to the app:     
"
addition1: " a guest log in function, so busy people don't have to register."
addition2: " frontend feedback if incorrect details were submitted, meaning users actually know whats happend."
addition3: " placeholder form inputs, giving users an example of the expected content."

paragraph1_3: "
#3 is a vital step in my eyes and I made sure to double check prevous best practise form guides to make sure this was the right move. Once satisfied the addition of html was simple.  
"
paragraph1_4: "
#2 was also quite simple, I just added a 'wrongDetails' boolean to my register and signin components' state, then in my 'onLogReg' (a function I refactored as similar code was used in both components) scripts else statment, after checking if data is valid, 'wrongDetails' state is updated with a callback function. Then in the form I use this state as a display toggle for the relevant error message (relevant as in signin/register, all same page responses are kept identical for security reasons). 
"
paragraph1_5: "
#1 was were I got to jump into Express & Knex.js documentation and learn some new code. I added a prop, guest, to the register function and if passed in and equal to 'guest' then a static login would be used. Simple enough, however I also wanted to make sure that if my database was cleared a guest profile was recreated so my app didn't break. My solution was creating the function 'createGuest' which would fetch the signin route, using static guest content for the body, and check if the guest account was already created. If so, just log the user in. Otherwise, I would need to call a new function, deleteUser, then the 'onLogReg' register function which would create the account. 


"
paragraph1_55: "
deleteUser would fetch a new controller (handleDeleteUser) which needed to be created from the /delete route. 
In wanting to make handleDeleteUser controller reusable and also not cause any security errors, I opted to to check if the password matched the supplied password and only let users who knew their password delete their account. So I added the pasword check with bcrypt, then overide it if the passed in email was 'guest@gmail.com'. Since we used 'transactions' to keep the database consistent even with any errors when registering, I knew this needed to be applied here also in deleting data. Some code could be reused as the newly created 'handleDeleteUser' would basically be a combination of the sign up and register controllers, checking user data and then instead of registering, deleting the matching data with a similar use of transactions and the simple Knex.js function .del(). 
"

paragraph1_6: "
 This was the final project in 'The Complete Web Developer in 2020' course and I ended up learning a ton, as well as adding to the project making it my own. After completing the project, as usual, I found it hard not to add more, however I'm sticking to my trello timeline and will save my excitment for the next project I'll be creating with these new learned skills."

---




