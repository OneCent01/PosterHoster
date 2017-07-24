var Search = (props) => (
  <div>
    <form onChange={e => props.submit(e)} onSubmit={e => props.submit(e)}  >
  	  <input className="search-form" type="text"/>
  	  <button>Search</button>
  	</form>
  </div>
);

window.Search = Search;