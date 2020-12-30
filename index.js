var neuJahr = new Date("Jan 1, 2021 0:0:0").getTime();
var x = setInterval
(
    function()
    {
        var jetzt = new Date().getTime();
        var abtstand = neuJahr - jetzt;
        var days = Math.floor(abtstand / (1000 * 60 * 60 * 24));
        var hours = Math.floor((abtstand % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((abtstand % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((abtstand % (1000 * 60)) / 1000);
        document.getElementById("counter").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (abtstand<0)
        {
            clearInterval(x);
            document.getElementById("counter"),innerHTML = "Neues Jahr!"
        }
    }
    , 1000
);