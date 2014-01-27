var d,aarr;
var rec_spider = function(url){
    $.ajax({
         url: url || document.location,
         dataType: 'text',
         success: function(data) {
              var d = document.implementation.createHTMLDocument("");
              d.getElementsByTagName("body")[0].innerHTML = data;
              aarr = d.getElementsByTagName("a");
              for(var i=0; i<aarr.length; i++){
                console.log(aarr[i].href);
                //document.getElementsByTagName("body")[0].innerHTML += "<hr/>" + d.getElementsByTagName("a").join("<br/>") + "<hr/>";
              }
              
         }
    })
};

rec_spider();

//window.aarr.tell-me-more.


//var d = document.implementation.createHTMLDocument("");
//d.body.innerHTML = "<body><a href='http://localhost/a1.html'>aaa</a></body>";
//d.getElementsByTagName("a");
