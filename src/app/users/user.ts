
	//Create a Class for the user created in the Component to be passed back to the backend
	export class User {
	    constructor(public firstName: string,
	        public lastName: string,
           public email: string,
	        public password: string,
	        public confirmPassword: string,
	        public birthDate?: Date
	    ) { }
	}
