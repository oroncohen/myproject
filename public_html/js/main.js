
//global variable 
var padding = 0,
    width = 800,
    height = 500;
var router = 'https://cdn4.iconfinder.com/data/icons/STROKE/networking/png/400/access_point.png';

var o1 = new Board("svg1");
var o2 = new Board("svg2");
//on startup 
$(function() {

o1.create();

o2.create();
$('body').fadeIn();
}

)



function Board(id)
{
var svg;
var voronoi;
var color; 
var points = [];
this.points = points;

this.RandPoint = function (number) //get random points 
{
for(var i=0;i<number;i++)
 points.push([Math.round(Math.random()*800) + 1,Math.round(Math.random()*500) + 1])
this.create()
}
  var click = function() 
  {
    // Ignore the click event if it was suppressed
    if (d3.event.defaultPrevented) return;

    // Extract the click location\    
    var point = d3.mouse(this)
    , p = {x: point[0], y: point[1] };
  points.push([(point[0]),(point[1])]) //add points to points array 
console.log(points)
$("#numOfSw"+id).text(points.length);

      d3.select("#"+this.id).selectAll("path").remove(); 
            d3.select("#"+this.id).selectAll("image").remove(); 
add();

}

  var drag = function() {

    console.log('drag')
    drag = d3.behavior.drag()
    .on("drag", dragmove);

  function dragmove(d) {

    console.log(d3.event.x)
    var x = d3.event.x;
    var y = d3.event.y;
    d3.select(this).attr("transform", "translate(" + x + "," + y + ")");
  }
        }



this.id = id ; 

  this.create = function()
  {
      d3.select("#"+this.id).selectAll("path").remove(); //remove old path
                 d3.select("#"+this.id).selectAll("image").remove(); 
  voronoi = d3.geom.voronoi()
  .clipExtent([[padding, padding], [width - padding, height - padding]]);

color = d3.scale.category10(); //d3 color from gallery board 


 svg = d3.select("body").select("#"+this.id)
    .attr("width", width)
    .attr("height", height)
    .on("click",click);;
 $('svg').css('background-image',"url(http://graphics.fansonly.com/schools/miss/graphics/mizzou-arena-map-flip-12.jpg)") //default map
add();

};

var add = function() {

  svg.selectAll("path") //draw path of map
    .data(voronoi(points))
  .enter().append("path")
    .style("stroke-dasharray", id=="svg1" ? ("32.66 32.66"):("")) 
  .style("stroke-opacity" ,id=="svg1" ? '0.5' : '1')
    .style("fill", id=="svg1" ? "blue" :  function(d, i) { return color(i); })
    .attr("d", function(d) { return "M" + d.join("L") + "Z"; });

  svg.selectAll("image") //add point (router image) to map
    .data(points)
    .enter().append("image")
    .attr('xlink:href',router)
    .attr('x','-25')
    .attr('y','-25')
    .attr("transform", function(d) { console.log(d); return "translate(" + d + ")"; })
    .attr("height", 35).attr('width',45)
    .append("title")
    .style("cursor", "pointer") // using titles instead of tooltips 
    .text(function (d,i) { return "X:"  +  d[0] + " Y:" + d[1] })
    .on("click",function(){alert('gg')})
    .call(drag);
}

}


//change map by dropdown 
  function changeMap(type)

  {
    console.log(type)
    var o1 = new Board("svg1");
    o1.create();
    var o2 = new Board("svg2");
    o2.create();
          switch(type)
              {
          case "School":
                     {
                           $('svg').css('background-image',"url(img/school.jpg)")
           
                           break;
                     } 
                           case "Arena":
                     {
                           $('svg').css('background-image',"url(http://graphics.fansonly.com/schools/miss/graphics/mizzou-arena-map-flip-12.jpg)")
                           break;
                     } 
                     case "Hospital":
                     {
                                $('svg').css('background-image',"url(http://www.nationwidechildrens.org/Document/Get/102456)")
                     break;
                     }
             }

  }



//bootstrap dropdown manager
$('#map li').on('click', function(){
  alert('')
 $("#selectmap").text($(this).text());
    changeMap($(this).text());
});