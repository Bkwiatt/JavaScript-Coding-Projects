function getReceipt() {
	var text1 = "<h3>You Ordered:</h3>";
	var totalCost = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");	
	
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			text1 = text1+selectedSize+"<br>";
		
	}
}


if (selectedSize === "Personal Pizza") {
		sizeTotal = 6;
	} else if (selectedSize === "Medium Pizza") {
		sizeTotal = 10;
	} else if (selectedSize === "Large Pizza") {
		sizeTotal = 14;
	} else if (selectedSize === "Xtra-Large Pizza") {
		sizeTotal = 16;
	}
	
	totalCost = sizeTotal;
	
	getMeat(text1, totalCost);
	
	}
	
	
	function getMeat(text1, totalCost){
		var meatTotal = 0;
		var selectedMeat = [];
		var meatArray = document.getElementsByClassName("meats");
		
		
		for (var i = 0; i < meatArray.length; i++) {
			if (meatArray[i].checked) {
				selectedMeat.push(meatArray[i]);
				text1 = text1+meatArray[i].value+"<br>";
			}
		}
		
		var meatCount = selectedMeat.length;
		if (meatCount > 1) {
			meatTotal = (meatCount - 1);
		} else {
			meatTotal = 0;
	}
	
	totalCost += meatTotal;

	
	getCheese(text1, totalCost);
	}
	
	function getCheese(text1, totalCost) {
		var cheeseTotal = 0;
		var cheeseArray = document.getElementsByClassName("cheese");	
		
		for (var i = 0; i < cheeseArray.length; i++) {
			if (cheeseArray[i].checked) {
				var selectedCheese = cheeseArray[i].value;
				text1 = text1+selectedCheese+"<br>";
			
		}
	}


		if (selectedCheese === "Xtra-Cheese") {
				cheeseTotal = 3;}
			
			
			
			totalCost += cheeseTotal;
			
			
			getCrust(text1, totalCost);	
	}
	
	function getCrust(text1, totalCost) {

	var crustTotal = 0;
	var crustArray = document.getElementsByClassName("crust");	
	
	for (var i = 0; i < crustArray.length; i++) {
		if (crustArray[i].checked) {
			var selectedCrust = crustArray[i].value;
			text1 = text1+selectedCrust+"<br>";
		
	}
}


if (selectedCrust === "Cheesey Crust") {
		crustTotal = 3;
	}
	totalCost += crustTotal;
	
	getVeggie(text1, totalCost);
	
	}
	
	
	
	function getVeggie(text1, totalCost){
		var veggieTotal = 0;
		var selectedVeggie = [];
		var veggieArray = document.getElementsByClassName("veggie");
		
		
		for (var i = 0; i < veggieArray.length; i++) {
			if (veggieArray[i].checked) {
				selectedVeggie.push(veggieArray[i]);
				selectedVeggie.value;
				text1 = text1+veggieArray[i].value+"<br>";
			}
		}
		
		var veggieCount = selectedVeggie.length;
		if (veggieCount > 1) {
			veggieTotal = (veggieCount - 1);
		} else {
			veggieTotal = 0;
	}
	
	totalCost += veggieTotal;
	console.log("total cost: " + totalCost);
	console.log(text1);
	
	document.getElementById("showText").innerHTML=text1;
	document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+totalCost+".00"+"</strong></h3>";
	}
		
		
		
	