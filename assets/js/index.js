const generateBtn = document.getElementById('generate-pdf-btn')
const pdfArea = document.getElementById('pdf-area')
const pdfOptions = {
    margin: 0, 
    filename: 'aida-capo-resume.pdf',
    image: { type: 'jpeg', quality: 1},
    html2canvas: { scale: 4 }, 
    jsPDF: { format: 'a4', orientation: 'portrait'}
}

generateBtn.addEventListener('click', () => {
    scaleResume()
    generatePDF()
    setTimeout(removeScale, 5000)
})

function generatePDF() {
    html2pdf(pdfArea, pdfOptions)
}

function scaleResume() {
    document.body.classList.add('pdf')
}

function removeScale() {
    document.body.classList.remove('pdf')
}

