const persons = document.getElementById("person");

async function getData() {
  const url = "http://localhost:3000/";
  const response = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    });
  if (!response.error) {
    // console.log(response);
    for (let i = 0; i < response.data.length; ++i) {
      //   console.log(response.data[i]);
      let person = `
      <div>
      <h2>${response.data[i].name}</h2>
      <p>${response.data[i].age}</p>
      </div>
      `;
      persons.innerHTML += person;
    }
  } else {
    console.log(response.error.message);
  }
}
getData();
