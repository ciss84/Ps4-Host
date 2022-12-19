function ani2(){
 document.getElementById('notify').className = 'notification2'
 setTimeout(hide, 400)
}
function hide(){
 document.getElementById('notify').style.display = 'none'
}

function awaitpl2(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Loading Binloader...</h1>'; }, 50);
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 800);
      setTimeout(ani2, 4000);    
}

function awaitpl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Loading Payload...</h1>'; }, 50);
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 800);
      setTimeout(ani2, 4000);
}

function load_exploit(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Loading Exfathax..Please Wait !!!</h1>'; }, 50);       
    setTimeout(webkitExploit,1000);  
}

function load_exploit_done(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Jailbreak Loaded !!!</h1>'; }, 50);   
    setTimeout(loadHomeBrew, 100);
}

// Added AutoHEN
function loadHomeBrew() {
    var firstscheck = localStorage.getItem("CheckBOX1")
    var secondscheck = localStorage.getItem("CheckBOX2")
    if (firstscheck == "true"){
        setTimeout(load_platinum, 100)
    }else if(secondscheck == "true") {
        setTimeout(load_goldhen2b2, 100)
    }else {
        document.getElementById('notify').style.display = ''
        document.getElementById('notify').className = 'notification'
        setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Jailbreak Done, Now load HEN Manually!!!</h1>'; }, 50);   
        setTimeout(ani2, 4000);
    }
}

function load_usb(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#ebfa89>*Insert Usb Now !!!...</h1>'; }, 3000);
    setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>Unplug Usb Now !!!...</h1>"; }, 3000);
    setTimeout(ani2, 6000);
}       

function autopl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#ebfa89>"+LoadedMSG+"</h1>"; }, 100);
      setTimeout(ani2, 2000);
}

function load_bin(){
LoadedMSG="Send A Payload To Port 9020 Now !!!";
runBinLoader();
}

function load_platinum(){
LoadedMSG="PlatinumHen-U v2.5 B5 Loaded !!!";
PLfile = "henplatinum2.bin";
toogle_payload();
}

function load_goldhen2b2(){
LoadedMSG="GoldHEN v2.2.5b8 Loaded !!!";
PLfile = "goldhen_2.2.5b6.bin";
toogle_payload();
}

function load_otoolbox(){
LoadedMSG="Orbis-Toolbox Loaded !!!";
PLfile = "OrbisToolbox.bin";
toogle_payload();
}

function load_gtabeef138(){
LoadedMSG="Beefqueef Mod Menu 1.38d Loaded !!!";
PLfile = "BeefQueefMod138.bin";
toogle_payload();
}

function load_expulsion138(){
LoadedMSG="GtaV Expulsion Mod 1.38v4 Loaded !!!";
PLfile = "expulsion138.bin";
toogle_payload();
}

function load_wildemodz13816(){
LoadedMSG="GtaV Lamance Mod 1.38v1.0 Loaded !!!";
PLfile = "Lamance.bin";
toogle_payload();
}

function load_rdr2129(){
LoadedMSG="RDR II OystersMod 1.29(1.3.8) Loaded";
PLfile = "OystersMenu129.bin";
toogle_payload();
}

function load_dumper(){
LoadedMSG="Dumper v2 Loaded !!!";
PLfile = "gamedumper.bin";
toogle_payload();
}

function load_webrte(){
LoadedMSG="WebRte Loaded !!!";
PLfile = "webrte.bin";
toogle_payload();
}

function load_ps4debug(){
LoadedMSG="PS4Debug v1.0.15  Loaded !!!";
PLfile = "ps4debug.bin";
toogle_payload();
}

function load_cacheinstall(){
LoadedMSG="restore DB Loaded !!!";
PLfile = "restore.bin";
toogle_payload();
}

function load_cacheinstall2(){
LoadedMSG="Backup DB Loaded !!!";
PLfile = "backup.bin";
toogle_payload();
}

function load_pkg(){
LoadedMSG="Backup Pkg v1.1 Loaded!!! Load your game!!!";
PLfile = "pkgbackup.bin";
toogle_payload();
}linux4gbPhat.bin

function transitionPage(){
    // Hide to left / show from left
    $("#enter").toggle("slide", {direction: "left"}, 500);

    // Show from right / hide to right
    $("#about-2").toggle("slide", {direction: "right"}, 500);
}

$(document).ready(function() {
    $('#enter').click(transitionPage);
    $('#about-2').click(transitionPage);
});

function load_linux4gb(){
LoadedMSG="Linux 4G Pro Loaded!!!";
PLfile = "linux4gbPhat.bin";
toogle_payload();
}

function load_linux4gbp(){
LoadedMSG="Linux 4G Pro Loaded!!!";
PLfile = "linux4gbpro.bin";
toogle_payload();
}