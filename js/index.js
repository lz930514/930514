function ShowLoginBox(){
	layer.open({
		type:1,
		title:"登录",
		area:["400px","320px"],
		content:$("#loginbox")
	})
}

function ShowRegBox(){
	layer.open({
		type:1,
		title:"注册",
		area:["400px","500px"],
		content:$("#regbox")
	})
}

function Login(){
	var username = $.trim($("#txtUserName").val());
	var userpwd = $.trim($("#txtUserPassword").val());
	if(username == "" || userpwd == ""){
		layer.alert("用户名和密码不能为空",{
			title:"提示",
			icon:5
		});
	}else{
		layer.alert("登录成功",{
			title:"提示",
			icon:6
		},function(){
			location.href = "https://www.baidu.com/";
		});
	}
}

function reg(){
	var infousername = $.trim($("#userName").val());
	var infouserpassword = $.trim($("#userPassword").val());
	var infousertel = $.trim($("#userTel").val());
	var infouseremail = $.trim($("#userEmail").val());
	
	if(infousername == "" || infouserpassword == ""){
		layer.alert("请输入用户名和密码",{
			title:"提示",
			icon:5
		});
	}else{
		layer.alert("注册成功",{
			title:"提示",
			icon:6
		});
	}
}
