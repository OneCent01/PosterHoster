var Poster = (props) => {
  var path = "http://image.tmdb.org/t/p/w185/" + props.poster.file_path;
  var key = props.index;
  return (
  	<div onClick={e => props.click(e, key)} className="posters">
  	  <img src={path}/>
  	</div>
  );
}

window.Poster = Poster;