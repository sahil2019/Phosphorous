//  let html=""
//  const image=["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAbCAYAAABm409WAAABhElEQVR42rVWTU6DQBSeI/QIPUJvIEln0pmYaBcuFExkI7Czexd2b6IcgbVg6E53kniAdg8Eb9DeoL6HTENbsFpmXvLCMMD3vf+BkAZxQmviRtaHVCe6Gstndmz34PmzE5pz0IQcI25ozgB4XVfv1bS9+LLvRmYh944m8MJrY5fAiaxl5ZEEXwGZT46VKkzrFl1gqEhXuX0xB2DpFMnAg6Aerk7ABWODdETPMz68wfVuXtD6wjB6hWAn+Yjd4RXvDwJnYjhOBZtngq23lLPi3Tl9e3y6mAf3Z5+ZoPHeO4Iuc04fWolyQSf7H/1f0cA9ErRcBXidZJuA05VKAlSMSAXObNXgMm/S+pkWAtCyAlPOFroIMLdEHzgkm9OpVoIy0dAgXxo9MAjUbKKVABa+LgItXVzr5kRrJ2MD12aR4jCBwVsDr+BGX7EHfsNZoMiLXes3XsCmip7YTNEmwbrtaP3s8LH56/hu9xCH5p/OZemJnLJlp9dLrvopgL3gp7xLUr8N/BsO/opsSCT2igAAAABJRU5ErkJggg==",
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAABiklEQVR42rVW0U3DMBDNCIzACGxAR3A26AawAd2AfNcuzQZ0A9igbEDli8RnuwG9s5Nix2fjGmPJaqsqfnfvvXtO0/xhie3XrVDwKpQ+4v7E7w9N7SW2xxshYd8q+Ha3kMNjXSAJizmIBYJ9XSClBQeE+1BMUfsC99N29WmlPgUdKeiKhGbpIQMgdaYrF0zqHRX2o6F+nn7zIJthGaElBKSCCBQ/vSJHoxg3roe7PBAJ73aHVF0AN/Bk9mh37388MwAiMTkqRqetcjp1nj+xIN6B2EGomV9pmlbdu3RmL+oucujHRSccVqtXwgAlwzkO6KLacHq6+RrsakbNKip0iQbxoeUNQAXUzLM+lmdFgpPX5zSkDGA7+iVeAhCMB+5hsq1rYc4Q9sLLvOxMtIQPe2E6ZZUdZCaxc/QaKTokgrNjblYP0BSXSyNNNVNtVHRzT/lg/XXvAdhB7tTPZ+zqlDDzk0rdSGpgkW/Nf635u0NugWVZ6DjX3Kil6Z1DtZeBNRM9pBA6syPdnAHd7Oe2GWnwrAAAAABJRU5ErkJggg==",
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAbCAYAAACX6BTbAAABE0lEQVR42mPwXrpU0HPh4nleixa/A+L/FOOFi295LlpUzAACngsXzaWKoWjYY9GiIAZSXBy6fAXRhgMdvQJk+B98ipr2H/h/9927/8jg2KNH/xPWriNg+OI9eA3ffefuf3Tw5dcvMP3550+wxWQZDtKIzeC+o0fhfJAFuHyA1/CXX75gGJyzecv/8p27UMRBviPJcJAh6AAWBOiGv/j8hTTDQV5devEiHCOHLbocCOM2fOGiv7RI5/QzPGrV6v+nHj+hCO+8fRu74Ynr1v2nFDz//JmOhnsuWvxv1PBhZDiMM2o4VsNjVq/5f+XlS4rwofsPsBtOq4LrPY0MX80AbRDRot0SyuC+apWQ16JFi2jR4gIAV8p1DXqbIUkAAAAASUVORK5CYII=",
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAA/UlEQVR42s3WTwqCQBQGcNs3QmeoO7TvAkFnaRUEbTKL1h3EceUqaFFXmBatCqO9jozpNIOEEJraPM0HH/hn8YPhE5/GudahdnfuWejuY53/GmqjmVY0HkaGClIJFJirAgTHMfftXvrMQtNcTLyMVLDwsuNP1yoHQmBySoFQWCkQEisEobGvoI9RDI3lgnVhWaAyFpwmPCSr3ASHERxWJf/DGDE5O2/AEhLjE0tvwCeiLcGYaA8ja7CEZJmPNVCQP2FJi7bKoc4gA0NxLQWh+2HLMPkRJo1UC3X6xVi9EZjqvlg6FrrJP7XZBOZhfaHJjVheiP3xUdPxXd9rwQvV3Qwxk6K2XAAAAABJRU5ErkJggg=="]
// function addFood(){
//  html+= `<tr>
//  <td><img src=${image[0]}></img></td>
//  <td>BANANA</td>
//  <td class="add__food__margin"><p>1 medium - 7 7/8" long</p></td>
//  <td class="add__food__margin"><p>105.02</p></td>
//  </tr>`
//  document.querySelector('#home__table__info').innerHTML=html
// }
// document.getElementById('add__food__button').addEventListener('click',addFood)
// // let addExercise=()=>{
// //     html+= `<tr>
// //     <td><img src=${image[1]}></img></td>
// //     <td>Walking for pleasure</td>
// //     <td class="add__food__margin"><p>30 minutes</p></td>
// //     <td class="add__food__margin"><p>-89.3</p></td>
// //     </tr>`
// //     document.querySelector('.home__table__info').innerHTML=html
// //    }
// //    document.getElementById('add__exercise__button').addEventListener('click',addExercise)
// // let addBiometric=()=>{
// //     html+=`<tr>
// //     <td><img src=${image[2]}></img></td> 
// //     <td class="add__food__margin"><p>34 cm</p></td>
    
// //     <tr>`
// //     document.querySelector('.home__table__info').innerHTML=html
// // }
// // document.getElementById('add__biometric__button').addEventListener('click',addBiometric)