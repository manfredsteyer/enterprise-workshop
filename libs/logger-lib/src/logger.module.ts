import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerConfig } from './logger-config';
import { LoggerService } from './logger.service';
import { LogFormatterService } from './log-formatter.service';
import { DefaultLogFormatterService } from './default-log-formatter.service';


const defaultFormatterConfig = [{
  provide: LogFormatterService,
  useClass: DefaultLogFormatterService
}];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LoggerModule { 
  static forRoot(config: LoggerConfig): ModuleWithProviders {
    
    return {
      ngModule: LoggerModule,
      providers: [
        LoggerService,
        { provide: LoggerConfig, useValue: config}
      ]
    }
  }

}