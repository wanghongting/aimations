$(function(){
    let that;
    $(".product div").on("dragstart",function(){
        that = $(this);
    })
    let arr=[];
    $(".car").on("drop",function(){
    	let name = that.find("h3").text(),
        	price = that.find("b").text();
        if(arr.indexOf(name) == -1){
        	let str = `<tr>
                    <td>${name}</td>
                    <td>1</td>
                    <td>${price}</td></tr>`;
        	$(".car>table>tbody").append(str);
        	arr.push(name);
        }else{
        	let ind = $.inArray(name,arr);
        	let num = $("tbody tr").eq(ind).find("td").eq(1).text();
        	let price = $("tbody tr").eq(ind).find("td").eq(2).text();
        	num++;
        	$("tbody tr").eq(ind).find("td").eq(1).html(num);
        }
        numbers();
    });
    // 总价函数
    function numbers(){
    	let sum = 0;
    	$.each($(".car tr"),function(ind,itm){
    		// 获取单价
   			let num = $(itm).children("td").eq(1).text();
   			// 获取价格
   			let priceOne = $(itm).children("td").eq(2).text();
   			// 总价格
   			sum+=num*priceOne;
      	});
      	// 将价格输入到总价里
    	$("#sum").html(sum);
    }
    $(document).on("dragover",function(e){
        e.preventDefault();
    })
})