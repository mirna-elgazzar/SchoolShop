
export class SchoolReview {
	    constructor(
			//public school_id: string,
			public school_id: string,
			public school_name: string,
			public rating: string,
            public commentAvailable?: boolean,
            public comment?: string,
	        public language?: string,
			public user_name?: string,
	        
	    ) { }
	} 

	/*
	school_name: { type: String, required: true },
	school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        //required: true
    },
    user_name: { type: String },
    comment: { type: String },
    rating: {type: String},
    language: { type: String },
    time_string: { type: String },
    time: {
        type: Date,
        default: Date.now
    },

    //if user logged in:
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        //required: true
    }
	
	 */