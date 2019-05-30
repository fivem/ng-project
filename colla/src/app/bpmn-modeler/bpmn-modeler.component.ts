import { Component, OnInit } from '@angular/core';
import {BpmnViewer} from 'bpmn-js';

@Component({
  selector: 'app-bpmn-modeler',
  templateUrl: './bpmn-modeler.component.html',
  styleUrls: ['./bpmn-modeler.component.scss']
})
export class BpmnModelerComponent implements OnInit {

  constructor() {
    let pizzaDiagram = "";
    let viewer = new BpmnViewer({
      container: '#canvas'
    });

    viewer.importXML(pizzaDiagram, (err) => {

      if (!err) {
        console.log('success!');
        viewer.get('canvas').zoom('fit-viewport');
      } else {
        console.log('something went wrong:', err);
      }
    });
  }

  ngOnInit() {
  }

}
