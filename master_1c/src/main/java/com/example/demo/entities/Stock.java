package com.example.demo.entities;

import java.sql.Timestamp;
public class Stock {

	private int id;
	private String stockTicker;
	private String stockName;
	private double price;
	private int volume;
	private String buyOrSell;
	private int statusCodeCity;
	private Timestamp date_Time;
	
	public Stock() {
		super();
	}
	
	
	public Stock(int id, String stockTicker, String stockName, double price, int volume, String buyOrSell,
			int statusCodeCity, Timestamp date_Time) {
		super();
		this.id = id;
		this.stockTicker = stockTicker;
		this.stockName = stockName;
		this.price = price;
		this.volume = volume;
		this.buyOrSell = buyOrSell;
		this.statusCodeCity = statusCodeCity;
		this.date_Time = date_Time;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getStockTicker() {
		return stockTicker;
	}

	public void setStockTicker(String stockTicker) {
		this.stockTicker = stockTicker;
	}

	public String getStockName() {
		return stockName;
	}

	public void setStockName(String stockName) {
		this.stockName = stockName;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public int getVolume() {
		return volume;
	}

	public void setVolume(int volume) {
		this.volume = volume;
	}

	public String getBuyOrSell() {
		return buyOrSell;
	}

	public void setBuyOrSell(String buyOrSell) {
		this.buyOrSell = buyOrSell;
	}

	public int getStatusCodeCity() {
		return statusCodeCity;
	}

	public void setStatusCodeCity(int statusCodeCity) {
		this.statusCodeCity = statusCodeCity;
	}

	public Timestamp getDate_Time() {
		return date_Time;
	}

	public void setDate_Time(Timestamp date_Time) {
		this.date_Time = date_Time;
	}

	@Override
	public String toString() {
		return "Stock [id=" + id + ", stockTicker=" + stockTicker + ", stockName=" + stockName + ", price=" + price
				+ ", volume=" + volume + ", buyOrSell=" + buyOrSell + ", statusCodeCity=" + statusCodeCity
				+ ", date_Time=" + date_Time + "]";
	}
	
}