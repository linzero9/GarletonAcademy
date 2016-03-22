(function(){
	
	if(window.start==null){
		
		window.start = {};
		
	}else{
		
		console.log("window.start is occupied");
	
	}
	
	start = {
		
		addButtonListener:function(){
	
				$(".manage").mouseenter(function(){
			
					var ul = this.parentNode.getElementsByTagName('ul')[0];
			
					$(ul).show();
			
					$(this).mouseleave(function(){
					
						$(ul).hide();
					
						$(ul).mouseenter(function(){
						
							$(this).show();
						
							$(this).mouseleave(function(){
							
								$(this).hide();
							
							});
						
						});
					
					});
			
				});
				

		},
		
		
		addUserAction:function(){
			
			$("#userAction .query").click(this.queryUser);
			$("#userAction .delete").click(this.deleteUser);
			
		},
		
		addInstitutionAction:function(){
			
			$("#institutionAction .query").click(this.queryInstitution);
			$("#institutionAction .add").click(this.addInstitution);
			$("#institutionAction .delete").click(this.deleteInstitution);
			
			
		},
		
		queryUser:function(ev){
			
			ev.preventDefault();
			
			$("#main_block header").html("");
			$("#content").empty();
			
			$("#main_block header").html("查看用户：");
			
			var input = document.createElement("input");
			input.type = "text";
			input.name = "name";
			input.id = "name";
			var submit = document.createElement("a");
			submit.href = "";
			submit.innerHTML = "提交";
			util.addEvent(submit,"click",function(ev){
				
				ev.preventDefault();
				$.ajax({
					
					type:"post",
					async:true,
					url:"userAction!search",
					dataType:"json",
					data:{name:$("#name").val()},
					success:function(data){
						alert(data);
					}
					
				});
				
				
			});
			
			var cancel = document.createElement("a");
			cancel.href = "";
			cancel.innerHTML = "取消";
			
			util.addEvent(cancel,"click",function(ev){
				
				ev.preventDefault();
				
				$("#content").empty();
				
				$("#main_block header").html("");
				
			});
			
			$("#content").append(input).append(submit).append(cancel);
			
			
			
		},
		deleteUser:function(ev){
			
			ev.preventDefault();
			
			$("#main_block header").html("");
			$("#content").empty();
			
			$("#main_block header").html("删除用户：");
			
			var input = document.createElement("input");
			input.type = "text";
			input.name = "name";
			input.id = "name";
			var submit = document.createElement("a");
			submit.href = "";
			submit.innerHTML = "提交";
			util.addEvent(submit,"click",function(ev){
				
				ev.preventDefault();
				$.ajax({
					
					type:"post",
					async:true,
					url:"userAction!del",
					dataType:"json",
					data:{name:$("#name").val()},
					success:function(data){
						alert(data);
					}
					
				});
				
				
			});
			
			var cancel = document.createElement("a");
			cancel.href = "";
			cancel.innerHTML = "取消";
			
			util.addEvent(cancel,"click",function(ev){
				
				ev.preventDefault();
				
				$("#content").empty();
				
				
				$("#main_block header").html("");
				
			});
			
			$("#content").append(input).append(submit).append(cancel);
			
			
		},
		
		queryInstitution:function(ev){
			ev.preventDefault();
			
			$("#main_block header").html("");
			$("#content").empty();
			
			$("#main_block header").html("查询机构：");
			
			var input = document.createElement("input");
			input.type = "text";
			input.name = "name";
			input.id = "name";
			var submit = document.createElement("a");
			submit.href = "";
			submit.innerHTML = "提交";
			util.addEvent(submit,"click",function(ev){
				
				ev.preventDefault();
				$.ajax({
					
					type:"post",
					async:true,
					url:"institutionAction!searchAll",
					dataType:"json",
					data:{name:$("#name").val()},
					success:function(data){
						alert(data);
					}
					
				});
				
				
			});
			
			var cancel = document.createElement("a");
			cancel.href = "";
			cancel.innerHTML = "取消";
			
			util.addEvent(cancel,"click",function(ev){
				
				ev.preventDefault();
				
				$("#content").empty();
				
				
				$("#main_block header").html("");
				
			});
			
			$("#content").append(input).append(submit).append(cancel);
			
			
		},
		
		
		addInstitution:function(ev){
			ev.preventDefault();
			
			$("#main_block header").html("");
			$("#content").empty();
			
			$("#main_block header").html("增加机构：");
			
			var form= document.createElement("form");
			form.method = "post";
			form.action = "institutionAction!add";
			form.id="institutionForm";
			
			var input = document.createElement("input");
			input.type = "text";
			input.name = "id";
			input.id = "id";
			input.placeholder = "id";
			form.appendChild(input);			
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "name";
			input.id = "name";
			input.placeholder = "name";
			form.appendChild(input);
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "type";
			input.id = "type";
			input.placeholder = "type";
			form.appendChild(input);
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "superior";
			input.id = "superior";
			input.placeholder = "superior";
			form.appendChild(input);
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "did";
			input.id = "did";
			input.placeholder = "did";
			form.appendChild(input);
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "level";
			input.id = "level";
			input.placeholder = "level";
			form.appendChild(input);
			
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "pic";
			input.id = "pic";
			input.placeholder = "pic";
			form.appendChild(input);
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "address";
			input.id = "address";
			input.placeholder = "address";
			form.appendChild(input);
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "postcode";
			input.id = "postcode";
			input.placeholder = "postcode";
			form.appendChild(input);
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "tel";
			input.id = "tel";
			input.placeholder = "tel";
			form.appendChild(input);
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "fax";
			input.id = "fax";
			input.placeholder = "fax";
			form.appendChild(input);
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "email";
			input.id = "email";
			input.placeholder = "email";
			form.appendChild(input);
			
			input = document.createElement("input");
			input.type = "text";
			input.name = "comment";
			input.id = "comment";
			input.placeholder = "comment";
			form.appendChild(input);
			
			
			
			var submit = document.createElement("a");
			submit.href = "";
			submit.innerHTML = "提交";
			
			
			
			util.addEvent(submit,"click",function(ev){
			
				function tranverseForm(formName){
			
					var aInput = document.querySelectorAll("#"+formName+" input");
					
					var str = "";
					
					for(var i=0;i<aInput.length;i++){
						
						str += aInput[i].name;
						str +=":";
						if(aInput[i].value == ""){
							str += "\"\",";
						}else{
							str += aInput[i].value = ",";
						}
						
					}
					
					return "{"+str+"}";
					
				}
				
				ev.preventDefault();
				
				alert(tranverseForm("institutionForm"));
				
				$.ajax({
					
					type:"post",
					async:true,
					url:"userAction!search",
					dataType:"json",
					data:tranverseForm("institutionForm"),
					success:function(data){
						alert(data);
					}
					
				});
				
				
			});
			
			var cancel = document.createElement("a");
			cancel.href = "";
			cancel.innerHTML = "取消";
			
			util.addEvent(cancel,"click",function(ev){
				
				ev.preventDefault();
				
				$("#content").empty();
				
				
				$("#main_block header").html("");
				
			});
			
			$("#content").append(form).append(submit).append(cancel);
			
			
		},
		deleteInstitution:function(ev){
			
			ev.preventDefault();
			
			$("#main_block header").html("");
			$("#content").empty();
			
			$("#main_block header").html("删除机构：");
			
			var input = document.createElement("input");
			input.type = "text";
			input.name = "name";
			input.id = "name";
			var submit = document.createElement("a");
			submit.href = "";
			submit.innerHTML = "提交";
			util.addEvent(submit,"click",function(ev){
				
				ev.preventDefault();
				$.ajax({
					
					type:"post",
					async:true,
					url:"institutionAction!del",
					dataType:"json",
					data:{name:$("#name").val()},
					success:function(data){
						alert(data);
					}
					
				});
				
				
			});
			
			var cancel = document.createElement("a");
			cancel.href = "";
			cancel.innerHTML = "取消";
			
			util.addEvent(cancel,"click",function(ev){
				
				ev.preventDefault();
				
				$("#content").empty();
				
				
				$("#main_block header").html("");
				
			});
			
			$("#content").append(input).append(submit).append(cancel);
		
			
		},
		
		
		configure:function(){
			util.addLoad(this.addButtonListener());
			util.addLoad(this.addUserAction());
			util.addLoad(this.addInstitutionAction());
			
		}
		
	};
	
	start.configure();
	
})()