// create class object
const myhttp = new httpRequest;
// get data
myhttp.get('https://jsonplaceholder.typicode.com/users');

// post data or insert data
const data = {
  name: "joyonto",
  username: "kumar",
  email: "demo@gmail.com"
}
myhttp.post('https://jsonplaceholder.typicode.com/users', data);

// update data
myhttp.put('https://jsonplaceholder.typicode.com/users/3', data);

// delete data
myhttp.delete('https://jsonplaceholder.typicode.com/users/3');

