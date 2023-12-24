import useFetch from "./hooks/useFetch";

function CustomHook3() {
  const { data, loading, error } = useFetch(`https://fakestoreapi.com/users/1`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{data?.email}</h1>
      <p>{data?.username}</p>
    </div>
  );
}

export default CustomHook3;
