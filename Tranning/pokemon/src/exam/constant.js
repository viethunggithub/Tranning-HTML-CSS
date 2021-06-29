class Constant {
    toUppercaseChart(string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
    toChangeID(idstring) {
        var result = ''
        switch (`${idstring}`.length) {
            case 1:
                result = `#00${idstring}`
                break;
            case 2:
                result = `#0${idstring}`
                break;
            default:
                result = `#${idstring}`
        }
        return result;
    }
    toChangeBg(name, colorWhite) {
        var bg1 = '',
            bg2 = '',
            color = ''
        switch (name) {
            case 'normal':
                bg1 = '#a4acaf'
                bg2 = '#a4acaf'
                color = '#212121'
                break;
            case 'fighting':
                bg1 = '#d56723'
                bg2 = '#d56723'
                break;
            case 'flying':
                bg1 = '#3dc7ef'
                bg2 = '#bdb9b8'
                color = '#212121'
                break;
            case 'poison':
                bg1 = '#b97fc9'
                bg2 = '#b97fc9'
                break;
            case 'ground':
                bg1 = '#f7de3f'
                bg2 = '#ab9842'
                color = '#212121'
                break;
            case 'rock':
                bg1 = '#a38c21'
                bg2 = '#a38c21'
                break;
            case 'bug':
                bg1 = '#729f3f'
                bg2 = '#729f3f'
                break;
            case 'ghost':
                bg1 = '#7b62a3'
                bg2 = '#7b62a3'
                break;
            case 'steel':
                bg1 = '#9eb7b8'
                bg2 = '#9eb7b8'
                color = '#212121'
                break;
            case 'fire':
                bg1 = '#fd7d24'
                bg2 = '#fd7d24'
                break;
            case 'water':
                bg1 = '#4592c4'
                bg2 = '#4592c4'
                break;
            case 'grass':
                bg1 = '#9bcc50'
                bg2 = '#9bcc50'
                color = '#212121'
                break;
            case 'electric':
                bg1 = '#eed535'
                bg2 = '#eed535'
                color = '#212121'
                break;
            case 'psychic':
                bg1 = '#f366b9'
                bg2 = '#f366b9'
                break;
            case 'ice':
                bg1 = '#51c4e7'
                bg2 = '#51c4e7'
                color = '#212121'
                break;
            case 'dragon':
                bg1 = '#53a4cf'
                bg2 = '#f16e57'
                break;
            case 'dark':
                bg1 = '#707070'
                bg2 = '#707070'
                break;
            case 'fairy':
                bg1 = '#fdb9e9'
                bg2 = '#fdb9e9'
                color = '#212121'
                break;
            case 'shadow':
                bg1 = 'red'
                bg2 = 'red'
                break;
            default:
                bg1 = 'red'
                bg2 = 'red'
        }
        return {
            background: `linear-gradient(180deg, ${bg1} 50%, ${bg2} 50%)`,
            backgroundbg1: `${bg1}`,
            color: colorWhite ? `${colorWhite}` : `${color}`
        }
    }
    toAddTagLi(number) {
        var isCheck = []
        for (var j = 0; j <= 15 - number; j++) {
            isCheck.push(<li key={j + 20}></li>)
        }
        for (var i = 1; i <= number; i++) {
            isCheck.push(<li style={{ background: "#30a7d7" }} key={i}></li>)
        }
        return isCheck
    }
    toOfsetCartoon(idString) {
        var idEvolution
        switch (Number(idString) % 3) {
            case 1:
                idEvolution = Number(idString)
                break;
            case 2:
                idEvolution = Number(idString) - 1
                break;
            default:
                idEvolution = Number(idString) - 2
        }
        return idEvolution
    }
    toOptionAbility(abilitys) {
        var result = abilitys.filter((item, index) => {
            return item.is_hidden === false
        })
        return result
    }
    toSortPokemon(arrays, isSortAtoZ) {
        return arrays.sort(function (a, b) {
            var x = a.name.toUpperCase()
            var y = b.name.toUpperCase()
            if (x > y) { return isSortAtoZ }
            if (x < y) { return -isSortAtoZ }
            return 0
        })
    }
    toPaginationPokemon(arrays, start) {
        var result = []
        for (var i = start; i < start + 20; i++) {
            result.push(arrays[i])
        }
        return result
    }
    toSearchPokemon(arrays, keySearch) {
        var urlLength = 'https://pokeapi.co/api/v2/pokemon/'.length;
        var result = []
        arrays.map((item, index) => {
            if (item.name.toUpperCase().includes(keySearch.toUpperCase()) ||
                Number(keySearch) === 0 ||
                item.url.substr(urlLength).includes(keySearch)) {
                result.push(item)
            }
        })


        return result
    }
}
export default new Constant();