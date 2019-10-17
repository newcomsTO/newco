$(document).ready(function() {
    eventsDisplay('forevents');
});

function eventsDisplay(value) {
    //$( "body" ).data( "groups" ); 
    //console.log(groups);
    var a = { 
      apiKey: "AIzaSyAkYyLs_AFXz9e8v0iSUXwaYW4hGlMGgtk",
        authDomain: "newco-ad028.firebaseapp.com",
        databaseURL: "https://newco-ad028.firebaseio.com",
        projectId: "newco-ad028",
        //storageBucket: "discourse-skcript.appspot.com",
        //messagingSenderId: "592087480717" 
    };

    var groups = { 
    0: { name: "Bars/Nights", class: "red", link:"https://chat.whatsapp.com/EcxoJFkYce669VrvSvEzq6"}, 
    1: { name: "Festivals", class: "yellow", link:"https://chat.whatsapp.com/Gy6YiK7vYXCAuEavkjQwMv"}, 
    2: { name: "Hiking", class: "green", link:"https://chat.whatsapp.com/DWmQ9qgVmJILtL23cnqxlt"}, 
    3: { name: "Sports", class: "blue", link:"https://chat.whatsapp.com/DchuasUjSvHDTIZGg97UZV"}, 
    4: { name: "Films", class: "dark", link:"https://chat.whatsapp.com/KivV33D58xK17HEDtKS57E"}, 
    5: { name: "Visits", class: "orange", link:"https://chat.whatsapp.com/FSzDY5bb1te2urdLPlR1zu"}, 
    6: { name: "French", class: "purple", link:"https://chat.whatsapp.com/DL6sDu1lZFiIT3jkurLTdx"}, 
	}

    firebase.initializeApp(a);
    var database = firebase.database().ref().child('events');
    database.once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';

            snapshot.forEach(function(data){
                var c = data.val().na,
                	d = data.val().des,
            		e = data.val().da,
            		t = data.val().ti,
            		w = data.val().wait,
            		p = data.val().pl,
            		i = data.val().i;
            		g = data.val().gr;

            	var iGroup = groups[g];

            	content += `<div class='eventItem col mx-2 my-1'>
							<h6 class='eventTitle'>`+d+`</h6>
							<ul class="row">
								<li class='eventIt eventDate col-sm-4'>Organizer</li>
								<li class='col-sm-8'> <span>`+c+`</span></li>

								<li class='eventIt eventDate col-sm-4'>Date</li>
								<li class='col-sm-8'> <span>`+e+`</span></li>

								<li class='eventIt eventTime col-sm-4'>Time</li>
								<li class='col-sm-8'> <span>`+t+`</span></li>

								<li class='eventIt eventWait col-sm-4'>Waiting Time</li>
								<li class='col-sm-8'> <span>`+w+`</span></li>

								<li class='eventIt eventPlace col-sm-4'>Place</li>
								<li class='col-sm-8'> <span>`+p+`</span></li>

								<li class='eventIt eventInfo col-sm-12'>More Information</li>
								<li class='col-sm-12' style="color: #117a8b">`+i+`</li>
							</ul>
							<a href="`+iGroup.link+`" class="btn btn-info btn-lg active" role="button" aria-pressed="true">Group `+iGroup.name+`</a>
						</div>`;
           
            });

        $('#list-events').append(content);
        }
    });

}