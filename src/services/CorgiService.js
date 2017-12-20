const API_URL = process.env.REACT_APP_API_URL;

const CorgiService = {
  fetchCorgis() {
    return fetch(`${API_URL}/corgis`)
      .then(response => response.json())
  }
}

export default CorgiService
