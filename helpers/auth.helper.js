function bearerToken(token) {
  return { Authorization: `Bearer ${token}` };
}

module.exports = { bearerToken };
