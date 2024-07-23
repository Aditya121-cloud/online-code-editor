function runCode() {
    var code = document.getElementById("code-editor").value;
    var iframe = document.getElementById("output-frame");
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    
    // Wrap the user's code in a basic HTML structure
    var fullHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Run Code</title>
        </head>
        <body>
            <script>
                ${code}
            </script>
        </body>
        </html>
    `;
    
    iframeDocument.open();
    iframeDocument.write(fullHTML);
    iframeDocument.close();
}

function resetCode() {
    document.getElementById("code-editor").value = "";
    var iframe = document.getElementById("output-frame");
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write("");
    iframeDocument.close();
}
