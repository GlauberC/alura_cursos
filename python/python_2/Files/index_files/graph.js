var inputFromEdit; //input
var inputFromEditUnmanipulated; //raw input
var colorBackup; //in graph
var choice //in property menu

$(document).ready(function () {
    // EXPLORE
    $("li#explore").click(function () {
        parsing('EXPLORER');
    })

    $("button#hidden-explore").click(function () {
        $("li#explore").addClass("active");
        $("li#edit").removeClass("active");
        $("li#verify").removeClass("active");
        showGraph("EXPLORE", null)
    })

    // VERIFY
    $("li#verify").click(function () {
        parsing('VERIFY');
    })
    $("button#hidden-verify").click(function () {
        $("li#verify").addClass("active");
        $("li#edit").removeClass("active");
        $("li#explore").removeClass("active");
        propertyPhp()
    })


    // DROPDOWN
    $("a.exampleDropdown").click(function () {
        $("a#edit").click();

    })

    // EDIT
    $("li#edit").click(function () {
        $('.btnParse').popover("destroy");
        $("div.loaderParse").html("");
    })
    $(".lined").linedtextarea(
        { selectedLine: 1 }
    );
    $("textarea").click(function () {
        $('.btnParse').popover("destroy");
    })

});

function addPropClick(){
  $(".radioProp").prop("checked", false)
  $("div.prop-option").hide();
  $("button.btn-prop-save").addClass('disabled');
}
function propEquivalence(){
  $("button.btn-prop-save").removeClass('disabled');
  $("div#propMod").hide();
  $("div#propEqui").show();
  choice=0
}
function propModel(){
  $("button.btn-prop-save").removeClass('disabled');
  $("div#propEqui").hide();
  $("div#propMod").show();
  choice=1
}

function savebtn(){
  var prop;
  if(choice == 0){
    prop = $(".property-id").val();
    $('.verify-list').append("<tr><td> <span class='glyphicon glyphicon-option-horizontal'></span> </td>" +
    "<td> <span class='glyphicon glyphicon-option-horizontal'></span> </td>" +
    "<td>"+ prop +"</td>" +
    "<td><span class='glyphicon glyphicon-play-circle btn btn-sm' onClick='verify_action() maude='"+ prop +"''></span></td>" +
    "<td><span class='glyphicon glyphicon-pencil btn btn-sm'></span></td>" +
    "<td><span class='glyphicon glyphicon-trash btn btn-sm'></span></td></tr>");
  }else if(choice == 1){
    prop = $(".model-process-select").val() + "  =  " + $(".formula-id").val();
    $('.verify-list').append("<tr><td> <span class='glyphicon glyphicon-option-horizontal'></span> </td>" +
    "<td> <span class='glyphicon glyphicon-option-horizontal'></span> </td>" +
    "<td>"+ prop +"</td>" +
    "<td><span class='glyphicon glyphicon-play-circle btn btn-sm'></span></td>" +
    "<td><span class='glyphicon glyphicon-pencil btn btn-sm'></span></td>" +
    "<td><span class='glyphicon glyphicon-trash btn btn-sm'></span></td></tr>");
  }
}
function verify_action(){
  $(this).attr('maude')
}

function initialScroll() {
    $('div#graph-container').scrollTop(550);
    $('div#graph-container').scrollLeft(300);
}

function clickSizeToggle() {
    var expand = $('div#graph-container').attr('expand');
    if (expand == 'false') {
        $('div#graph-container').css('height', '80vh');
        $('div#graph-container').css('width', '80vw');
        $('div#graph-container').attr('expand', 'true');
    } else {
        $('div#graph-container').css('height', '60vh');
        $('div#graph-container').css('width', '60vw');
        $('div#graph-container').attr('expand', 'false');
    }

}

function getinputFromEdit() {
    inputFromEditUnmanipulated = $("textarea").val();
    inputFromEdit = stringManipulation(inputFromEditUnmanipulated);
}

