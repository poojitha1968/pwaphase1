function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=='200'){
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  education(data.education);
  technicalskills(data.technicalskills);
})

var main=document.querySelector('.main');
var left=document.querySelector('.left');
var right=document.querySelector('.right');
function profile(pro){


  var image=document.createElement('img');
  image.src=pro.img;
  left.appendChild(image);
  main.appendChild(left);

  var name=document.createElement('h2');
  name.textContent=pro.name;
  left.appendChild(name);
  main.appendChild(left);
var hr=document.createElement('hr');
left.append(hr);
  var email=document.createElement('h2');
  email.textContent=pro.email;
  left.appendChild(email);
  main.appendChild(left);

}
function career(c){
  var rh=document.createElement("h1");
  rh.textContent="Resume Builder";
  right.append(rh);
 var hh=document.createElement("hr");
 right.append(hh);
 var rh1=document.createElement("h1");
 rh1.textContent="Carrer objectives";
 right.append(rh1);
var info=document.createElement("h2");
 info.textContent=c.info;
 right.append(info);
}
 function education(edu)
{
 var educate=document.createElement("h1");
  educate.textContent="Educational Details";
  right.append(educate);
  var hr=document.createElement('hr');
  right.append(hr);

  var table=document.createElement('table');
  let row='';
  row +="<tr>"+"<th>"+"sno"+"</th>"+
  "<th>"+"degree"+"</th>"+
  "<th>"+"institute"+"</th>"+
  "<th>"+"percentage"+"</th>"+
  "</tr>";
  for(i in edu){

    row +="<tr>"+"<td>"+edu[i].sno+"</td>"+
    "<td>"+edu[i].degeree+"</td>"+
    "<td>"+edu[i].institute+"</td>"+
    "<td>"+edu[i].percentage+"</td>"+
    "</tr>";

    }
    table.innerHTML=row;
    right.appendChild(table);
    main.appendChild(right);

}
function technicalskills(l){
  var hh=document.createElement("h1");
   hh.textContent="TechnicalSkills";
   right.append(hh);
   var hr=document.createElement('hr');
   right.append(hr);
   var ul=document.createElement(ul);
   right.append(ul);
   for(i in l){
     var li=document.createElement("li");
     li.textContent=l[i].info;
     ul.append(li);
   }


}
