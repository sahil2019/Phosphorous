const arrLeft=[
    {General:[["Energy","kcal","0%"],["Alcohol","g", "No Target"],["caffein","mg","No Target"],["water","g","0%"]]},
    {Carbohydrates:[["Carbs","g","0%"],["Fiber",'g','0%'],["Starch",'g',"No Target"],["Sugar",'g',"No Target"],["Net Carbs","g","0%"]]},
    {Lipids:[["Fats","g","0%"],["monounsaturated",'g',"No Target"],["polysaturated",'g',"No Target"],['omega-6',"g","0%"],["omega-3",'g',"0%"],["saturated","g","n/a"],["TransFat","g","n/a"],["cholestrol","mg","No Target"]]},
    {Protiens:[["protien","g","0%"],["cystine","g","No Target"],["histidine","g","0%"],["isoleucein","g","0%"],["leucine","g","0%"],["Lysine","g","0%"],["Methyonine","g","0%"],["Phenylalanine","g","0%"],["Threonine","g","0%"],["tryptophan","g","0%"],["Tyrosine","g","0%"],["Valine","g","0%"]]},
]
const arrRight=[
    {Vitamins:[["B1(Thiamine)","mg","0%"],["B12(Cobalmin)","mg","No Target"],["Folate","mg","0%"],["Vitamin A","mg","0%"],["Vitamin C","mg","0%"],["Vitamin D","mg","0%"],["Vitamin E","mg","0%"],
    ["B2(Riboflavin)","mg","0%"],["B3(Niacine)","mg","0%"],["B5(pantothenicAcid)","mg","0%"],["B6(Pyridoxine)","mg","0%"],["Vitamin K","mg","0%"]]},
    {Minerals:[["calcium","mg","0%"],["copper","mg","No target"],["Iron","mg","0%"],["calcium","mg","0%"],["Magnesium","mg","0%"],
    ["Manganese","mg","0%"],["Phosphorous","mg","0%"],["calcium","mg","0%"],["calcium","mg","0%"],]}

]
var i=0;
var j=0;
function loadData()
{
    html=""
    for(i in arrLeft)
    {
        var inter=""
        for(j in arrLeft[i])
        {
            
            inter+=`<tr><th colspan="3" class="table__upper__part">${j}</th></tr>`
            var data=arrLeft[i][j]
            for(row=0;row<data.length;row++)
            {
                var innerRows=""
                for(col=0;col<data[row].length;col++)
                {
                    if(col==2)
                    {
                        innerRows+=`
                    <td ><div class="last__col__border">${data[row][col]}</div></td>        
                    `
                    }
                    else{
                        innerRows+=`
                    <td>${data[row][col]}</td>        
                    `
                    }
                    
                }
                if(row%2==1)
                {
                    inter+=`<tr bgcolor="#ddd">${innerRows}</tr>`
                }
                else{
                    inter+=`<tr>${innerRows}</tr>`
                }
               
            }
            html+=`<table class="indiv__tables">${inter}</table>`
        }
    }
    document.getElementById('table__left__div').innerHTML=html
    i++
}
function loadData2()
{
    html=""
    for(i in arrRight)
    {
        var inter=""
        for(j in arrRight[i])
        {
            
            inter+=`<tr><th colspan="3" class="table__upper__part">${j}</th></tr>`
            var data=arrRight[i][j]
            for(row=0;row<data.length;row++)
            {
                var innerRows=""
                for(col=0;col<data[row].length;col++)
                {
                    if(col==2)
                    {
                        innerRows+=`
                    <td ><div class="last__col__border">${data[row][col]}</div></td>        
                    `
                    }
                    else{
                        innerRows+=`
                    <td>${data[row][col]}</td>        
                    `
                    }
                    
                }
                if(row%2==1)
                {
                    inter+=`<tr bgcolor="#ddd">${innerRows}</tr>`
                }
                else{
                    inter+=`<tr>${innerRows}</tr>`
                }
               
            }
            html+=`<table class="indiv__tables">${inter}</table>`
        }
    }
    document.getElementById('table__right__div').innerHTML=html
    j++
}
if(i==0&&j==0)
{
loadData()
loadData2()
}
