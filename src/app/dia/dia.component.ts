import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Logger } from '../core/logger.service';
import { I18nService } from '../core/i18n.service';
import { MessageService } from '../core/message/message.service';

const log = new Logger('DIA');

@Component({
  selector: 'app-dia',
  templateUrl: './dia.component.html',
  styleUrls: ['./dia.component.scss']
})

export class DiaComponent implements OnInit {
  version: string = environment.version;
  error: string =  null;
  diaForm: FormGroup;
  isLoading = false;

  ngOnInit() { }

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private i18nService: I18nService,
              private messageSerivce: MessageService) {

     this.messageSerivce.initConnect();
     this.messageSerivce.consume();
  }

}
