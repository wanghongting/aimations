;(function($){
	$.fn.upFile = function(opt){
		
		let data = $.extend({},{
			createhtml:'li'
		},opt);
		let parent = $(data.parent);
		this.each(function(){
			$(this).on("change",function(){

				let files = $(this)[0].files[0];

				let fileType = files.type.split("/")[1];
				let fileSize = files.size;
				let tSize = data.size;
				let errotTap="";

				if(data.type.indexOf(fileType) === -1){
					errotTap = "请上传"+data.type.join()+"的文件";
				}
				if(fileSize > tSize * 1024 * 1024){
					errotTap = "请上传小于"+tSize+"MB的文件";
				}
				if(errotTap){
					alert(errotTap);//弹出上传文件错误的信息，并提示上传文件的正确格式
					return false;
				}
				readerFile(files);
			})
		});

		function readerFile(files){
			var opt = new FileReader();
			opt.readAsDataURL(files);
			opt.onload=function(){
				var src = this.result;
				var str = '<li class="list"><img src="'+ src +'""></li>';
				parent.prepend(str);
			}
		}

		return this;
	}
})(Zepto)