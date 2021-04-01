function saveUsers() {
    var usersGame = localStorage.getItem("usersGame") ? JSON.parse(localStorage.getItem("usersGame")) : []
    var userMax;
    var scoreMax = usersGame[1].score
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
                    </tr>`
    })
    $(".tableSort").find("tbody").html(result)
    $(".tableSort").find("span").text(userMax.score)
    $(".tableSort").find("b").text(userMax.name)
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
    })
}