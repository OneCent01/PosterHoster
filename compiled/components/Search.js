"use strict";

var Search = function Search(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "form",
      { onChange: function onChange(e) {
          return props.submit(e);
        }, onSubmit: function onSubmit(e) {
          return props.submit(e);
        } },
      React.createElement("input", { className: "search-form", type: "text" }),
      React.createElement(
        "button",
        null,
        "Search"
      )
    )
  );
};

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2giLCJwcm9wcyIsInN1Ym1pdCIsImUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFNLFVBQVU7QUFBQSxpQkFBS0EsTUFBTUMsTUFBTixDQUFhQyxDQUFiLENBQUw7QUFBQSxTQUFoQixFQUFzQyxVQUFVO0FBQUEsaUJBQUtGLE1BQU1DLE1BQU4sQ0FBYUMsQ0FBYixDQUFMO0FBQUEsU0FBaEQ7QUFDQyxxQ0FBTyxXQUFVLGFBQWpCLEVBQStCLE1BQUssTUFBcEMsR0FERDtBQUVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQURGLEdBRFc7QUFBQSxDQUFiOztBQVNBQyxPQUFPSixNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPGZvcm0gb25DaGFuZ2U9e2UgPT4gcHJvcHMuc3VibWl0KGUpfSBvblN1Ym1pdD17ZSA9PiBwcm9wcy5zdWJtaXQoZSl9ICA+XG4gIFx0ICA8aW5wdXQgY2xhc3NOYW1lPVwic2VhcmNoLWZvcm1cIiB0eXBlPVwidGV4dFwiLz5cbiAgXHQgIDxidXR0b24+U2VhcmNoPC9idXR0b24+XG4gIFx0PC9mb3JtPlxuICA8L2Rpdj5cbik7XG5cbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7Il19