class ApiClient {
  constructor(request) {
    this.request = request;
  }

  async get(path, options = {}) {
    return this.request.get(path, options);
  }

  async post(path, data, options = {}) {
    return this.request.post(path, { ...options, data });
  }
}

module.exports = ApiClient;
