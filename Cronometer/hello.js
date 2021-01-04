const arrLeft=[
    {General:[["Energy","kcal","0%"],["Alcohol","g", "No Target"],["caffein","mg","No Target"],["water","g","0%"]]},
    {Carbohydrates:[["Carbs","g","0%"],["Fiber",'g','0%'],["Starch",'g',"No Target"],["Sugar",'g',"No Target"],["Net Carbs","g","0%"]]},
    {Lipids:[["Fats","g","0%"],["monounsaturated",'g',"No Target"],["polysaturated",'g',"No Target"],['omega-6',"g","0%"],["omega-3",'g',"0%"],["saturated","g","n/a"],["TransFat","g","n/a"],["cholestrol","mg","No Target"]]},
    {Protiens:[["protien","g","0%"],["cystine","g","0%"],["histidine","g","0%"],["isoleucein","g","0%"],["leucine","g","0%"],["Lysine","g","0%"],["Methyonine","g","0%"],["Phenylalanine","g","0%"],["Threonine","g","0%"],["tryptophan","g","0%"],["Tyrosine","g","0%"],["Valine","g","0%"]]},
]
for(i in arrLeft)
{
  
  for(k in arrLeft[i])
  {
      console.log(k)
      var data=arrLeft[i][k]
     for(row=0;row<arrLeft[i][k].length;row++)
     {
        // console.log(data[row])
     }
  }
}