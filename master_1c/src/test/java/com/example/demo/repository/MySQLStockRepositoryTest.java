package com.example.demo.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.example.demo.entities.Stock;

@ActiveProfiles("h2")
@SpringBootTest
public class MySQLStockRepositoryTest {

	@Autowired
	MySQLStockRepository mySQLStockRepository;
	
	@Test
	public void testgetAllStock()
	{
        List<Stock> returnedList = mySQLStockRepository.getAllStock();
		
		assertThat(returnedList).isNotEmpty();
		
	}
	
	 @Test
	 public void testgetStockById()
	 {
		 Stock returnedStock = mySQLStockRepository.getStockById(1);
		 assertThat(returnedStock.getId()).isEqualTo(1);
		 
	 }
	 
	 @Test
	 public void testgetStockByStockName()
	 {
		 List<Stock> returnedList = mySQLStockRepository.getStockByStockName("Wells Fargo");
		 assertThat(returnedList).isNotEmpty();
	 }
	 
	 @Test
	 public void testaddStock()
	 {
		 
		 Stock stock=new Stock();
	     stock.setBuyOrSell("buy");
		 stock.setPrice(50);
		 stock.setStockName("Wells Fargo");
		 stock.setVolume(5);
		 stock.setStockTicker("WFS");
		 stock.setStatusCodeCity(0);
		 
		 Stock returnedStock = mySQLStockRepository.addStock(stock);
		 assertThat(returnedStock).isEqualTo(stock);
		 
	 }
	 
	 @Test
	 public void testdeleteStock()
	 {
		 
		 int returnedId=mySQLStockRepository.deleteStock(3);
		 assertThat(returnedId).isEqualTo(3);
		 
	 }
	 
	 @Test
	 public void testeditStock()
	 {
		 Date date = new Date();  
	     Timestamp ts=new Timestamp(date.getTime()); 
	        
		 Stock stock=new Stock();
		 stock.setId(4);
	     stock.setBuyOrSell("sell");
		 stock.setPrice(50);
		 stock.setStockName("Wells Fargo");
		 stock.setVolume(60);
		 stock.setStockTicker("WFC");
		 stock.setStatusCodeCity(1);
		 stock.setDate_Time(ts);
		 
		 Stock returnedStock = mySQLStockRepository.editStock(stock);
		 assertThat(returnedStock).isEqualTo(stock);
	 }
}
