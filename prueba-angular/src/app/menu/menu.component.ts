import { Component, OnInit } from '@angular/core';
import { ScriptManagerService } from '../script-manager.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private script: ScriptManagerService) { }

  ngOnInit(): void {
    this.ejecutarScript()
  }

  ejecutarScript(){
    // this.script.cargarScript(['getData'])
  }

}
