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

            	content=`<div class='eventItem col-md-3'><a href="`+iGroup.link+`">
							<h6 class='eventTitle'>`+d+`</h6>
							<table class="table">
								<tr><td class='eventDate'>Date</td><td> <span>`+e+`</span></td></tr>
								<tr><td class='eventTime'>Time</td><td> <span>`+t+`</span></td></tr>
								<tr><td class='eventWait'>Waiting Time</td><td> <span>`+w+`</span></td></tr>
								<tr><td class='eventPlace'>Place</td><td> <span>`+p+`</span></td></tr>
								<tr><td class='eventInfo'>More Information</td><td> <span>`+i+`</span></td></tr>
							</table>
							<button class="btn btn-primary eventGroup">Group `+iGroup.name+`</button>
						</a>

						</div>`;
           
            });

        $('#list-events').append(content);
        }
    });

}