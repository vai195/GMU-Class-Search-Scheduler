# George Mason University Class Search and Scheduler 

This project is a robust class search system specifically tailored for George Mason University, catering to a student population of over 30,000. It employs a MongoDB database to manage class and scheduling data, a Go application to establish a RESTful API for the backend, and a Next.js frontend for user-friendly interaction.

## Visit the app [Link!](https://gmuscheduler.vercel.app/)
![home page](https://github.com/user-attachments/assets/25092a34-28f3-44bc-b299-d74354a4d722)


## Features

- MongoDB database: Stores information about classes including dates, times, courses, locations, professors, and more.
- Go Backend: Utilizing Gorilla Mux and the standard library providing a robust RESTful API to retrieve class data efficiently. Packaged as a Docker Container and deployed on Google Cloud Platform using Cloud Run.
- Next.js Frontend: A user-friendly interface for viewing class information as well as adding class timings to your calendar. Deployed on Vercel.
- CI/CD: Utilized Github Actions for continous integration by running a build of the application as well as router tests everytime a commit is pushed to the main branch which then allows for Google Cloud Run to deploy a new instance of my application everytime a code change is made.

## Diagram of Whole Project and CI/CD
Excalidraw: [Link](https://excalidraw.com/?#json=yJMPUJSUECawp_bK0OLZN,yfZ_cOS_YtuTDv2-zBOGRg)

![Excalidraw](https://github.com/user-attachments/assets/c6aa798e-47c8-4549-affe-847aaf9e31f4)


## Intuitive Search
![search](https://github.com/user-attachments/assets/acc41557-74d3-4713-afba-244319d08535)

## Subjects Supported 

- CS
- SWE
- ECE
- CDS
- GAME

(Contact me to add your major specific classes or update your class info if wrong)
## Seamlessly Add Courses To Your Calendar
<img src="https://github.com/user-attachments/assets/8b5fc29e-a9b1-4c3e-b95d-ef5729f9389d" width="200"/> <img src="https://github.com/user-attachments/assets/7d70ea34-c2bc-42eb-b71b-f316bf6bea38" width="800"/>




