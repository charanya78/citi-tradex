package com.example.demo.repository;

import java.util.List;


import com.example.demo.entities.Stock;

public interface StockRepository {
	
	public List<Stock> getAllStock();
	public Stock getStockById(int id);
	public int deleteStock(int id);
	public Stock addStock(Stock stock);
	public Stock editStock(Stock stock);
	public List<Stock> getStockByStockName(String stockName);

}
