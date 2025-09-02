import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const downloadPageAsPDF = async (filename: string = 'denrish-group-website') => {
  try {
    // Get the root element
    const element = document.documentElement;
    
    // Configure html2canvas options
    const canvas = await html2canvas(element, {
      height: window.innerHeight,
      width: window.innerWidth,
      scrollX: 0,
      scrollY: 0,
      useCORS: true,
      allowTaint: true,
      scale: 1,
      logging: false,
    });

    // Calculate dimensions
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    // Calculate scaling to fit page
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const scaledWidth = imgWidth * ratio;
    const scaledHeight = imgHeight * ratio;

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', 0, 0, scaledWidth, scaledHeight);
    
    // Save the PDF
    pdf.save(`${filename}.pdf`);
    
    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    return false;
  }
};