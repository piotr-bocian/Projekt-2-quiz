
import checkMode from '../components/generateQuestion/generateQuestion'
export const App = ({options}) => {
    const playGameButton = document.getElementById("playButton");
playGameButton.addEventListener('click',()=>{
	const choicedMode = document.querySelector('li.active').textContent;


  	const fetchedApi = fetch('http://swapi.dev/api/people/')
  	.then(response => response.json())
  	.then(data => {console.log(data);
      return data
    })

    return fetchedApi
  });
}


