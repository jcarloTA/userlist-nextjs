

export async function getUsers() {
  try {
    const response = await fetch(
      `https://reqres.in/api/users`
    ).then((response) => response.json());
    console.log(response);
    return response.data;
  } catch (err) {
    return [];
  }
}