const searchForm = document.querySelector("#searchFrom");
searchForm.addEventListener('submit',async (element)=>{
    element.preventDefault(); //화면전환 방지 함수
    
    const searchText = searchForm.elements.query.value //elements요소의 name이 query이며 그값을 표출
    const config = {params : {"q": searchText}};
    const tvApiResponse = await axios.get(`https://api.tvmaze.com/search/shows?`, config);
    //console.log(tvApiResponse.data[0].show.image.medium);

    makeImages(tvApiResponse.data);
})

const makeImages = (images) => {
    for (let result of images){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
        
    }
}

