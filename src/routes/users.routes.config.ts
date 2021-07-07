import {CommonRoutesConfig} from "../common/common.routes.config";
import  UserController  from "../controller/user.controller.config";
import express from "express";

//let usercont = new UserController();

export class UserRoutes extends CommonRoutesConfig{
	constructor(app: express.Application){
		super(app,'UserRoutes');
	}

	configureRoutes(){
		//we'll add the actual route config here next


		this.app.route('/users')
			.get(/*(req: express.Request , res: express.Response)=>{
				//const ans = usercont.getAllUsers(req,res);
				//console.log(ans);
				res.status(200).send("get all users");
			}*/ UserController.getAllUsers)
			.post(/*(req: express.Request , res: express.Response)=>{

			//	usercont.create(req,res);
				res.status(200).send("Post to users");
			},*/UserController.create);
		this.app.route('/users/:userId')
			.all((req: express.Request,res: express.Response,next: express.NextFunction)=>{
				//this middleware function runs before any request to /user/:userid
				//but it doesn't accomplish anything just yet ---
				//it simplly passes control to the next applicatble function below using next();

				next();
			})
			.get((req: express.Request , res:express.Response )=>{
				try{
				//	const ans = usercont.getUserDetails(req, res);
					res.status(200).send("get id details");
				}catch(e){
					console.log(e);
				}
			})
			.put((req,res)=>{
				res.status(200).send('Put requested for id PUT requested for id ${req.params.userID}');
			})
			.patch((req: express.Request , res:express.Response)=>{
				res.status(200).send("PATCH request for id $(req.params.userId)");
			})
			.delete((req:express.Request , res: express.Response)=>{
				res.status(200).send("delete requested for id ${req.params.userId}");
			});
		return this.app;
	}
}
