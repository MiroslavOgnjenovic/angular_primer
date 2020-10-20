app.factory('movieDB',function(){
	var allMovies = movies;
	return allMovies;
})

var movies = [
		{
			name : "Me Before Yoy",
			genre : "drama"
		},
		{
			name : "The Magnificient Seven",
			genre : "western"
		},
		{
			name : "The Revenant",
			genre : "western"
		},
		{
			name : "Lights Out",
			genre : "horor"
		},
		{
			name : "Bad Moms",
			genre : "comedy"
		},
		{
			name : "Ghostbusters",
			genre : "comedy"
		}

	];