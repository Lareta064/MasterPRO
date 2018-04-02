$(document).ready(function() {

  $('.phone').mask("+7(999)999-9999", {autoclear: false});

  $.validator.addMethod("checkMask", function(value, element) {
       return this.optional(element) || /\+\d{1}\(\d{3}\)\d{3}-\d{4}/g.test(value); 
  }, "Введенный номер не корректен");

// jQuery Validate JS
  $("#contact-form").validate({
    rules: {
      name: { required: true },
      email: { required: true, email: true },
      // skype:  { required: true },
      phone:{
        required: true,
        'checkMask': true
      },
      
      message: { required: true }
    },

    /*messages: {
      phone: {
        required: "Пожалуйста, введите номер телефона",
      }
     // name: "Пожалуйста, введите свое имя",
      //email: {
       // required: "Пожалуйста, введите свой email",
       //email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
    },*/

    submitHandler: function(form) {
      ajaxFormSubmit();
    }

  })

  // Функция AJAX запрса на сервер
  function ajaxFormSubmit(){
    var string = $("#contact-form").serialize(); // Соханяем данные введенные в форму в строку. 

    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string
      
      // Функция если все прошло успешно
      success: function(html){
        $("#contact-form").slideUp(800);
        $('#answer').html(html);
        setTimeout(function() {$('#answer').hide();}, 3000);//закрываем окно благодарности
        //$('#answer').show();//добавил Русик
        setTimeout(function() {$('.overlay_popup').hide();}, 3000);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false; 
  };
   // закрываем окно, нажимая на крестик
   $('#form-close').click(function() {
     $(".overlay_popup").hide();
      $("#popup1").hide();
   });
      

})

    