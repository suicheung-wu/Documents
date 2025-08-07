const Rchild = ({className, v1, v2, id}) => {
    console.log(v2);
    return React.createElement("p", { className: className, id: id }, v1);
};
const SubComponent = () => {
    return React.createElement("div", null, [
        React.createElement(Rchild, {
            className: "test",
            v1: "hello world", 
            v2: "world"
        }),
        React.createElement(Rchild, { v1: "hello world 2"}),
  ]);
};
const App = () => {
  return React.createElement(SubComponent);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
