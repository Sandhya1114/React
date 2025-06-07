const UsersList = ({ users }) => {
  console.log('Sorting users...');
  const sortedUsers = useMemo(() => {
    console.log('Sorting users...');
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }, [users]); // 🔁 Only re-run if users change

  return (
    <ul>
      {sortedUsers.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
export default UsersList
/**useMemo(() => computeSomething, [dependencies]) is a React Hook that memoizes a value so that the expensive calculation doesn’t run again unless needed. */
/* react.memo: when a component is rerendered the children also get rerendered so we cover the children component in memo so that it doesn't get rerendered.
react.callback-function...when we use react.memo the immutable strings as prop do not rerender the component but the same prop that is a function will always rerender the component so we use react.callback...
useMemo-when we do a calculation over some things...if the things do not change the calculation will not change that is why we add the
"things" in the dependency in useMemo */