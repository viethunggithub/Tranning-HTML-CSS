function saveUsers() {
    var usersGame = localStorage.getItem("usersGame") ? JSON.parse(localStorage.getItem("usersGame")) : []
    var userMax = usersGame[0]
    var scoreMax = usersGame[0].score

    showListUser(usersGame, scoreMax, userMax)
        // khi click vào nút chơi lại
    $(".playBack, .playBack01,.choiLai").click(function() {
            location.reload();
            $(".alertTheEnd").hide();
            $(".tableSort").hide();
        })
        // Khi click vào bảng xếp hạng
    $(".sort").click(function() {
            $(".tableSort").show()
        })
        // Khi click xóa user
    $(".deleteUser").click(function() {
        var ele = JSON.parse($(this).attr("ele"))
        var id;
        usersGame.forEach((element, index) => {
            if (element.name === ele.name) {
                id = index
            }
        })
        usersGame.splice(id, 1)
        localStorage.setItem("usersGame", JSON.stringify(usersGame))
        showListUser(usersGame, scoreMax, userMax)
    })

    // Khi click nút Quay lại
    $(".goback").click(function() {
            $(".tableSort").hide()
            $(".alertTheEnd").show()
        })
        // Khi click save
    $(".save").click(function() {
        var scoreUser = $(".alertTheEnd").find("span").text()
        var nameUser = $(".saveUser").find("input").val()
        var dateCurrent = new Date();
        var user = {
            name: nameUser,
            score: scoreUser,
            date: `${dateCurrent.toLocaleString()}`
        }
        if (scoreUser != "" && nameUser != "") {
            usersGame.push(user)
            localStorage.setItem("usersGame", JSON.stringify(usersGame))
            $(".action").show();
        }
        showListUser(usersGame, scoreMax, userMax)
    })


}

function showListUser(usersGame, scoreMax, userMax) {
    usersGame.sort(function(a, b) {
        return Number(b.score) - Number(a.score)
    })
    var result = ``;
    usersGame.forEach((ele, index) => {
        if (Number(ele.score) > Number(scoreMax)) {
            scoreMax = Number(ele.score);
            userMax = ele;
        }
        result += `<tr>
                        <td>${index+1}</td>
                        <td>${ele.name}</td>
                        <td>${ele.score}</td>
                        <td>${ele.date}</td>
                        <td>
                            <i ele='${JSON.stringify(ele)}' class="fas fa-trash-alt deleteUser"></i>
                        </td>
                    </tr>`
    })
    $(".tableSort").find("tbody").html(result)
    $(".tableSort").find("span").find("b:first-child").text(` ` + userMax.name)
    $(".tableSort").find("span").find("b:last-child").text(` ` + userMax.score)

}

function alertTheEnd(intervals, timeouts) {
    // Mất control bird && clear các hàm
    lanhCong = true;
    $(".XT_TA, .mana_XT_TA, .NHT, .MB_TL").remove()
    thanhMau_MB_TL.forEach((ele, inde) => {
        $(`.${ele}`).remove()
    })
    intervals.forEach((ele, index) => {
        return (
            clearInterval(ele)
        )
    })
    timeouts.forEach((element, ind) => {
        return (
            clearTimeout(element)
        )
    })

    $(".alertTheEnd").show();
    var score = $(".score").find("b").text()
    $(".alertTheEnd").find("strong").find("span").text(score)
}