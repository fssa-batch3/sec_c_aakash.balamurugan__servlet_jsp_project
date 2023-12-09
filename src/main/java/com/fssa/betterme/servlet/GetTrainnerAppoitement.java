package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;

import com.fssa.betterme.exception.DAOException;
import com.fssa.betterme.model.Appoitement;
import com.fssa.betterme.service.AppoitementService;

/**
 * Servlet implementation class GetTrainnerAppoitement
 */
@WebServlet("/GetTrainnerAppoitement")
public class GetTrainnerAppoitement extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		
		int id = Integer.parseInt(request.getParameter("id"));
		AppoitementService ser = new AppoitementService();
		
		
		List<Appoitement> mAppoitementList = new ArrayList<>();
		PrintWriter out = response.getWriter();
		try {
			mAppoitementList = ser.getAppoitementsByTrainer(id);;
		
			JSONArray mAppoitementJSonArray = new JSONArray(mAppoitementList);
			out.println(mAppoitementJSonArray.toString());
			
			
        } catch (DAOException e) {
 
            out.println("Error: " + e.getMessage());
        } finally {
            out.close();
        }
		
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append(request.getParameter("id"));
	}

}
