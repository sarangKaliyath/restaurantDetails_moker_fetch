export function Form({ children, onSubmit,setText}) {
  return (
    <form
      onSubmit={(e) => {
        onSubmit();
        setText("")
        e.preventDefault();
      }}
    >
      {children}
    </form>
  );
}
