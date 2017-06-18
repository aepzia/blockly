function move_forward2(){
  setTimeout(function(){
    document.getElementById("emaitza").innerHTML = "";
  }, time);
  switch (g) {
    case 1:
      var element=document.getElementById("minijokoaTable").rows[i].cells[j+1].innerHTML;
      if(element=="B"){
        //Bidea dagoela esan nahi du.
        document.getElementById("minijokoaTable").rows[i].cells[j].innerHTML="B";
        j++;
        document.getElementById("minijokoaTable").rows[i].cells[j].innerHTML="MB";
        document.getElementById("emaitza").innerHTML = "Lauki bat mugitu da aurrerantz";
      }else if(element=="H"){
        //Helmugara iritsi da.
        //TODO: Bukatu
      }else //TODO: ERROREA
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    default:

  }
  document.getElementById("emaitza").setAttribute("role", "alert");
}
function move_forward(){
  setTimeout(function(){
    move_forward2();
  }, time);
  time=time+3000;
}
function bidea_eskubian(){
  switch (g) {
    case 1:
      return document.getElementById("minijokoaTable").rows[i+1].cells[j].innerHTML=="B";
      break;
    case 2:
      return document.getElementById("minijokoaTable").rows[i].cells[j+1].innerHTML=="B";
      break;
    case 3:
      return document.getElementById("minijokoaTable").rows[i-1].cells[j].innerHTML=="B";
      break;
    case 4:
      return document.getElementById("minijokoaTable").rows[i].cells[j-1].innerHTML=="B";
      break;
    default:

  }
}

function bidea_ezkerrean(){
  switch (g) {
    case 1:
      return document.getElementById("minijokoaTable").rows[i-1].cells[j].innerHTML=="B";
      break;
    case 2:
      return document.getElementById("minijokoaTable").rows[i].cells[j-1].innerHTML=="B";
      break;
    case 3:
      return document.getElementById("minijokoaTable").rows[i+1].cells[j].innerHTML=="B";
      break;
    case 4:
      return document.getElementById("minijokoaTable").rows[i].cells[j+1].innerHTML=="B";
      break;
    default:

  }
}
function bidea_aurrean(){
  switch (g) {
    case 1:
      return document.getElementById("minijokoaTable").rows[i].cells[j+1].innerHTML=="B";
      break;
    case 2:
      return document.getElementById("minijokoaTable").rows[i-1].cells[j].innerHTML=="B";
      break;
    case 3:
      return document.getElementById("minijokoaTable").rows[i].cells[j-1].innerHTML=="B";
      break;
    case 4:
      return document.getElementById("minijokoaTable").rows[i+1].cells[j].innerHTML=="B";
      break;
    default:
  }
}
function helmugara_iritsi(){
  return document.getElementById("minijokoaTable").rows[i].cells[j].innerHTML=="H";
}
function biratu_ezkerreta(){
  if(g==4){
    g=1;
  }else g++;
}
function biratu_eskubira(){
  if(g==1){
    g=4;
  }else g--;
}

function kargatu_minijokoa(){
	var xmlDoc=loadXMLDoc();
	var arniveles = xmlDoc.getElementsByTagName("maila");
  var momentuko_minijokoa = arniveles[0];

		var minijokoaTaula = momentuko_minijokoa.getElementsByTagName("table");
    tr = minijokoaTaula[0].getElementsByTagName('tr');
    var table = document.getElementById("minijokoaTable");
    for (e=0;e<tr.length;e++){
      row = table.insertRow(e);
      td = tr[e].getElementsByTagName('td');
      for(p=0;p<td.length;p++){
        cell = row.insertCell(p);
        cell.innerHTML = td[p].innerHTML;
      }
    }



    var minijokoToolbox = momentuko_minijokoa.getElementsByTagName("toolbox");
    for(i=0; i<minijokoToolbox.length; i++){
      document.getElementById("blockly-toolbox-xml").appendChild(minijokoToolbox[i]);
    }
    var hEgoera = momentuko_minijokoa.getElementsByTagName("hasierakoEgoera");
    i = hEgoera[0].getElementsByTagName('i');
    j = hEgoera[0].getElementsByTagName('j');
 //	}
}
function loadXMLDoc(){
  if (window.XMLHttpRequest)

  {
  	xmlhttp=new XMLHttpRequest();

  }else{
  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.open("GET","minijokoak.xml",false);
  xmlhttp.send();
  return xmlhttp.responseXML;
}
