function TextPDF(){



 
const { jsPDF } = window.jspdf;

doc = new jsPDF();






let text = document.getElementById("inputField").value;

let PDFName = [text];




let line = doc.splitTextToSize(text,160);




doc.setFontSize(14);

let Generated_PDF= "Generated PDF"

let textWidth = doc.getTextWidth(Generated_PDF);

let pageWidth = doc.internal.pageSize.getWidth();


doc.text("Generated PDF",pageWidth/2,30,{align:"center"});



// content
doc.setFontSize(14);
doc.text(line,10,20);

doc.save("00");


alert(PDFName[0]);

}





