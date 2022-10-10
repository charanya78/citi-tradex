package com.example.demo.controller;
import org.junit.jupiter.api.Assertions;
import static org.assertj.core.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.example.demo.entities.Stock;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@ActiveProfiles("h2")
@SpringBootTest
@AutoConfigureMockMvc
public class StockControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@Test
	public void testgetAllStock() throws Exception {

	MvcResult mvcResult = this.mockMvc.perform(get("/api/stocks"))
	.andDo(print())
	.andExpect(status().isOk())
	.andReturn();
	
	List<Stock> stocks = new ObjectMapper().readValue(
		mvcResult.getResponse().getContentAsString(),
	  new TypeReference<List<Stock>>() { });
	
	assertThat(stocks.size()).isGreaterThan(0);
	}
	
	@Test
	public void testgetStockById() throws Exception {
	
	MvcResult mvcResult = this.mockMvc.perform(get("/api/stocks/1"))
	.andDo(print())
	.andExpect(status().isOk())
	.andReturn();
	
	Stock stocks = new ObjectMapper().readValue(
		mvcResult.getResponse().getContentAsString(),
	  new TypeReference<Stock>() { });
	
	assertThat(stocks.getId()).isEqualTo(1);
	}
	
	@Test
	public void testgetStockByStockName() throws Exception {
	
	MvcResult mvcResult = this.mockMvc.perform(get("/api/stocks/stockname/Wells Fargo"))
	.andDo(print())
	.andExpect(status().isOk())
	.andReturn();
	
	List<Stock> stocks = new ObjectMapper().readValue(
			mvcResult.getResponse().getContentAsString(),
		  new TypeReference<List<Stock>>() { });
	
	assertThat(stocks.size()).isGreaterThan(0);
	
	}
	
	@Test
	public void testeditStock() throws Exception
	{
		 Stock stock=new Stock();
			
		    stock.setId(5);
		    stock.setBuyOrSell("buy");
			stock.setPrice(400);
			stock.setStockName("J.P.Morgon");
			stock.setVolume(501);
			stock.setStockTicker("JPM");
			stock.setStatusCodeCity(2);
			
			String jsoninput=this.mapToJson(stock);
			String URI = "/api/stocks/"; 
			
			RequestBuilder requestBuilder = MockMvcRequestBuilders
					.put(URI)
					.accept(MediaType.APPLICATION_JSON).content(jsoninput)
					.contentType(MediaType.APPLICATION_JSON);

			MvcResult mvcResult = mockMvc.perform(requestBuilder)
					.andDo(print())
					.andExpect(status().isOk())
					.andReturn();
			
				
			Stock stocks = new ObjectMapper().readValue(
					mvcResult.getResponse().getContentAsString(),
				  new TypeReference<Stock>() { });
				
				assertThat(stocks.getId()).isEqualTo(5);
				assertThat(stocks.getVolume()).isEqualTo(501);
			
	}
	
	@Test
	public void testdeleteStock() throws Exception
	{
		MvcResult mvcResult = this.mockMvc.perform(delete("/api/stocks/2"))
				.andDo(print())
				.andExpect(status().isOk())
				.andReturn();
				
		int returnId=Integer. parseInt(mvcResult.getResponse().getContentAsString());
		//System.out.println(returnId);	
		Assertions.assertEquals(returnId,2);		
	}
	
	
	@Test
	public void testaddStock() throws Exception
	{
        Stock stock=new Stock();
		
		stock.setBuyOrSell("buy");
		stock.setPrice(50);
		stock.setStockName("Wells Fargo");
		stock.setVolume(5);
		stock.setStockTicker("WFC");
		stock.setStatusCodeCity(0);
		
		String jsoninput=this.mapToJson(stock);
		String URI = "/api/stocks/"; 
		
		RequestBuilder requestBuilder = MockMvcRequestBuilders
				.post(URI)
				.accept(MediaType.APPLICATION_JSON).content(jsoninput)
				.contentType(MediaType.APPLICATION_JSON);

		MvcResult mvcResult = mockMvc.perform(requestBuilder)
				.andDo(print())
				.andExpect(status().isOk())
				.andReturn();
		
			
		Stock stocks = new ObjectMapper().readValue(
				mvcResult.getResponse().getContentAsString(),
			  new TypeReference<Stock>() { });
			
			assertThat(stocks.getVolume()).isEqualTo(5);
		
	}
	
	private String mapToJson(Object object) throws JsonProcessingException {
		ObjectMapper objectMapper = new ObjectMapper();
		//System.out.println(objectMapper.writeValueAsString(object));
		return objectMapper.writeValueAsString(object);
	
}
}


