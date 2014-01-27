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
                var a = aarr[i];

                setTimeout(function(){
                  console.log(a.href);                  
                  document.getElementsByTagName("body")[0].innerHTML += a.href + "<br/>";
                  rec_spider(a.href);
                },10);

              }
              
         }
    })
};

rec_spider();

//window.aarr.tell-me-more.


//var d = document.implementation.createHTMLDocument("");
//d.body.innerHTML = "<body><a href='http://localhost/a1.html'>aaa</a></body>";
//d.getElementsByTagName("a");
