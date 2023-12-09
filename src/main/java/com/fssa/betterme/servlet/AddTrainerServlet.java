package com.fssa.betterme.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fssa.betterme.exception.DAOException;
import com.fssa.betterme.exception.EventValidationException;
import com.fssa.betterme.exception.ServiceException;
import com.fssa.betterme.model.Trainer;
import com.fssa.betterme.service.TrainerService;


/**
 * Servlet implementation class AddTrainerServlet
 */
@WebServlet("/AddTrainerServlet")
public class AddTrainerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    	doPost(request, response);
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response)
    	    throws ServletException, IOException {
    	    
    	    
    	    // Retrieve form data
    	    String trainerName = request.getParameter("trainerName");
    	    String imageLink = request.getParameter("imageLink");
    	    String email = request.getParameter("email");
    	    String loginPass = request.getParameter("loginPass");
    	    String occupation = request.getParameter("occupation");
    	    String content = request.getParameter("content");
    	    String startTime = request.getParameter("startTime");
    	    String endTime = request.getParameter("endTime");
    	    String education = request.getParameter("education");
    	    String experience = request.getParameter("experience");
    	    
    	    PrintWriter out = response.getWriter();

    	    // Create a JSON object to respond with
    	
    	    Trainer obj = new Trainer(trainerName, imageLink, email, loginPass, occupation, content, startTime, endTime, education, experience);
    	    try {
    	    	TrainerService dao = new TrainerService();
				out.print(dao.addTrainer(obj));
				
				

			} catch (  ServiceException | EventValidationException e) {
				
				out.print(e.getMessage());
			}
    	    
    	    out.flush();
			out.close();

    	}

	}


