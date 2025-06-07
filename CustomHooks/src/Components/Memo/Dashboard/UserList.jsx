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