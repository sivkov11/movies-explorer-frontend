class Auth {
  constructor(config) {
    this._baseUrl = config.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _headers() {
    return {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    }
  }

  register(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify(data)
    }).then(this._checkResponse)
  }

  login(data) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers(),
      body: JSON.stringify(data)
    }).then(this._checkResponse)
  }
}

const auth = new Auth({
  baseUrl: 'https://api.sivkov.movie.nomoredomains.monster'
})

export default auth