const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
			animal : "Dog",
			name : "Dabloo",
			breed : "Shephard"
		}),
    React.createElement(Pet, {
			animal : "Cat",
			name : "Meow",
			breed : "Ginger"
		}),
    React.createElement(Pet, {
			animal : "Hen",
			name : "Cock",
			breed : "Murgi"
		}),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
