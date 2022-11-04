function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("erro, digite novamente!")
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'criancahomem.png')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemhomem.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultohomem.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        }
        else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'criancamulher.png')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
            }
            else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adultamulher.png')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}