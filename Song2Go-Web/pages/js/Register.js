(function(){   

    var config = {
        apiKey: "AIzaSyCDkeeVzvndeSC6KZwenYcuVioJZ_glMJI",
        authDomain: "songtogo-f2eae.firebaseapp.com",
        databaseURL: "https://songtogo-f2eae.firebaseio.com",
        storageBucket: "songtogo-f2eae.appspot.com",
    };
    firebase.initializeApp(config);
    
    const mbtnSignUp = document.getElementById('btnSignUp');
    
    var databaseRef = firebase.database().ref();

  

mbtnSignUp.addEventListener('click', e=>{

  var mEmail = document.getElementById('txtEmail').value;
    var mPass = document.getElementById('txtPass').value;
  const mAuth = firebase.auth();

     // const promise = firebase.auth().CreateUserWithEmailAndPassword(email, pass);
     // promise.catch(e => console.log(e.message));

     
     var test = firebase.auth().createUserWithEmailAndPassword(mEmail, mPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("errorCode " + errorCode + '\nErrorMessage ' + errorMessage);
      });

     console.log(test);

     var mAccount = 
        { 
          email: mEmail, 
          pass: mPass 
        };

        var database = databaseRef.child('KTVOwner');
            database.push().set(mAccount);
 
});

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

    if (e.type === 'keyup') {
      if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
      if( $this.val() === '' ) {
        label.removeClass('active highlight'); 
      } else {
        label.removeClass('highlight');   
      }   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
        label.removeClass('highlight'); 
      } 
      else if( $this.val() !== '' ) {
        label.addClass('highlight');
      }
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});
}());