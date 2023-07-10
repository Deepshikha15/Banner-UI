import * as React from "react";
import { useRef } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport} from "@progress/kendo-react-pdf";
import Invoice from "./components/Invoice";


function Awai() {

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = event => {
    pdfExportComponent.current.save();
  };

  return (
    <div id="example">
      
      <div className="page-container hidden-on-narrow">
        <PDFExport ref={pdfExportComponent} margin={{ top: 0, left: 150, right: 150, bottom: 20 }}>
         
          <Invoice />

        </PDFExport>
      </div>
      <div className="box wide hidden-on-narrow">
       
        <div className="box-col" style={{textAlign: "center"}}>
          <Button primary={true} onClick={handleExportWithComponent}>
            PDF Download
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Awai;
