axios({
    method: 'get',
    url : "https://jsonplaceholder.typicode.com/users",
})
.then(response => getTodo(response.data))
.catch(error => console.log("cannot get data"));

var getTodo = (todo) => {
    todo.forEach(element => {
        console.log(element);
    });
}