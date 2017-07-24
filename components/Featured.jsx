var Featured = (props) => {
  var path = "http://image.tmdb.org/t/p/w185/" + props.poster.file_path;
  return (
  	<div>
	  <img className="featured-poster" src={path}/>
	</div>
  )
};