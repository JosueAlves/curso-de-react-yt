// function Title(props) {
function Title({ children }) {
  return (
    <h1 className="text-3xl text-slate-100 font-bold text-center">
      {/* {props.children} */}
      {children}
    </h1>
  );
}

export default Title;
