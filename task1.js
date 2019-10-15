let Students = [{ firstName: 'Дмитро', secondName: 'Шиндор', ratting: 36 },
    { firstName: 'Віталій', secondName: 'Беркита', ratting: 73 },
    { firstName: 'Роман', secondName: 'Тимчук', ratting: 83 },
    { firstName: 'Вадим', secondName: 'Вітенко', ratting: 84 },
    { firstName: 'Святослав', secondName: 'Василів', ratting: 82 },
    { firstName: 'Марія', secondName: 'Могильська', ratting: 94 },
    { firstName: 'Андрій', secondName: 'Гриньків', ratting: 87 },
    { firstName: 'Назар', secondName: 'Косюк', ratting: 80 },
    { firstName: 'Назар', secondName: 'Лепак', ratting: 60 },
    { firstName: 'Сергій', secondName: 'Баріда', ratting: 36 },
    { firstName: 'Богдан', secondName: 'Липак', ratting: 60 },
    { firstName: 'Юрій', secondName: 'Мішуткін', ratting: 79 },
    { firstName: 'Володимир', secondName: 'Перестюк', ratting: 90 },
    { firstName: 'Костянтин', secondName: 'Бова', ratting: 60 },
    { firstName: 'Владислав', secondName: 'Семчишин', ratting: 83 },
    { firstName: 'Назар', secondName: 'Сидяга', ratting: 60 },
    { firstName: 'Дмитро', secondName: 'Філь', ratting: 82 },
    { firstName: 'Артем', secondName: 'Крупник', ratting: 85 },
    { firstName: 'Назар', secondName: 'Чорний', ratting: 84 },

];

let result = document.getElementById('result');

function sortSurname() {
    Students.sort(function(a, b) {
        let nameA = a.secondName.toUpperCase();
        let nameB = b.secondName.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
};

function SortAndShowSurname() {
    result.innerHTML = "";
    sortSurname();
    Students.forEach(function(element) {
        let s = element.firstName + '   ' + element.secondName;
        result.innerHTML += s;
        result.innerHTML += " <br>";
    });
};

function SortAndShowRatting() {
    result.innerHTML = '';
    sortRatting();
    Students.forEach(function(element) {
        let s = element.ratting + '  &nbsp;&nbsp;&nbsp;&nbsp; ' + element.firstName + '   ' + element.secondName + ' ';
        result.innerHTML += s;
        result.innerHTML += " <br>";
    });
}

function showNewStudents(n) {
    document.write(newStudent[n].firstName + "   " + newStudent[n].secondName + "   " + newStudent[n].ratting + "   " + newStudent[n].rate + "%");
    document.write('<br>');
    document.write('<hr>');
};

function sortRatting() {
    Students.sort(function(a, b) {
        let nameA = a.ratting;
        let nameB = b.ratting;
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });
}
let s, mark;

function worstStudent() {
    sortRatting();
    result.innerHTML = '';
    mark = Students[0].ratting;
    s = Students[0].firstName + '  ' + Students[0].secondName;
    for (let i = 1; i < Students.length; i++) {
        if (Students[i].ratting > Students[0].ratting) {
            break;
        } else {
            s = s + ", " + Students[i].firstName + "   " + Students[i].secondName;
        }
    }
    result.innerHTML = "Студент(-и) з найменшою оцінкою: " + mark + "  " + s;
}

function avrgStudent() {
    result.innerHTML = '';
    let avrgSum = 0;
    for (let i = 0; i < Students.length; i++) {
        avrgSum = avrgSum + Students[i].ratting;
    }
    avrgSum = avrgSum / 20;
    avrgId = 0;
    temp = Math.abs(Students[0].ratting - avrgSum);
    for (let i = 0; i < Students.length; i++) {
        temp1 = Math.abs(avrgSum - Students[i].ratting);
        if (temp1 <= temp) {
            temp = temp1;
            avrgId = i;
        }
    }
    result.innerHTML = "Студент із середньою оцінкою: " + "  " + Students[avrgId].ratting + "  <br>" + Students[avrgId].firstName + "   " + Students[avrgId].secondName;

}

function bestStudent() {
    result.innerHTML = '';
    sortRatting();
    mark = Students[Students.length - 1].ratting;
    s = Students[Students.length - 1].firstName + '  ' + Students[Students.length - 1].secondName;
    for (let i = Students.length - 2; i > 0; i--) {
        if (Students[i].ratting < Students[Students.length - 1].ratting) {
            break;
        } else {
            s = s + ", " + Students[i].firstName + "   " + Students[i].secondName;
        }
    }
    result.innerHTML = "Студент(-и) з найбільшою оцінкою: " + mark + "  " + s;
}

function Rate() {
    let maxRatting = 0;
    sortRatting();
    maxRatting = Students[Students.length - 1].ratting;
    sortSurname();
    let newStudent = Students;
    result.innerHTML = '';
    for (let i = 0; i < Students.length; i++) {
        newStudent[i].rate = (100 - (newStudent[i].ratting / maxRatting) * 100).toFixed(1);
        result.innerHTML += newStudent[i].rate + '%' + "  ——  " + newStudent[i].firstName + ' ' + newStudent[i].secondName;
        result.innerHTML += '<br>'
    }
}