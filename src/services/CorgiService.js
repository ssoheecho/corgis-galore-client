const CorgiService = {
  fetchCorgis() {
    return fetch('/corgis')
      .then(response => response.json())
  }
}

export default CorgiService
