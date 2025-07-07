export function getUserId() {
  if (localStorage.getItem("session")) {
    const session = JSON.parse(localStorage.getItem("session"));
    return session.userId;
  }

  return null;
}
