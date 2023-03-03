const STARWARSAPI = "https://swapi.dev/api/people/1";
const STARWARSAPI_SECOND = "https://swapi.dev/api/people/";

//** fetch 기본 사용*/ 
// fetch(STARWARSAPI) // api요청 : promise 객체로 받아온다.
// .then(response => { //response에는 정상 반환된 promise가 들어온다.
//     console.log("resoleved !!", response)
//     return response.json(); //fetch에서 사용하는 api요청을 통해 받아온 promise객체를 json으로 변환
//     //json값으로 리턴해야 다음 then에서 json 처리를 할수 있다.
// })
// .then (jsonData=>{
//     console.log(jsonData);
// })
// .catch(error => {
//     console.log(" Errro !!", error);
// })

//1 . fetch 함수가 api 요청을 동해 받아온 값을 Promise로 반환한다.
//2. 첫번쨰 then 에서 api요청에 의한 promise객체를 처리한다. (ex : json 변환)

//**여러번의 API 요청 하는 경우 처리(with fetch) */
// fetch(STARWARSAPI_SECOND+"1")
//     .then(response => { //첫번째 API요청에 의한 Promise 반환 객체 수신
//         console.log("fisrt API Request Done!");
//         return response.json(); //두번쨰 then에 전달하는 json
//     })
//     .then (jsoData => {
//         console.log("a Json Data From First Then !");
//         console.log(jsoData);
//         return fetch(STARWARSAPI_SECOND+"2");//세번째 then으로 전달할 API요청에 의한 Promise 객체
//     })
//     .then(secondResponse => {
//         console.log("second API Request ! DonE !");
//         return secondResponse.json();//네번째 then에 전달할 Json 객체

//     })
//     .then(secondJsonData => {
//         console.log("get Second Json Data ! Done !");
//         console.log(secondJsonData);
//     })
//     .catch(error=>console.log(error))

//**위의 코드 리팩토링 */

const getStarWarsPeople = async () => {
    const response1 = await fetch(STARWARSAPI_SECOND+"1");
    const response2 = await fetch(STARWARSAPI_SECOND+"2");
    const response1JsonData = await response1.json();
    const response2JsonData = await response2.json();
    return console.log(`${response1JsonData.name} Is a Friend of ${response1JsonData.name} !`);

}

getStarWarsPeople();