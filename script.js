const getData = () => {
   fetch('db.json')
      .then((response) => response.json())
      .then((data) => {
         sendData(data)
         console.log(data)
      })
      .catch((error) => console.log(error))
}

const sendData = (user) => {
   fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
   })
      .then((response) => response.json())
      .then((user) => console.log(user))
      .catch((error) => console.log(error))
}

getData()