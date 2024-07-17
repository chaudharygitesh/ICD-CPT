import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../voice-recognition.service';

@Component({
  selector: 'app-speechtotext',
  templateUrl: './speechtotext.component.html',
  styleUrls: ['./speechtotext.component.css']
})
export class SpeechtotextComponent implements OnInit {
  constructor(public service :VoiceRecognitionService) {  this.service.init() }
  ngOnInit(): void {
    
  }
  stopservice(){
    this.service.stop();
  }
  startservice(){
    this.service.start();
  }

}
