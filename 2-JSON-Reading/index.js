

async function getData() {
	let response = await axios.get('https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json'); 
    console.log(response.data);
    let userData = response.data;
    document.querySelector ("#output").innerHTML = `
    <ul>
        <li>Name: ${userData.Name}</li>  
        <li>Mobile Number: ${userData.Mobile}</li>
        <li>Current Address: ${userData.Address["current Address"]}</li>
        <li>Permanent Address: ${userData.Address["Permanent address"]}</li>
    </ul>`;


}


getData(); 
