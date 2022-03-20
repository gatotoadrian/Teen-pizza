 $(document).ready(function(){
//prototype
    function Order(size, topping, crust){
        this.size = size
        this.topping = topping
        this.crust = crust        
    }
    Order.prototype.fullOrder = function(){
        return ("Your order has " + this.size + " " + this.topping + " " + this.crust); 
    }
    //user interface
    // var asize = $("#size").val();    
    // var atopping = $("#topping").val();
    // var acrust = $("#crust").val();
    $("#ordernow").click(function(e){
        $("table").show();
        $("#checkout").show();
        console.log("seen");
        var asize = $("#size").val();    
        var atopping = $("#topping").val();
        var acrust = $("#crust").val();
        var yourOrder = new Order (asize, atopping, acrust);
        console.log(yourOrder.fullOrder());
        //pricing
        var sizePrice
        var toppingPrice
        var crustPrice

        //size
        if (asize === "1"){
        if (asize === "small"){
            sizePrice = 400;
            //console.log(sizePrice); 
        }else if (asize === "2"){
        }else if (asize === "medium"){
            sizePrice = 600;
        }else if (asize === "3"){
        }else if (asize === "large"){
            sizePrice = 800;
        }
        console.log("Cost is " + sizePrice);

        //topping
        if (asize === "1"){
            if (atopping === "4"){
        if (asize === "small"){
            if (atopping === "pepperoni"){
                toppingPrice = 80;
            }else if (atopping === "5"){
            }else if (atopping === "cheese"){
                toppingPrice = 100;
            }else if (atopping === "6"){
            }else if (atopping === "mushroom"){
                toppingPrice = 120;
            }
        }

        if (asize === "2"){
            if (atopping === "4"){
        if (asize === "medium"){
            if (atopping === "pepperoni"){
                toppingPrice = 100;
            }else if (atopping === "5"){
            }else if (atopping === "cheese"){
                toppingPrice = 120;
            }else if (atopping === "6"){
            }else if (atopping === "mushroom"){
                toppingPrice = 140;
            }
        }

        if (asize === "3"){
            if (atopping === "4"){
        if (asize === "large"){
            if (atopping === "peperoni"){
                toppingPrice = 120;
            }else if (atopping === "5"){
            }else if (atopping === "cheese"){
                toppingPrice = 140;
            }else if (atopping === "6"){
            }else if (atopping === "mushroom"){
                toppingPrice = 160;
            }
        }
        console.log("Topping costs " + toppingPrice);

        //crust
        if (asize === "1"){
            if (acrust === "7"){
        if (asize === "small"){
            if (acrust === "crispy-thin"){
                crustPrice = 150;
            }else if (acrust === "8"){
            }else if (acrust === "extreme-cheese"){
                crustPrice = 170;
            }else if (acrust === "9"){
            }else if (acrust === "stuffed"){
                crustPrice = 200;
            }
        }

        if (asize === "2"){
            if (acrust === "7"){
        if (asize === "medium"){
            if (acrust === "crispy-thin"){
                crustPrice = 170;
            }else if (acrust === "8"){
            }else if (acrust === "extreme-cheese"){
                crustPrice = 200;
            }else if (acrust === "9"){
            }else if (acrust === "stuffed"){
                crustPrice = 230;
            }
        }

        if (asize === "3"){
            if (acrust === "7"){
        if (asize === "large"){
            if (acrust === "crispy-thin"){
                crustPrice = 200;
            }else if (acrust === "8"){
            }else if (acrust === "extreme-cheese"){
                crustPrice = 230;
            }else if (acrust === "9"){
            }else if (acrust === "stuffed"){
                crustPrice = 250;
            }
        }
        console.log("Crust costs " + crustPrice);
        var tot = parseInt(sizePrice)+parseInt(toppingPrice)+parseInt(crustPrice);
        console.log(tot);
        var cusorder = "<tr><td>" + asize + ": " + sizePrice + "</td><td>" + atopping + ": " + toppingPrice + "</td><td>" + acrust + ": " + crustPrice + "</td><td>" + tot + "</td><tr>"
        $("#customerOrder tbody").append(cusorder);
        $("#ordernow").html("Add another");


    })
    
})