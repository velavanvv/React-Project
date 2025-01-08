import React from "react";
function FormPrint(){
    const handlePrint = () => {
        window.print();
      };
    
      return (
        <div>
          <div id="content-to-print" style={{ padding: "20px" }}>
            <h1>Printable Content</h1>
            <p>This is the content that will be printed.</p>
            <p>Make sure to design it properly for a good print layout.</p>
          </div>
          <button onClick={handlePrint} style={{ marginTop: "20px" }}>
            Print Page
          </button>
        </div>
      );
}
export default FormPrint;