create table if not exists stock(
id int primary key auto_increment,
stockTicker varchar (30),
stockName varchar(50),
price double,
volume int,
buyOrSell  varchar(30),
statusCodecity int,
date_Time DATETIME DEFAULT CURRENT_TIMESTAMP
);
insert into stock (stockTicker,stockName,price,volume,buyOrSell,statusCodeCity) values('C','Citigroup Inc.',100,10,'buy',0);
insert into stock (stockTicker,stockName,price,volume,buyOrSell,statusCodeCity) values('AAPL','Apple Inc.',500,15,'sell',1);
insert into stock (stockTicker,stockName,price,volume,buyOrSell,statusCodeCity) values('NFLX','Netflix Inc.',600,100,'buy',2);
insert into stock (stockTicker,stockName,price,volume,buyOrSell,statusCodeCity) values('WFC','Wells Fargo',50,60,'sell',1);
insert into stock (stockTicker,stockName,price,volume,buyOrSell,statusCodeCity) values('JPM','J.P.Morgon',400,500,'buy',2);
insert into stock (stockTicker,stockName,price,volume,buyOrSell,statusCodeCity) values('WFC','Wells Fargo',5,6,'sell',1);
