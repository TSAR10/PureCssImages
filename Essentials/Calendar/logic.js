var d = new Date();
var n = d.getMonth();
const c_month = d.getMonth();
const c_date = d.getDate();
var c_day = d.getDay();
var m = d.getFullYear();
var first_day = 0;
var months = ["January" , "Febuary" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
var days = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thrusday" , "Friday" , "Saturday" ];
window.onload = function(){
	document.getElementsByClassName("all_front")[0].style.display = "none";
	var no_days = daysinmonth(n+1, m);
	document.getElementById("month").innerHTML = months[n];
	document.getElementById("year").innerHTML = m; 
	n=n+1;
	var first = cfirstday();
	fillup(first, no_days);
	todaydate(d.getDate(), first);
}
function todaydate(tdate, first){
	var selector = document.querySelectorAll(".dates li");
	var index = tdate + first - 1;
	selector[index].style.color = "white";
	selector[index].style.backgroundColor = "black";
}
function fillup (first, no_days){
	var number = 0;
	var selector = document.querySelectorAll(".dates li");
	for( var i = 0; i < selector.length; i++)
	{
		selector[i].style.color = "black";
		selector[i].style.backgroundColor = "whitesmoke";
		selector[i].innerHTML = "";
	} 
	for( var i = first; i < (no_days+first); i++)
	{
		number = number + 1;
		selector[i].innerHTML = number;
	}
}
function daysinmonth (month, year){
	 return new Date(year, month, 0).getDate();
}
function premonth(){
	if(n>1)
	{
		n=n-1;
		document.getElementById("month").innerHTML = months[n-1];
		var no_of_days = daysinmonth(n, m);
		var first = first_date(no_of_days,c_day);
		fillup(first, no_of_days);
		var elem = document.getElementByClassName("all_front");
		elem.style.display = "block";
	}
	else
	{
		n=12;
		document.getElementById("month").innerHTML = months[n-1];
		document.getElementById("year").innerHTML = m-1;
		m = m-1;
		var no_of_days = daysinmonth(n, m);
		var first = first_date(no_of_days,c_day);
		fillup(first, no_of_days);
	}
}
function nextmonth(){
	if(n<12)
	{
		n=n+1;
		document.getElementById("month").innerHTML = months[n-1];
		var no_of_days = daysinmonth(n, m);
		var first = first_date_next(no_of_days,c_day);
		fillup(first, no_of_days);
	}
	else
	{
		n=1;
		document.getElementById("month").innerHTML = months[n-1];
		document.getElementById("year").innerHTML = m+1;
		m = m+1;
		var no_of_days = daysinmonth(n, m);
		var first = first_date_next(no_of_days,c_day);
		fillup(first, no_of_days);
	}
}
function first_date(no_of_days,day){
	var cal_day = no_of_days % 7;
	if(cal_day > day)
	{
		first_day = cal_day - day;
		first_day = 7 - first_day;

	}
	else
	{
		first_day = day - cal_day;
	}
	c_day = first_day;
	return first_day;
}
function first_date_next(no_of_days,day){
	var cal_day = no_of_days % 7;
	first_day = cal_day + day;
	if(first_day > 6)
	{
		first_day = first_day-7;
		c_day = first_day;

	}
	else
	{
		c_day = first_day;
	}
	return first_day;
}
function cfirstday(){
	var date = d.getDate();
	var day = d.getDay();
	var cal_day = date - 1;
	cal_day = cal_day % 7;
	var number = 0;
	if(cal_day > day)
	{
		first_day = cal_day - day - 1;
	}
	else
	{
		first_day = day - cal_day;
	}
	c_day = first_day;
	return first_day;
}