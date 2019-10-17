
$(document).ready(function() {
    if ($('#newEvent').length > 0 ) {
        eventsScript('forcontact');
    }
});

//firebase



function eventsScript(value) {
    var a = { 
      apiKey: "AIzaSyAkYyLs_AFXz9e8v0iSUXwaYW4hGlMGgtk",
        authDomain: "newco-ad028.firebaseapp.com",
        databaseURL: "https://newco-ad028.firebaseio.com",
        projectId: "newco-ad028",
        //storageBucket: "discourse-skcript.appspot.com",
        //messagingSenderId: "592087480717" 
    };
    firebase.initializeApp(a);
    var b = firebase.database().ref("events");
        $("#newEvent").submit(function(a) { $(this), console.log("Submit to Firebase");

        var radiochecked;
        document.getElementsByName("checked").forEach(function(elm) {
          if (elm.checked) {
            radiochecked = elm.value;
          }
        })

        var c = $("#name").val(),
            d = $("#titl").val(),
            e = $("#date").val(),
            t = $("#time").val(),
            w = $("#waiting").val(),
            p = $("#place").val(),
            i = $("#info").val(),
        

            f = { na: c, des: d, da: e, gr: radiochecked, ti: t, wait: w, pl: p, i: i};
        return b.push(f).then(function(a) { 
            $(".sucess").css("display", "block"), 
            $(".sucess-none").css("display", "none") }), !1 })   
}



