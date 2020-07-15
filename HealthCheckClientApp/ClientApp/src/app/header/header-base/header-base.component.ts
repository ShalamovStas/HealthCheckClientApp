import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScriptLoaderService } from '../../_services/script-loader.service';
import { log } from 'util';

declare let mLayout: any;
@Component({
  selector: 'header-base',
  templateUrl: './header-base.component.html',
})
export class HeaderBaseComponent implements OnInit {
  public showUserMenu = false;

  constructor(private _router: Router,
    private _script: ScriptLoaderService, ) {

  }

  ngOnInit() {
  }
}
