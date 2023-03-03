// const STARWARSAPI = "https://swapi.dev/api/people/1";

// //html에 CDN 방식으로 Axios가 임포트 되어있음
// //**1. Axios로 API 요청하기 */
// // axios.get(STARWARSAPI)
// // .then(response => {
// //     console.log("response Done!");
// //     console.log(response); 
// //     //fetch와 다르게 처음부터 반환되는 값이 json이다.
// //     // resoponse.data로 반환 json을 볼수 있다.
// // })
// // .catch(error=>{
// //     console.log(error);
// // })

// //** 2. async와 Axios의 사용 */
// const getStarwasPeople = async (id) =>{
//     try{
//         const response = await axios.get(`https://swapi.dev/api/people/${id}`);
//         console.log(response.data);
//     } catch (error) {
//         console.log(error);
//     }
    
// }

// console.log(" Use Axios with Async");
// getStarwasPeople(5);

//** Axios를 사용한 API 요청에 Header 입력하기 */
const dadJokeAPI = "https://icanhazdadjoke.com/"
//랜덤으로 아재개그 치는 API(미국식 조크)

const jokes = document.querySelector("#jokes");
const getDadJoke = async ()=> {
    const response = await axios.get(dadJokeAPI, {
        headers:{"Accept":"application/json"}
        // axios 헤더입력 방법, params도 동일
    })
    const dadJoke = response.data.joke;
    return dadJoke;
}

const createJokeButton = document.querySelector("#jokebutton");
createJokeButton.addEventListener('click',async ()=>{
     //무조건  async와  await를 해주어야 Promise로 반환되는 getDadJoke함수를 기다릴수있다.
    const jokeText = await getDadJoke();
    const jokeLi = document.createElement('li');
    jokeLi.append(jokeText);
    jokes.appendChild(jokeLi);
    
})