// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

/******** DECLARING GLOBAL VARIABLE ********/

let inputHeight = $("#inputHeight");
let inputWidth = $("#inputWidth");
const canvas = $("#pixelCanvas");
let colorPicker = $("#colorPicker");
$("table").css("background", '#FFF'); //default color of grid
/****** MAKE GRID START ******/

function makeGrid() {
  canvas.find("tbody").remove(); // remove previous grid from canvas
  rows = inputHeight.val();
  col = inputWidth.val();

  canvas.append("<tbody></tbody>");

  canvasBody = canvas.find("tbody");

  for (let i = 0; i < rows; i++) {
    canvasBody.append("<tr></tr>"); //making rows as per height
  }
  for (let j = 0; j < col; j++) {
    canvas.find("tr").append("<td></td>"); //adding columns
  }
}

/****** MAKE GRID END ******/

/****** EVENT LISTNERS ******/

$(document).ready(function() {
  $('input[type="submit"]').on("click", function(e) {
    e.preventDefault(); //prevent page from reloading after pressing submit
    makeGrid();
  });

  /****** COLOR CELLS ******/

  $("table").on("click", "td", function() {
    color = colorPicker.val();
    // console.log(this);
    $(this).css("background", color);
  });
});

