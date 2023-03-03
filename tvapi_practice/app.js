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
    removeBeforeImages();

    for (let result of images){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
        
    }
}

function removeBeforeImages() {
    // search 버튼을 눌렀을때, 이전에 있던 것들 삭제
    const beforeImages = document.querySelectorAll('img');
    if (beforeImages.length > 0) {
        for (let image of beforeImages){
            image.remove();
        }
    }
}

