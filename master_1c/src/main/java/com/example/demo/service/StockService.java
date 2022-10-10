package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.repository.StockRepository;
import com.example.demo.entities.Stock;

@Service
public class StockService {

	@Autowired
	private StockRepository repository;
	

	public List<Stock> getAllStock(){
		return repository.getAllStock();
	}
	
	public Stock getStockById(int id) {
		return repository.getStockById(id);
	}
	
	public List<Stock> getStockByStockName(String stockName){
		return repository.getStockByStockName(stockName);
	}
	
	public int deleteStock(int id) {
		return repository.deleteStock(id);
	}
	public Stock addStock(Stock stock) {
		return repository.addStock(stock);
	}
	
	public Stock editStock(Stock stock) {
		return repository.editStock(stock);
	}
}
