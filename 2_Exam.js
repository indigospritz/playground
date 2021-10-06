/**
 * if correct +4
 * if wrong -1
 * if blank 0
 * 
 * if final score < 0, then 0 else score
 * 
 */
const getScore = (correctAnswer, studentAnswers) => {
    
    // console.log(arrCorrectAns.forEach(function(e){
    //     if (arrStudentAns.has(e)) {
    //         arrCorrectAns.add(e)
    //     }
    // }))

    // let arrIntersection = arrCorrectAns.filter(function(x) {
    //     if (arrStudentAns.indexOf(x) != -1) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // });
    // return arrIntersection
    // console.log(arrIntersection)
}



    
    const answerKeys = ['a', 'd', 'b', 'e', 'c']
    // var checkSheet = new getScore()
    getScore(answerKeys, ['b', 'c', 'd', 'e', '']) // 1
    getScore(answerKeys, ['b', 'd', 'a', 'c', 'e']) // 1
    getScore(answerKeys, ['e', 'd', 'c', 'b', 'a']) // 1
    getScore(answerKeys, ['a', 'a', 'b', 'c', 'd']) // 2
