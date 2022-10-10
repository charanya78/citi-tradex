package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.StockService;
import com.example.demo.entities.Stock;

@RestController
@CrossOrigin
@RequestMapping("api/stocks")
public class StockController {
	
	@Autowired
	StockService service;
	
	@GetMapping
	public List<Stock> getAllStock(){
		return service.getAllStock();
	}
	
	@GetMapping(value="/{id}")
	public Stock getStockById(@PathVariable("id") int id) {
		return service.getStockById(id);
	}
	
	@GetMapping("/stockname/{stockName}")
	public List<Stock> getStockByStockName(@PathVariable String stockName) {
		return service.getStockByStockName(stockName);
	}
	
	
	@DeleteMapping(value="/{id}")
	public int deleteStock(@PathVariable("id") int id) {
		return service.deleteStock(id);
	}
	
	@PostMapping
	public Stock addStock(@RequestBody Stock stock) {
		return service.addStock(stock);
	}
	
	@PutMapping
	public Stock editStock(@RequestBody Stock stock) {
		return service.editStock(stock);
	}
	
	

}
