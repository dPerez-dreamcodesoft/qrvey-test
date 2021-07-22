# qrvey-test
Qrvey-test

## Description
This project contains the development of an API that allows to take generic data to make a CRUD and two reports: one in Excel (csv) and one in PDF. 

## Technical features
This project is developed with NodeJS and Typescript, however because the data is generic, no interfaces are used and generic data types are used. Additionally this project must run in a linux environment.

#### required tools

- Nodejs and npm
- AWS CLI
- Typescript
- SAM (you need to have configurated SAM with your own credentials)


### how to deploy

- **npm i**
- **npm run createBucket** (execute only if the bucket does not exist)
- **npm run packDB** (execute only if the database tables does not exists or are updated)
- **npm run deplDB** (execute only if the database tables does not exists or are updated)
- **npm run pack**
- **npm run depl**

Additionally you can run **npm run test** and it will create the coverage folder inside you can find inside a Icov-report folder a html file (index), if you open thar file you will be able to see the coverage.

## API
### Postman collection

https://www.getpostman.com/collections/02d2a987ae9fe036ec18

## EndPoints

- Create superHero: https://3209z3wbm6.execute-api.us-east-1.amazonaws.com/Develop/createSuperheroe 
- Update superhero: https://3209z3wbm6.execute-api.us-east-1.amazonaws.com/Develop/updateSuperhero
- List superheroes: https://3209z3wbm6.execute-api.us-east-1.amazonaws.com/Develop/listSuperheroes
- Excel Report: https://3209z3wbm6.execute-api.us-east-1.amazonaws.com/Develop/excelReport
- PDF Report: https://3209z3wbm6.execute-api.us-east-1.amazonaws.com/Develop/pdfReport 

## EndPoints whith parameters

- Get superhero:    https://3209z3wbm6.execute-api.us-east-1.amazonaws.com/Develop/getSuperhero/heroId
- Delete superhero: https://3209z3wbm6.execute-api.us-east-1.amazonaws.com/Develop/deleteSuperhero/heroId

**heroId** is the Id for the superhero to search

### Coverage

Code coverage is above 80%.

![Coverage](https://github.com/dPerez-dreamcodesoft/qrvey-test/blob/97ff24af9a950034e87362e8826ee71c240d2c24/coverageImage.png)


