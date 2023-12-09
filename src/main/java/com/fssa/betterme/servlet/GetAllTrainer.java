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
import com.fssa.betterme.model.Trainer;
import com.fssa.betterme.service.TrainerService;

/**
 * Servlet implementation class GetAllTrainer
 */
@WebServlet("/GetAllTrainer")
public class GetAllTrainer extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		TrainerService ser = new TrainerService();
		List<Trainer> mTrainerList = new ArrayList<>();
		PrintWriter out = response.getWriter();
		try {
			mTrainerList = ser.readAllTrainer();
		
			JSONArray mTrainerJSonArray = new JSONArray(mTrainerList);
			out.println(mTrainerJSonArray.toString());
			
			
        } catch (DAOException e) {
 
            out.println("Error: " + e.getMessage());
        } finally {
            out.close();
        }
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
