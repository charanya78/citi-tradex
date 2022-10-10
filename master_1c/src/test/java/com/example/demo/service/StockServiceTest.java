package com.example.demo.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;

import com.example.demo.entities.Stock;
import com.example.demo.exceptions.ResourceNotFoundException;
import com.example.demo.repository.StockRepository;

@ActiveProfiles("h2")
@SpringBootTest
public class StockServiceTest {
	
	@Autowired
	StockService stockService;
	
	@MockBean
	StockRepository stockRepository;
    
	@Test
	public void testgetStockById() {
		
				
		Date date = new Date();  
        Timestamp ts=new Timestamp(date.getTime()); 
		Stock stock=new Stock();
		int testId=1;
		
		stock.setBuyOrSell("buy");
		stock.setDate_Time(ts);
		stock.setId(testId);
		stock.setPrice(50);
		stock.setStockName("Wells Fargo");
		stock.setVolume(5);
		stock.setStockTicker("WFC");
		stock.setStatusCodeCity(0);
		
		when(stockRepository.getStockById(stock.getId()))
		.thenReturn(stock);
		
		
		Stock returnedStock = stockService.getStockById(testId);
		
		assertThat(returnedStock).isEqualTo(stock);
	}
	
	@Test
	public void testgetStockByStockName() {
		
				
		Date date = new Date();  
        Timestamp ts=new Timestamp(date.getTime()); 
		Stock stock=new Stock();
		int testId=1;
		
		stock.setBuyOrSell("buy");
		stock.setDate_Time(ts);
		stock.setId(testId);
		stock.setPrice(50);
		stock.setStockName("Wells Fargo");
		stock.setVolume(5);
		stock.setStockTicker("WFC");
		stock.setStatusCodeCity(0);
		

		List<Stock> stocks= new ArrayList<Stock>();
		stocks.add(stock);
		List<Stock> returnedStock= new ArrayList<Stock>();
		
		when(stockRepository.getStockByStockName(stock.getStockName()))
		.thenReturn(stocks);
		
		
		returnedStock = stockService.getStockByStockName(stock.getStockName());
		
		assertThat(returnedStock).isEqualTo(stocks);
	}
	
	@Test
	public void testgetStockByStockNameFail() {
		
		int testId=100;
		
		when(stockRepository.getStockById(testId))
		.thenThrow(new ResourceNotFoundException());
		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			stockService.getStockById(testId);
		});
	}
	
	@Test
	public void testgetAllStock() {
		
		Stock stock=new Stock();
		Stock anotherStock=new Stock();
		
		Date date = new Date();  
        Timestamp ts=new Timestamp(date.getTime()); 
		
		stock.setBuyOrSell("buy");
		stock.setDate_Time(ts);
		stock.setId(1);
		stock.setPrice(50);
		stock.setStockName("Wells Fargo");
		stock.setVolume(5);
		stock.setStockTicker("WFC");
		stock.setStatusCodeCity(0);
		
		anotherStock.setBuyOrSell("buy");
		anotherStock.setDate_Time(ts);
		anotherStock.setId(2);
		anotherStock.setPrice(50);
		anotherStock.setStockName("Wells Fargo");
		anotherStock.setVolume(5);
		anotherStock.setStockTicker("WFC");
		anotherStock.setStatusCodeCity(0);
		
		List<Stock> stocks= new ArrayList<Stock>();
		stocks.add(stock);
		stocks.add(anotherStock);
		
		List<Stock> returnedStocks= new ArrayList<Stock>();
		
		when(stockRepository.getAllStock())
		.thenReturn(stocks);
		
		
		returnedStocks = stockService.getAllStock();
		
		assertThat(returnedStocks).isEqualTo(stocks);
	}
	
	@Test
	public void testgetAllStockFail() {
		
		when(stockRepository.getAllStock())
		.thenThrow(new ResourceNotFoundException());
		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			stockService.getAllStock();
		});
	}
	
	@Test
	public void testDeleteStock()
	{
		Stock stock=new Stock();
		int testId=1;
		
		Date date = new Date();  
        Timestamp ts=new Timestamp(date.getTime()); 
		
		stock.setBuyOrSell("buy");
		stock.setDate_Time(ts);
		stock.setId(testId);
		stock.setPrice(50);
		stock.setStockName("Wells Fargo");
		stock.setVolume(5);
		stock.setStockTicker("WFC");
		stock.setStatusCodeCity(0);
		
		when(stockRepository.deleteStock(stock.getId()))
		.thenReturn(stock.getId());
				
		int returnedId = stockService.deleteStock(testId);
		
		assertThat(returnedId).isEqualTo(stock.getId());
	}
	
	@Test
	public void testaddStock()
	{

		Stock stock=new Stock();
		int testId=1;
		
		Date date = new Date();  
        Timestamp ts=new Timestamp(date.getTime()); 
		
		stock.setBuyOrSell("buy");
		stock.setDate_Time(ts);
		stock.setId(testId);
		stock.setPrice(50);
		stock.setStockName("Wells Fargo");
		stock.setVolume(5);
		stock.setStockTicker("WFC");
		stock.setStatusCodeCity(0);
		
		when(stockRepository.addStock(stock))
		.thenReturn(stock);
				
		Stock returnedStock = stockService.addStock(stock);
		
		assertThat(returnedStock).isEqualTo(stock);
	}
	
	@Test
	public void testeditStock()
	{
		Stock stock=new Stock();
		Stock anotherStock=new Stock();
		int testId=1;
		
		Date date = new Date();  
        Timestamp ts=new Timestamp(date.getTime()); 
		
		stock.setBuyOrSell("buy");
		stock.setDate_Time(ts);
		stock.setId(testId);
		stock.setPrice(50);
		stock.setStockName("Wells Fargo");
		stock.setVolume(5);
		stock.setStockTicker("WFC");
		stock.setStatusCodeCity(0);
		
		anotherStock.setBuyOrSell("buy");
		anotherStock.setDate_Time(ts);
		anotherStock.setId(2);
		anotherStock.setPrice(51);
		anotherStock.setStockName("Wells Fargo");
		anotherStock.setVolume(5);
		anotherStock.setStockTicker("WFC");
		anotherStock.setStatusCodeCity(0);
		
		when(stockRepository.editStock(stock))
		.thenReturn(anotherStock);
				
		Stock returnedStock = stockService.editStock(stock);
		
		assertThat(returnedStock).isEqualTo(anotherStock);
		
	}
}
