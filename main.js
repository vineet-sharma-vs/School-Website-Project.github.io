/*Loader start here*/
function onReady(callback) {
	var intervalId = window.setInterval(function() {
		if (document.getElementsByTagName('body')[0] !== undefined) {
			window.clearInterval(intervalId);
			callback.call(this);
		}
	}, 1000);
}

function setVisible(selector, visible) {
	document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
	setVisible('#loading', false);
});

/*Loader ends here*/


/*navigation start here*/
var x = document.getElementById('navbarSupportedContent').children[0].children;
for(var i=0; i< x.length; i++){
	x[i].addEventListener("mouseover", navMouseOver);
	x[i].addEventListener("mouseout", navMouseOut);
}

function navMouseOver() {
   this.children[0].style.color = "dodgerblue";
   this.children[0].style.fontWeight="bold";
}

function navMouseOut() {
  this.children[0].style.color = "rgba(0,0,0,.55)";
  this.children[0].style.fontWeight="400";
}

/*navigation ends here*/




/*buttons start here*/

document.getElementById('btn1').addEventListener("mouseover", btnMouseOver);
document.getElementById('btn1').addEventListener("mouseout", btnMouseOut);

function btnMouseOver(){
   this.style.background = "dodgerblue";
   this.classList.remove('text-primary');
   this.style.color = "white";
}

function btnMouseOut(){
   this.style.background = "white";
   this.classList.add('text-primary');
}

/*buttons ends here*/



/* myImageDiv1 start here*/
document.getElementById('myImageDiv1').addEventListener("mouseover", myImageDiv1MouseOver);
document.getElementById('myImageDiv1').addEventListener("mouseout", myImageDiv1MouseOut);

function myImageDiv1MouseOver(){
    this.style.width  = "300px";
    this.style.height = "320px";
   
    var x = document.getElementById('myImageDiv1Overlay');
        x.style.width = "calc(100% - 28px)";
        x.children[0].style.display = 'block';
}

function myImageDiv1MouseOut(){
    this.style.width  = "250px";
    this.style.height = "270px";

    var x = document.getElementById('myImageDiv1Overlay');
        x.style.width = "0px";
        x.children[0].style.display = 'none';
}

/* myImageDiv1 ends here */
