import { Component, OnInit } from '@angular/core';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import propertiesPanelModule from 'bpmn-js-properties-panel';
import propertiesProvider from 'bpmn-js-properties-panel/lib/provider/camunda';
import { CamundaDescriptor } from './camunda-descriptor';

@Component({
  selector: 'app-bpmn-modeler',
  templateUrl: './bpmn-modeler.component.html',
  styleUrls: ['./bpmn-modeler.component.sass']
})
export class BpmnModelerComponent implements OnInit {
  private modeler;
  private initData = `<?xml version="1.0" encoding="UTF-8"?>
                <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1">
                  <bpmn:process id="Process_1" isExecutable="false">
                    <bpmn:startEvent id="StartEvent_1"/>
                  </bpmn:process>
                  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
                    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
                      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
                        <dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/>
                      </bpmndi:BPMNShape>
                    </bpmndi:BPMNPlane>
                  </bpmndi:BPMNDiagram>
                </bpmn:definitions>`;
  constructor() { }

  ngOnInit() {
    this.initBpmn();
  }
  initBpmn() {
    this.modeler = new BpmnModeler({
      container: '#js-canvas',
      height: 900,
      width: '75%',
      propertiesPanel: {
        parent: '#js-properties-panel'
      },
      additionalModules: [
        propertiesProvider,
        propertiesPanelModule
      ],
      moddleExtensions: {
        camunda: CamundaDescriptor
      }

    });
    this.modeler.on('selection.changed', (e) => {
      console.log(e.newSelection[0]);
    });

    this.modeler.on('element.changed', (e) => {
      console.log(e.element);
    });
    this.modeler.importXML(this.initData, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

}
