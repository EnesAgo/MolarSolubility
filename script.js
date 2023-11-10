console.log(ions)

function calcKsp(){
    const KspResultTxt = document.getElementById("kspResult");
    const ElementOne = document.getElementById("KspOne").value;
    const ElementOneExp = document.getElementById("KspOneExp").value;
    const ElementTwo = document.getElementById("KspTwo").value;
    const ElementTwoExp = document.getElementById("KspTwoExp").value;

    const ElementOneNum = ElementOne.replace(/[^\d-]/g, '')
    const ElementTwoNum = ElementTwo.replace(/[^\d-]/g, '')

    const ElementOneStr = ElementOne.replace(/[0-9]/g, '');
    const ElementTwoStr = ElementTwo.replace(/[0-9]/g, '');


    const resOne = `[${ElementOneStr} <sup style="left: -2px;">${ElementOneExp}</sup>] <sup style="left: -2px;">${ElementOneNum}</sup> `;
    const resTwo = `[${ElementTwoStr} <sup style="left: -2px;">${ElementTwoExp}</sup>] <sup style="left: -2px;">${ElementTwoNum}</sup> `;

    const finalRes = `${resOne}× ${resTwo}`

    KspResultTxt.innerHTML = finalRes

}