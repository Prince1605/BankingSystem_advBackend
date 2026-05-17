const express=require("express")
const authMiddleware=require("../middleware/auth.middleware")
const accountController=require("../controllers/account.controller")

const router=express.Router()


/**
 * -POST /api/accounts/
 * -Create a new account
 * -Protected Route
 */

router.post("/",authMiddleware.authMiddleware,accountController.createAccountController)

/**
 * -GET/api/accounts/
 * -get all acounts of the logged-in user
 * -Protected Route
 */

router.get("/",authMiddleware.authMiddleware,accountController.getUserAccountController)

/**
 * -GET /api/accounts/balance 
 * -Get balance of all accounts od the loogged-in user
 * -Protected Route
 */

router.get("/balance/:accountId",authMiddleware.authMiddleware,accountController.getAccountBalance)

module.exports=router;