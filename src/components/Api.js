export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {

      headers: 
        this._headers
      ,
    })
      .then(res => res.ok ? res.json(): Promise.reject(`Error: ${res.status}`))
 
        .catch((err) => {
          console.error(err);
});
      
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {

      headers: 
        this._headers
      ,
    })
      .then(res => res.ok ? res.json(): Promise.reject(`Error: ${res.status}`))
 
        .catch((err) => {
          console.error(err);
});
      
  }

 profileEdit({ title, description }) {
  return fetch(`${this._baseUrl}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      name: title,
      about: description,
    }),
  }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`),
  );
}
    


 addCard({name, link}) {
  return fetch(`${this._baseUrl}/cards`, {
    method: "POST",
    headers:this._headers,
    body: JSON.stringify({
      name,
      link,
    }),
   }).then((res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`),
  );
}

deleteCard(cardId) {
  return fetch(`${this._baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: this._headers,
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

 }

