Files   ======================================
       1 app.js ==>
            exposeing your express app

       2 server.js ==>
            starting / listing server and importing app import app from './app  

       3 index.js ==>
            importing dotenv/config
            importing server.js        

Folders ======================================
        1 config ==>
            this is for all configurations


        2 controllers ==> 
            this is for model controllers     


        3 middleware ==>     
            this is for all middlewares 
            EX : if anyone hit api we push req through a middleware and check cookies or user authentication there


        4 models  ==> 
            this folder is for all your db models or schemas    


        5 routes  ==> 
            this is for all routes ( --api routes-- )


        6 services ==> 
            this is for all your srvices are here


        7 utils  ==>
            this for all utility functions or utils


        8 validations ==>
            this is for all your validations ex (-- ZOD --)    


Git =========================================================================================================            
 
    ----haw to rollback to prev code =>  current two file present and 2 is buugy and you push 
            git log => see commit that wnat to go as current code
            copy that commit id   =-->   1a54377a9085da45e936e79a5b546bfd1124ed02 
                git checkout 1a54377a9085da45e936e79a5b546bfd1124ed02   =>>>>>>>>>>>>> this remove 2 file and only 1 file working code is 
                present and buggy file that i push is remove
                then i get all that commited code  ---instead buggy code that i push

            but you want again that buggy code there is env var or id present 
            git checkout main  => we get all buggy latest code our head point to latest commit 
                total 2 file are now present 1 old code 2 buggy code
            --------------------------------------------
    ----working with multi repo 
            haw to add multi repo ====>>      git remote add origin  https://spi9325url.github
                                              git push origin main

                                              git remote add mycustomorigin  https://10MinDesign.github
                                              git push mycustomorigin main

            --------------------------------------------

    ---working in team --- 

        make sure you are on main or correct branch then create new brach and this new branch get all code of that branch where you priviously stand ex: you on [ Main ] and create [ Feature-Auth ] then this new branch contain all code of main branch then work on new branch  

        haw to create       git branch  newBranch   sourcebranch
     
       [ Main ]  --O--O--O--O--O
                               |  ----git branch Feature-Auth => then this new brach created
                               |  ----git checkout Feture-auth  => then you go to this Feature-auth Branch
                               [Feture-Auth]  --O--O--O--O--O--O--O--O--O--O--O--O--O--O--O--O--O--O--O--O

                                  ----push this LOCAL code to github/remote repo

                                  git push --set-upstream origin Feature-Auth 
                                                OR
                                  git push -u origin Feature-Auth

                                  ----if somone add code to remote branch then 

                                  git pull 


ES_LINT =========================================================================================================                                  
