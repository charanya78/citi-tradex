# Citi Tradex

## DESCRIPTION 

The project aims to provide an easy to use interface for a user to place buy and sell trade orders. Citi Tradex is an easy to use investment portfolio application that allows users to:
- Perform Trade Operations -- Buy/Sell/View history
- Provide Trade suggestions to novice traders
- Use Trade visualisations to convey better idea of Trade History
- Create a Real Life Trade Scenario using dummy status fillers.

## SOFTWARES AND DEVOP TOOLS USED

- Visual Studio Code
- Eclipse
- Openshift
- Jenkins

## LANGUAGE USED

- Java
- MySQL
- HTML,CSS,JS
- Angular

## ARCHITECTURE DIAGRAM

![alt text](https://github.com/charanya78/citi-tradex/blob/main/diagrams/arch_diag.jpg)

#### TRADE REST API
- A trade REST API based on MVC is created to establish database connection to MySQL
- The REST API has entity, service, repository and controller packages
- The entity package defines a stock class with the parameters - id, stockTicker, stockName, price, volume, buyOrSell, statusCodeCity, date_Time
- The controller class holds the mapping for the CRUD operations
- The repository classes have classes which hold the SQL queries with their execution using JDBC Template
- The database connection properties are defined in properties file inside main/resources
- Code has been tested with JUnit
- Swagger Auto-generated UI is used

#### TRADE DB
- Trade DB was configured using MySQL and h2 was used for testing
- The DB structure is elaborated in "DATABASE STRUCTURE"

#### FRONT END
- Front End was configured using HTML, CSS, Angular
- For each component, a seperate package is created having ts,html,css files
- Routes are configured based on controller mappings in app-routing.module.ts 

#### EXTERNAL SERVICES
- For features like live price service, trade advisor and news, extrernal services hosten on AWS are invoked 




## DATABASE STRUCTURE

![alt text](https://github.com/charanya78/citi-tradex/blob/main/diagrams/data.png)
- The database has the same fields as the entity class with the same datatypes

## CODE COVERAGE AND SWAGGER PAGE

![alt text](https://github.com/charanya78/citi-tradex/blob/main/diagrams/coverage.png)
- Coverage of 91% was obtained - testing was done with Junit

![alt text](https://github.com/charanya78/citi-tradex/blob/main/diagrams/swagger.png)
- To verify the CRUD operations, Swagger UI was configured

## JENKINS AND OPENSHIFT DEPLOYMENT

![alt text](https://github.com/charanya78/citi-tradex/blob/main/diagrams/jenkins.png)

![alt text](https://github.com/charanya78/citi-tradex/blob/main/diagrams/openshift.png)

## FEATURES

![alt text](https://github.com/charanya78/citi-tradex/blob/main/diagrams/features.PNG)

![alt text](https://github.com/charanya78/citi-tradex/blob/main/diagrams/features2.PNG)

![alt text](https://github.com/charanya78/citi-tradex/blob/main/diagrams/example_feature.png)

## EXECUTION 
