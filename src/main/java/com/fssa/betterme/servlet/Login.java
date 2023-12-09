package com.fssa.betterme.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fssa.betterme.exception.EventValidationException;
import com.fssa.betterme.exception.ServiceException;
import com.fssa.betterme.exception.UserServiceException;
import com.fssa.betterme.exception.UserValidationException;
import com.fssa.betterme.model.User;
import com.fssa.betterme.service.TrainerService;
import com.fssa.betterme.service.UserService;
import com.fssa.betterme.util.PasswordHash;
@WebServlet("/Login")
public class Login extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        request.setAttribute("email", email);
        request.setAttribute("password", password);

        if (email != null && password != null) {
            handleUserAuthentication(email, password, request, response);
        } else {
            request.setAttribute("Error", "email or password is null");
            forwardToLoginPage(request, response);
        }
    }

    private void handleUserAuthentication(String email, String password, HttpServletRequest request,
                                          HttpServletResponse response)
            throws ServletException, IOException {

        // Constants
        final String ADMIN_EMAIL = "admin@gmail.com";
        final String ADMIN_PASSWORD = "password";

        if (ADMIN_EMAIL.equals(email) && ADMIN_PASSWORD.equals(password)) {
            handleAdminLogin(request, response);
        } else {
            TrainerService trainerService = new TrainerService();
            User currentUser = null;

            try {
                // Check if the user is a Trainer
                if (trainerService.getTrainnerPassByEmail(email) != null) {
                    handleTrainerLogin(email, password, request, response, trainerService);
                } else {
                    // If not a Trainer, check if it's a regular User
                    currentUser = UserService.getUserByEmail(email);
                    if (currentUser != null) {
                        handleUserLogin(currentUser, password, request, response);
                    } else {
                        // No match found, invalid login
                        request.setAttribute("Error", "Invalid email or password");
                        forwardToLoginPage(request, response);
                    }
                }
            } catch (EventValidationException | ServiceException | UserServiceException | UserValidationException e) {
                // Handle specific exceptions
                e.printStackTrace(); // Replace with appropriate logging
                request.setAttribute("Error", e.getMessage() + " Try SignUp");
                forwardToLoginPage(request, response);
                return; // Ensure that you exit the method after forwarding
            }

       
        }
    }

    private void handleAdminLogin(HttpServletRequest request, HttpServletResponse response)
            throws IOException {
        HttpSession session = request.getSession();
        session.setAttribute("loggedInUser", "admin@gmail.com");
        response.sendRedirect(request.getContextPath() + "/Admin/index.jsp");
    }

    private void handleUserLogin(User currentUser, String password, HttpServletRequest request,
                                 HttpServletResponse response)
            throws IOException, ServletException {
        String hashedPassword = null;
        try {
            hashedPassword = PasswordHash.hashPass(password);
        } catch (UserValidationException e) {
            // Handle hashing exception
        }

        if (currentUser.getPassword().equals(hashedPassword)) {
            HttpSession session = request.getSession();
            session.setAttribute("loggedInUser", currentUser.getEmail());
            response.sendRedirect(request.getContextPath() + "/index.jsp");
        } else {
            request.setAttribute("Error", "Invalid email or password");
            forwardToLoginPage(request, response);
        }
    }

    private void handleTrainerLogin(String email, String password, HttpServletRequest request,
                                    HttpServletResponse response, TrainerService trainerService)
            throws IOException, ServletException, EventValidationException, ServiceException {

        TrainerService TrainerService = new TrainerService();
        if (TrainerService.getTrainnerPassByEmail(email).equals(password)) {
            System.out.println(email);
            // Example: Redirect to Trainer dashboard
            HttpSession session = request.getSession();
            session.setAttribute("loggedInUser", email);
            response.sendRedirect(request.getContextPath() + "/Trainer/index.jsp");
            System.out.println(request.getContextPath() + "/Trainer/index.jsp");
        }
    }

    private void forwardToLoginPage(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        RequestDispatcher rd = request.getRequestDispatcher("./pages/html_pages/user_module/login.jsp");
        rd.forward(request, response);
    }
}
