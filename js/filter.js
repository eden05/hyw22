//정보 셋팅 [DB대신 json파일 임시 생성]
let arryPoster = [
  { name: "김설하", item: "001" },
  { name: "이제윤", item: "001" },
  { name: "이하연", item: "001" },
  { name: "송민지", item: "002" },
  { name: "이송이", item: "002" },
  { name: "손규령", item: "003" },
  { name: "김민지", item: "003" },
  { name: "김민선", item: "003" },
  { name: "장예원", item: "004" },
  { name: "정진아", item: "004" },
  { name: "조여빈", item: "004" },
  { name: "김주미", item: "005" },
  { name: "권희선", item: "005" },
  { name: "이다혜", item: "005" },
  { name: "이지은", item: "005" },
  { name: "윤주연", item: "006" },
  { name: "김서윤", item: "007" },
  { name: "강은지", item: "008" },
  { name: "김시연", item: "008" },
  { name: "서유진", item: "008" },
  { name: "정은하", item: "008" },
  { name: "강윤희", item: "009" },
  { name: "김수민", item: "009" },
  { name: "김채린", item: "009" },
  { name: "박민영", item: "009" },
  { name: "임서연", item: "009" },
  { name: "한다예", item: "010" },
  { name: "임윤아", item: "010" },
  { name: "최고은", item: "010" },
  { name: "최지민", item: "010" },
  { name: "송예림", item: "011" },
  { name: "고영빈", item: "011" },
  { name: "김보아", item: "011" },
  { name: "김예린", item: "011" },
  { name: "박윤비", item: "011" },
  { name: "김다은", item: "012" },
  { name: "윤채영", item: "012" },
  { name: "여승민", item: "012" },
  { name: "이유진", item: "012" },
  { name: "박주영", item: "013" },
  { name: "김수림", item: "014" },
  { name: "도혜진", item: "014" },
  { name: "문지윤", item: "014" },
  { name: "신진영", item: "014" },
  { name: "전효정", item: "014" },
  { name: "구민주", item: "015" },
  { name: "고수진", item: "015" },
  { name: "김혜진", item: "015" },
  { name: "문한주", item: "015" },
  { name: "이은희", item: "015" },
];

//배열 담을 배열
let showingArry = [];

// 배열 섞기 함수
const shuffleArray = (array) => {
  for (var i = 0; i < array.length; i++) {
    var j = Math.floor(Math.random() * (i + 1));
    const temp = array[i]; //빈 곳에  배열i를 저장
    array[i] = array[j]; //배열 j를 배열 i에 저장
    array[j] = temp; //상수 x를 배열 j에 저장
  }
  return array;
};

for (let i = 0; i < arryPoster.length; i++) {
  let posters = `<div class="itemBox" data-item="${arryPoster[i].item}"><img src="./img/${arryPoster[i].name}.jpg" alt="${arryPoster[i].name}" id="${arryPoster[i].item}"><div class="overlay"><div class="text">${arryPoster[i].name}</div></div></div>`;
  showingArry.push(posters);
  //console.log("ap-" + arryPoster);
}

shuffleArray(showingArry);

$(document).ready(function () {
  //섞은 배열을 출력하기
  $(".poster").append(showingArry);

  let list = $(".list");
  let itemBox = $(".itemBox");

  itemBox.on("click", function (e) {
    const nodes = [...e.target.parentElement.children];
    //const index = nodes.indexOf(e.target);
    let a = nodes[0].id.slice(1);
    console.log(a);
    //console.log(nodes[0].id);
    $("#" + String(a)).show();
    //$("#001").show();
  });

  list.on("click", function () {
    list.removeClass("active");
    $(this).addClass("active");
    let dataFilter = $(this).attr("data-filter");
    //console.log(showingArry);

    itemBox.each(function () {
      $(this).addClass("hide");
      $(this).removeClass("active");
      if ($(this).attr("data-item") == dataFilter || dataFilter == "all") {
        $(this).addClass("active");
        $(this).removeClass("hide");
      }
    });
  });
});

const modal = document.getElementById("id01");

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    //console.log('onclick');
  }
};
