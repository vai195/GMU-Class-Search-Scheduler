# George Mason University Class Search and Scheduler 

This project is a robust class search system specifically tailored for George Mason University, catering to a student population of over 30,000. It employs a MongoDB database to manage class and scheduling data, a Go application to establish a RESTful API for the backend, and a Next.js frontend for user-friendly interaction.

# Features

- MongoDB database: Stores information about classes including dates, times, courses, locations, professors, and more.
- Go Backend: Utilizing Gorilla Mux and the standard library providing a robust RESTful API to retrieve class data efficiently. Packaged as a Docker Container and deployed on Google Cloud Platform using Cloud Run.
- Next.js Frontend: A user-friendly interface for viewing class information as well as adding class timings to your calendar. Deployed on Vercel.
- CI/CD: Utilized Github Actions for continous integration by running a build of the application as well as router tests everytime a commit is pushed to the main branch which then allows for Google Cloud Run to deploy a new instance of my application everytime a code change is made. 
