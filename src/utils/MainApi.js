class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
  }

  _headers() {
    return {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  addMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify(movie)
    }).then(this._checkResponse)
  }

  removeMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers()
    }).then(this._checkResponse)
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers()
    }).then(this._checkResponse)
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.sivkov.movie.nomoredomains.monster'
})

export default mainApi