function stringManipulation(string) {
    string = string.trim();                                 //remove spaces after ending
    string = string.replace(/#.+\n/ig, "");                 //remove comments
    string = string.replace(/\n#.+/ig, "");                 //remove if ending with comment
    string = string.replace(/\n/g, ';');                    //replace \n to ;
    string = string.replace(/([a-z]\w*)/ig, " \'$1 ");      //add ' before process
    string = string.replace(/\'(tau)/g, "$1");              //remove ' from tau special char
    string = string.replace(/=/ig, " =d= ");                //replace = to =d=
    return string;
}
// === Ajax - parse function

function propertyPhp(){
  getinputFromEdit();
  $("div.loaderParse").html("<div class='loader'></div>");

  // Getting the input from the user

  var txt = inputFromEdit;
  // The Ajax invocation
  var xhttp = new XMLHttpRequest();
  txt = "EXPLORE=>" + "FIRST" + '=>' + txt;
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          // When create_graph.php finishes, we can recover its output by using the responseText field
          // I used the content of create_graph.php to update the text "graph_txt"
          $("div#verifyPHP")[0].innerHTML = this.responseText;
          graph();
      }
  };
  // Note that the URL is create_graph.php and I use "?txt" to send the needed parameter (the input from the user)
  xhttp.open("GET", "php/verify.php?txt=" + encodeURIComponent(txt), true);
  // Calling create_graph.php
  xhttp.send();
}

//  === Ajax, send from textarea to Maude command Function ===
function showGraph(type, self) {
    getinputFromEdit();
    $("div.loaderParse").html("<div class='loader'></div>");

    // Getting the input from the user

    var txt = inputFromEdit;

    if (type != "EXPLORE") {
        txt = "REFRESH=>" + $(self).text().replace(/([a-z]\w*\s*)/ig, "\'$1") + '=>' + txt;
    } else {
        txt = "EXPLORE=>" + "FIRST" + '=>' + txt;
    };

    // The Ajax invocation
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // When create_graph.php finishes, we can recover its output by using the responseText field
            // I used the content of create_graph.php to update the text "graph_txt"
            $("div#graph_txt")[0].innerHTML = this.responseText;
            graph();
        }
    };
    // Note that the URL is create_graph.php and I use "?txt" to send the needed parameter (the input from the user)
    xhttp.open("GET", "php/create_graph.php?txt=" + encodeURIComponent(txt), true);
    // Calling create_graph.php
    xhttp.send();


}
function LineCount(linesWarning) {
    lines = [];
    var processWarning = linesWarning.match(/\d+/ig);
    allLines = inputFromEditUnmanipulated.replace(/(\w+)=.+/ig, '$1');
    allLines = allLines.match(/.+/ig);
    var j = 0;
    var counter = 0;
    for (var index in allLines) {
        if (!/^#/.test(allLines[index])) {
            counter++;
        }
        if (counter == processWarning[j]) {
            lines.push(index / 1 + 1);
            j++;
            if (j == processWarning.length) {
                return lines;
            }
        }
    }
    return lines;
}
function parseStringManipulation(request) {
    request = request.replace(/<br>/ig, "");
    request = request.replace(/Maude> Bye\.\n*/ig, "");
    request = request.replace(/(line\s\d+\s).+line 1:\s/ig, "$1");
    request = request.replace(/Warning.+\n/ig, "");
    request = request.replace(/\n/ig, "");
    request = request.replace(/(line\s\d+\s)/ig, "\n$1");
    request = request.replace(/generateDot\s/ig, " ");
    linesProcess = request.replace(/line\s(\d+)\s.+/ig, "$1")
    lines = LineCount(linesProcess)
    linesProcess = request.match(/.+\n*/ig);

    var j = 0;
    request = "";
    for (var index in linesProcess) {
        request = request + linesProcess[index].replace(/(line\s)\d+/i, "$1" + lines[j]);
        j++;
    }
    request = request.replace(/\'/ig, "");
    request = request.replace(/=d=/ig, "=");

    return request;
}

function parsing(action) {
    $("div.loaderParse").html("<div class='loader'></div>");
    $('.btnParse').popover("destroy");
    getinputFromEdit()
    $.ajax({
        type: "GET",
        data: { txt: inputFromEdit },
        url: 'php/parse.php',
        success: function (request) {
            //POPOVER BELLOW
            if (!/^success$/.test(request)) {
                request = parseStringManipulation(request);
                request = request.replace(/\n/ig, '<br><br>');
                $('.btnParse').popover({
                    title: "<h4 style='color: red;'><span class='glyphicon glyphicon-warning-sign'> &nbsp;</span>Warning</h4>",
                    content: request,
                    placement: "bottom",
                    trigger: "focus",
                    html: true
                });
            } else {
                if (action == "EXPLORER") {
                    $("button#hidden-explore").click();
                } else if (action == "VERIFY") {
                    $("button#hidden-verify").click();
                }
                else {
                    $('.btnParse').popover({
                        title: "<h4 style='color: green;'><span class='glyphicon glyphicon-ok'> &nbsp;</span>Success</h4>",
                        content: "Everything works fine",
                        placement: "bottom",
                        trigger: "focus",
                        html: true
                    });
                }

            }
            $("div.loaderParse").html("");
            $('.btnParse').popover("show");
        }
    });



}
// Verify




//  ===Create Graph ===
function graph() {
    //It creates three sizes based on screenswidth
    //          [ <=600px, >600px, >1100px]
    nodeRadius = [8, 10, 12]; //Node's radius
    MarkrefX = [15, 17, 20]; //Proximity of the arrows to nodes
    //It return de 0,1 or 2 based on width size
    function windowSizeCalculation(width) {
        if (width > 1100) {
            return 2;
        } else if (width > 600) {
            return 1;
        } else {
            return 0;
        }
    }
    //It gets the Window size and return a number 0,1 or 2.
    winSize = windowSizeCalculation(window.innerWidth);

    //It defines the graph size
    var width = 1500;
    var height = 1500;

    //It gets the Json filename from output
    $fileName = $("div#graph-container").attr("dir");
    //To save the colors
    var idColors = new Array();

    //It addes the graph window
    $("div#graph-container").append("<svg width='" + width + "'height='" + height + "'></svg>");

    //It starts Force-Directed Graph
    //It creates Window
    var colors = d3.scaleOrdinal(d3.schemeCategory10);
    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height"),
        node,
        link;
    //It creates arrow to nodes
    svg.append('defs').append('marker')
        .attrs({
            'id': 'arrowhead',
            'viewBox': '-0 -5 10 10',
            'refX': MarkrefX[winSize],
            'refY': 0,
            'orient': 'auto',
            'markerWidth': 7,
            'markerHeight': 7,
            'xoverflow': 'visible'
        })
        .append('svg:path')
        .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
        .attr('fill', 'rgba(0, 0, 0, .8)')
        .style('stroke', 'none');

    //It creates physics on graph
    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) { return d.id; }).distance(150).strength(0.5))
        .force("charge", d3.forceManyBody().strength(-50))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(function (d) { return 50; }));

    //It reads the Json filename from output
    d3.json($fileName, function (error, graph) {
        if (error) throw error;
        update(graph.links, graph.nodes);
    })

    //It create nodes and links
    function update(links, nodes) {
        //It creates links
        link = svg.selectAll(".link")
            .data(links)
            .enter()
            .append("polyline")
            .attr("class", "link")
            .style("fill", "none")
            .attr('marker-end', 'url(#arrowhead)')
        link.append("title")
            .text(function (d) { return d.type; });
        edgepaths = svg.selectAll(".edgepath")
            .data(links)
            .enter()
            .append('path')
            .attrs({
                'class': 'edgepath',
                'fill-opacity': 0,
                'stroke-opacity': 0,
                'id': function (d, i) { return 'edgepath' + i }
            })
            .style("pointer-events", "none");
        edgelabels = svg.selectAll(".edgelabel")
            .data(links)
            .enter()
            .append('text')
            .style("pointer-events", "none")
            .attr("dx", ".90em")
            .attr("dy", ".10em")
            .attrs({
                'class': 'edgelabel',
                'id': function (d, i) { return 'edgelabel' + i },
                'font-size': 14,
                'fill': 'rgba(175, 175, 174, 0.5)'
            });
        edgelabels.append('textPath')
            .attr('xlink:href', function (d, i) { return '#edgepath' + i })
            .style("text-anchor", "middle")
            .style("pointer-events", "none")
            .attr("startOffset", "50%")

            .text(function (d) { return d.type });

        //It creates nodes
        node = svg.selectAll(".node")
            .data(nodes)
            .enter()
            .append("g")
            .attr("class", "node")
            .on("click", connectedNodes)
            .call(d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended)
            )
        node.append("circle")
            .attr("r", nodeRadius[winSize])
            .style("fill", function (d, i) {
                if (this.__data__.id == $('.btn-process').text().replace(/\s/ig, '')) {
                    idColors[d.id] = 'red';
                } else {
                    idColors[d.id] = colors(i);
                    if (idColors[d.id] == '#d62728') {
                        idColors[d.id] = "#ffcc00";
                    }
                }
                return idColors[d.id];
            })
        node.append("title")
            .text(function (d) { return d.id; });
        node.append("text")
            .attr("dy", -3)
        //.text(function (d) {return d.name+":"+d.label;});   //Show node label
        simulation
            .nodes(nodes)
            .on("tick", ticked);
        simulation.force("link")
            .links(links);

        //It was important to send information to table.
        allLinks = links;
        initialScroll();

        //Toggle stores whether the highlighting is on
        var toggle = 0;
        //Create an array logging what is connected to what
        var linkedByIndex = {};
        for (i = 0; i < nodes.length; i++) {
            linkedByIndex[i + "," + i] = 1;
        };
        links.forEach(function (d) {
            linkedByIndex[d.source.index + "," + d.target.index] = 1;
        });
        //This function looks up whether a pair are neighbours
        function neighboring(a, b) {
            return linkedByIndex[a.index + "," + b.index];
        }
        function connectedNodes() {
            if (toggle == 0) {
                //Reduce the opacity of all but the neighbouring nodes
                d = d3.select(this).node().__data__;
                node.style("opacity", function (o) {
                    return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
                });
                link.style("opacity", function (o) {
                    return d.index == o.source.index | d.index == o.target.index ? 1 : 0.1;
                });
                edgelabels.style("opacity", function (o) {
                    return d.index == o.source.index | d.index == o.target.index ? 1 : 0.1;
                });

                //Reduce the op
                toggle = 1;
            } else {
                //Put them back to opacity=1
                node.style("opacity", 1);
                link.style("opacity", 1);
                edgelabels.style("opacity", 1);
                toggle = 0;
            }
        }
    }
    function ticked() {
        //Position of links
        link
            .attr("points", function (d) {
                var bothLink = false;
                var pX = new Array();
                var pY = new Array();
                pX[0] = d.source.x;
                pY[0] = d.source.y;
                pX[17] = d.target.x;
                pY[17] = d.target.y;
                //    1    2    3    4    5    6    7    8    9   10    11   12   13   14   15   16
                //selfX = [4,   7,   10,   12,  13,  13,  12,  10,   8,   5,  2,  -1,  -2,   -3, -3, -2,];
                //selfY = [-1, -1,   -3,  -5,   -8, -11, -14, -16, -17, -17.5, -17, -15, -12,  -10, -8, -8,];
                selfX = [0.15, 0.25, 0.3, 0.25, 0.15, 0, -0.2, -0.4, -0.55, -0.65, -0.7, -0.65, -0.6, -0.6, -0.5, -0.4];
                selfY = [-0.1, -0.25, -0.45, -0.65, -0.8, -0.9, -0.95, -0.9, -0.8, -0.65, -0.45, -0.25, -0.15, -0.15, -0.05, 0];
                size = nodeRadius[winSize] * 3.3;
                //Self link

                if (d.source.id == d.target.id) {
                    for (i = 1; i < 17; i++) {
                        pX[i] = d.source.x + selfX[i - 1] * size;
                        pY[i] = d.source.y + selfY[i - 1] * size;
                    }

                } else {
                    for (var i in allLinks) {
                        //Bidirections links
                        if (allLinks[i].source.id == d.target.id) {
                            if (allLinks[i].target.id == d.source.id) {
                                if (d.source.id < d.target.id) {
                                    bothLink = true;
                                    if (d.source.x >= d.target.x && d.source.y >= d.target.y) {
                                        pY[17] = d.target.y + 6;
                                        pX[17] = d.target.x;
                                    } else if (d.source.x <= d.target.x && d.source.y <= d.target.y) {
                                        pY[17] = d.target.y - 6;
                                        pX[17] = d.target.x;
                                    } else {
                                        pY[17] = d.target.y + 6;
                                        pX[17] = d.target.x + 6;
                                    }

                                }

                            }
                        }

                    }
                    for (var z = 1; z < 17; z++) {
                        if (bothLink == false) {
                            pY[z] = d.source.y;
                            pX[z] = d.source.x;
                        } else {
                            if (d.source.x >= d.target.x && d.source.y >= d.target.y) {

                                pY[z] = d.source.y + 6;
                                pX[z] = d.source.x;
                            } else if (d.source.x <= d.target.x && d.source.y <= d.target.y) {
                                pY[z] = d.source.y - 6;
                                pX[z] = d.source.x;
                            } else {
                                pY[z] = d.source.y + 6;
                                pX[z] = d.source.x + 6;
                            }
                        }

                    }
                }
                var result = pX[0].toString() + "," + pY[0].toString() + ", " +
                    pX[1].toString() + "," + pY[1].toString() + ", " +
                    pX[2].toString() + "," + pY[2].toString() + ", " +
                    pX[3].toString() + "," + pY[3].toString() + ", " +
                    pX[4].toString() + "," + pY[4].toString() + ", " +
                    pX[5].toString() + "," + pY[5].toString() + ", " +
                    pX[6].toString() + "," + pY[6].toString() + ", " +
                    pX[7].toString() + "," + pY[7].toString() + ", " +
                    pX[8].toString() + "," + pY[8].toString() + ", " +
                    pX[9].toString() + "," + pY[9].toString() + ", " +
                    pX[10].toString() + "," + pY[10].toString() + ", " +
                    pX[11].toString() + "," + pY[11].toString() + ", " +
                    pX[12].toString() + "," + pY[12].toString() + ", " +
                    pX[13].toString() + "," + pY[13].toString() + ", " +
                    pX[14].toString() + "," + pY[14].toString() + ", " +
                    pX[15].toString() + "," + pY[15].toString() + ", " +
                    pX[16].toString() + "," + pY[16].toString() + ", " +
                    pX[17].toString() + "," + pY[17].toString();
                return result;
            });

        //Position of nodes
        node
            .attr("transform", function (d) { return "translate(" + d.x + ", " + d.y + ")"; });
        edgepaths.attr('d', function (d) {
            return 'M ' + d.source.x + ' ' + d.source.y + ' L ' + d.target.x + ' ' + d.target.y;
        });
        //Position of labels
        edgelabels.attr('transform', function (d) {
            var bbox = this.getBBox();

            rx = bbox.x + 1 + bbox.width / 2;
            ry = bbox.y + 1 + bbox.height / 2;

            for (var i in allLinks) {
                if (allLinks[i].source.id == d.target.id) {
                    if (allLinks[i].target.id == d.source.id) {
                        if (d.source.id < d.target.id) {
                            rx = bbox.x - 3 + bbox.width / 2;
                            ry = bbox.y - 3 + bbox.height / 2;
                        }

                    }
                }
            }

            if (d.target.x < d.source.x) {
                return 'rotate(180 ' + rx + ' ' + ry + ')';
            } else {
                return 'rotate(0)';
            }

        });
    }

    //Drags functions
    function dragstarted(d) {
        for (i = 0; i < node._groups[0].length; i++) {
            if (node._groups[0][i].firstChild.style.fill == 'black') {
                node._groups[0][i].firstChild.style.fill = colorBackup;
            }
        }
        colorBackup = d3.select(this).node().firstChild.style.fill;
        d3.select(this).node().firstChild.style.fill = 'black';
        if (!d3.event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x;
        d.fy = d.y;
        //it Sends to table
        $("tbody#target td").remove();
        $("span#node").text(d.id);
        for (var i in allLinks) {
            var circleColorInfo = "<span style = 'border:1px solid black;border-radius:25px;padding: 0px 6px;background-color: " + idColors[allLinks[i].target.id] + ";'>&nbsp;</span>"
            if (allLinks[i].source.id == d.id) {
                if (allLinks[i].target.id == d.id) {
                    $("tbody#target").append("<tr><td><small>" + "&nbsp;&nbsp;self" + "</small></td>" + "<td><small>" + allLinks[i].type + "</small></td></tr>");
                } else {
                    $("tbody#target").append("<tr><td><small>" + circleColorInfo + "&nbsp;&nbsp;" + allLinks[i].target.id + "</small></td>" + "<td><small>" + allLinks[i].type + "</small></td></tr>");
                }

            }
        }
    }
    function dragged(d) {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
    }
    function dragended(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

}// /graph


///* Textarea line. Found on  http://alan.blog-city.com/jquerylinedtextarea.htm*/
(function ($) {

    $.fn.linedtextarea = function (options) {

        // Get the Options
        var opts = $.extend({}, $.fn.linedtextarea.defaults, options);


		/*
		 * Helper function to make sure the line numbers are always
		 * kept up to the current system
		 */
        var fillOutLines = function (codeLines, h, lineNo) {
            while ((codeLines.height() - h) <= 0) {
                if (lineNo == opts.selectedLine)
                    codeLines.append("<div class='lineno lineselect'>" + lineNo + "</div>");
                else
                    codeLines.append("<div class='lineno'>" + lineNo + "</div>");

                lineNo++;
            }
            return lineNo;
        };


		/*
		 * Iterate through each of the elements are to be applied to
		 */
        return this.each(function () {
            var lineNo = 1;
            var textarea = $(this);

            /* Turn off the wrapping of as we don't want to screw up the line numbers */
            textarea.attr("wrap", "off");
            textarea.css({ resize: 'none' });
            var originalTextAreaWidth = textarea.outerWidth();

            /* Wrap the text area in the elements we need */
            textarea.wrap("<div class='linedtextarea' style = 'width:60vw;height: 30vh;'></div>");
            var linedTextAreaDiv = textarea.parent().wrap("<div class='linedwrap' style='width:" + originalTextAreaWidth + "px'></div>");
            var linedWrapDiv = linedTextAreaDiv.parent();

            linedWrapDiv.prepend("<div class='lines' style='width:50px'></div>");

            var linesDiv = linedWrapDiv.find(".lines");
            linesDiv.height(textarea.height() + 6);


            /* Draw the number bar; filling it out where necessary */
            linesDiv.append("<div class='codelines'></div>");
            var codeLinesDiv = linesDiv.find(".codelines");
            lineNo = fillOutLines(codeLinesDiv, linesDiv.height(), 1);

            /* Move the textarea to the selected line */
            if (opts.selectedLine != -1 && !isNaN(opts.selectedLine)) {
                var fontSize = parseInt(textarea.height() / (lineNo - 2));
                var position = parseInt(fontSize * opts.selectedLine) - (textarea.height() / 2);
                textarea[0].scrollTop = position;
            }


            /* Set the width */
            var sidebarWidth = linesDiv.outerWidth();
            var paddingHorizontal = parseInt(linedWrapDiv.css("border-left-width")) + parseInt(linedWrapDiv.css("border-right-width")) + parseInt(linedWrapDiv.css("padding-left")) + parseInt(linedWrapDiv.css("padding-right"));
            var linedWrapDivNewWidth = originalTextAreaWidth - paddingHorizontal;
            var textareaNewWidth = originalTextAreaWidth - sidebarWidth - paddingHorizontal - 20;

            textarea.width(textareaNewWidth);
            linedWrapDiv.width(linedWrapDivNewWidth);



            /* React to the scroll event */
            textarea.scroll(function (tn) {
                var domTextArea = $(this)[0];
                var scrollTop = domTextArea.scrollTop;
                var clientHeight = domTextArea.clientHeight;
                codeLinesDiv.css({ 'margin-top': (-1 * scrollTop) + "px" });
                lineNo = fillOutLines(codeLinesDiv, scrollTop + clientHeight, lineNo);
            });


            /* Should the textarea get resized outside of our control */
            textarea.resize(function (tn) {
                var domTextArea = $(this)[0];
                linesDiv.height(domTextArea.clientHeight + 6);
            });

        });
    };

    // default options
    $.fn.linedtextarea.defaults = {
        selectedLine: -1,
        selectedClass: 'lineselect'
    };
})(jQuery);

//close textarea line
