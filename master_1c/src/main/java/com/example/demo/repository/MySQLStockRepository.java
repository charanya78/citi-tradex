package com.example.demo.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Stock;
import com.example.demo.exceptions.ResourceNotFoundException;


@Repository
public class MySQLStockRepository implements StockRepository{

	@Autowired
	JdbcTemplate template;
	
	@Override
	public List<Stock> getAllStock() {
		// TODO Auto-generated method stub
		try {
		String sql="SELECT id,stockTicker,stockName,price,volume,buyOrSell,statusCodeCity,date_Time FROM stock";
		return template.query(sql, new StockRowMapper());
		}
		catch(EmptyResultDataAccessException ex) {
			throw new ResourceNotFoundException();
		}
	}

	@Override
	public Stock getStockById(int id) {
		// TODO Auto-generated method stub
		String sql="SELECT id,stockTicker,stockName,price,volume,buyOrSell,statusCodeCity,date_Time FROM stock WHERE id=?";
		return template.queryForObject(sql, new StockRowMapper(),id);
	}

	@Override
	public List<Stock> getStockByStockName(String stockName){
		try {
		String sql="SELECT id,stockTicker,stockName,price,volume,buyOrSell,statusCodeCity,date_Time FROM stock WHERE stockName=?";
		return template.query(sql, new StockRowMapper(),stockName);
		}
		catch(EmptyResultDataAccessException ex) {
			throw new ResourceNotFoundException();
		}
	}
	
	@Override
	public int deleteStock(int id) {
		// TODO Auto-generated method stub
		String sql="DELETE FROM stock where id=?";
		template.update(sql,id);
		return id;
	}

	@Override
	public Stock addStock(Stock stock) {
		// TODO Auto-generated method stub
		String sql="INSERT INTO stock(stockTicker,stockName,price,volume,buyOrSell,statusCodeCity) VALUES(?,?,?,?,?,?)";
		template.update(sql,stock.getStockTicker(),stock.getStockName(),stock.getPrice(),
				stock.getVolume(),stock.getBuyOrSell(),stock.getStatusCodeCity());
		return stock;
	}

	@Override
	public Stock editStock(Stock stock) {
		// TODO Auto-generated method stub
		String sql="UPDATE stock SET stockTicker=?,stockName=?,price=?,volume=?,buyOrSell=?,statusCodeCity=?,date_Time=? WHERE id=?";
		template.update(sql,stock.getStockTicker(),stock.getStockName(),stock.getPrice(),
				stock.getVolume(),stock.getBuyOrSell(),stock.getStatusCodeCity(),stock.getDate_Time(),stock.getId());
        return stock;
	
}
}

class StockRowMapper implements RowMapper<Stock> {

	@Override
	public Stock mapRow(ResultSet rs, int rowNum) throws SQLException {
		return new Stock(rs.getInt("id"), rs.getString("stockTicker"), rs.getString("stockName"),rs.getDouble("price"),
				rs.getInt("volume"),rs.getString("buyOrSell"),rs.getInt("statusCodeCity"),rs.getTimestamp("date_Time"));
	}

}

