
async function getData() {
	let response = await axios.get('https://4geeksacademy.github.io/exercise-assets/txt/hello.txt');
    console.log(response.data);


    document.body.innerHTML = response.data;

}


getData(); 

