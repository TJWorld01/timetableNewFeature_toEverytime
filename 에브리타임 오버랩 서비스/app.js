const Lectures = {
    khwLectures : 
    {"조직행위론(다310)":"월10B목10B",
    "생산운영관리(연암104)":"월12A수12A",
    "인공지능과 경영(다308)":"수10B금10B", 
    "데이터관리론(다111)": "화01B목12A",
    "데이터 애널리틱스-머신러닝(다B108)":"월01B목01B",
    "서비스관리(다B106)":"화03A금03A", 
    "김혜원의 학원알바(영어학원)":"외부입력"}, 
    daeLectures :
    {"중앙도서관 근로(중도)" : "월10B금10B",
    "경영대 근로(다312)": "화06B수05A"},

    assaLectures : 
    {"김밥먹기(화장실)":"월12A화12A",
    "김밥먹기 심화(화장실)":"수06A목01B"},
    inssaLectures:
    {"크라임씬보기(집)":"목03A금01B",
    "파묘(영화관)":"금06B"},
    htjLectures :
    {"재무관리(다B106)":"월09A수09A",
    "인공지능과 경영(다308)":"수10B금10B",
    "인지심리학 및 실험(연암502)":"월12A수12A",
    "데이터관리론(다111)": "화01B목12A",
    "데이터 애널리틱스-머신러닝(다B108)":"월01B목01B",
    "빅데이터개론 및 분석(팔328)":"수01B금01B",
    "e-비즈니스 프로젝트[캡스톤디자인](다308)":"월03A수03A",
    "경력설계와 창업입문 1(다B108)":"수06A"
}
}

// console.log(khwLectures);
const allButton = document.querySelectorAll("input")
const khwButton = document.querySelectorAll("input")[0]

function addLectureTimes(param) {
    if (param.srcElement.checked == false){ // 체크 해제됐을 때
        const name = param.target.value //khw
        const nameLectures = Lectures[name+"Lectures"]; // {회계학원론:월A~}
        for (const i in nameLectures){
            const times = nameLectures[i]; //월10B목10B
            const info = i; //조직행위론(다310)
            for (const index of [0,4]){ //월 , 목 두개 반복
                let col = 0
                let row = 0
                let classType = "O"
                if (times[index] === "월"){
                    col = 1
                }else if (times[index] === "화"){
                    col = 2
                }else if (times[index] === "수"){
                    col = 3
                }else if (times[index] === "목"){
                    col = 4
                }else if (times[index] === "금"){
                    col = 5
                }else{
                    col = "외부입력"
                    continue
                }
                let startTime =times.substring(index+1,index+3);
                if (startTime >= 9 && startTime <= 12){
                    row = parseInt(startTime) - 8
                }
                else if(startTime>=1 && startTime <= 7 ){
                    row = parseInt(startTime) + 4  // Int로 변환시켜줘 오류 방지!
                }
                const classIndex = (row-1)*6 + col
                const classLocation = document.querySelectorAll("tr td")[classIndex] //66번째 tr 등..
                


                // 정규 표현식을 사용하여 괄호 안의 내용을 추출
                const classroomText = info.match(/\(([^)]+)\)/);
                let lect_N = ""
                let clas_N = ""
                // 괄호 안의 내용이 있다면 추출하여 변수에 저장
                if (classroomText) {
                    const lect = info.substring(0, classroomText.index);
                    const clas = classroomText[1];
                    
                    lect_N = lect
                    clas_N = clas
                } else {
                    console.log("괄호가 없거나 형식이 맞지 않습니다.");
                }
                for (const child of classLocation.childNodes){
                    if (child.innerText == lect_N+"\n"+clas_N){
                        console.log("삭제~");
                        child.remove()
                        break
                    } else{
                        console.log("삭제안해 ㅋ");
                    }
                    }
                    // console.log(child);
                }
            
            }}
    else{ // 체크됐을 때
        const name = param.target.value //khw
        const nameLectures = Lectures[name+"Lectures"]; // {회계학원론:월A~}
        for (const i in nameLectures){
            const times = nameLectures[i]; //월10B목10B
            const info = i; //조직행위론(다310)
            for (const index of [0,4]){ //월 , 목 두개 반복
                let col = 0
                let row = 0
                let classType = "O"
                if (times[index] === "월"){
                    col = 1
                }else if (times[index] === "화"){
                    col = 2
                }else if (times[index] === "수"){
                    col = 3
                }else if (times[index] === "목"){
                    col = 4
                }else if (times[index] === "금"){
                    col = 5
                }else{
                    col = "외부입력"
                    continue
                }
                let startTime =times.substring(index+1,index+3);
                if (startTime >= 9 && startTime <= 12){
                    row = parseInt(startTime) - 8
                }
                else if(startTime>=1 && startTime <= 7 ){
                    row = parseInt(startTime) + 4  // Int로 변환시켜줘 오류 방지!
                }
                const classIndex = (row-1)*6 + col
                const classLocation = document.querySelectorAll("tr td")[classIndex] //66번째 tr 등..
                


                // 정규 표현식을 사용하여 괄호 안의 내용을 추출
                const classroomText = info.match(/\(([^)]+)\)/);
                let lect_N = ""
                let clas_N = ""
                // 괄호 안의 내용이 있다면 추출하여 변수에 저장
                if (classroomText) {
                    const lect = info.substring(0, classroomText.index);
                    const clas = classroomText[1];
                    
                    lect_N = lect
                    clas_N = clas
                } else {
                    console.log("괄호가 없거나 형식이 맞지 않습니다.");
                }
                

                if (times[index+3] === "A"){
                    const createdClass = document.createElement('div')
                    createdClass.classList.add("time_oto15")

                    const lectureName = document.createElement('span') //회계학원론
                    lectureName.textContent = lect_N
                    lectureName.classList.add("lecture-name")

                    const classroomName = document.createElement('span') //다305
                    classroomName.textContent = clas_N
                    classroomName.classList.add("classroom-name")

                    console.dir(createdClass)
                    createdClass.append(lectureName)
                    createdClass.append(classroomName)
                    
                    


                    classLocation.append(createdClass)
                } else if(times[index+3] === "B"){
                    const createdClass = document.createElement('div')
                    createdClass.classList.add("time_30to45")

                    const lectureName = document.createElement('span') //회계학원론
                    lectureName.textContent = lect_N
                    lectureName.classList.add("lecture-name")

                    const classroomName = document.createElement('span') //다305
                    classroomName.textContent = clas_N
                    classroomName.classList.add("classroom-name")

                    console.dir(createdClass)
                    createdClass.append(lectureName)
                    createdClass.append(classroomName)
                    
                    


                    classLocation.append(createdClass)
                }
                console.dir(classLocation)

                console.log(classIndex);
    
        }


        }
}
}
allButton.forEach(function(button){
    button.addEventListener("change",addLectureTimes)
})