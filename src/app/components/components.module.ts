import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemChatComponent } from './item-chat/item-chat.component';
import { IonicModule } from '@ionic/angular';
import { ItemEstadosComponent } from './item-estados/item-estados.component';
import { ItemLlamadasComponent } from './item-llamadas/item-llamadas.component';



@NgModule({
  declarations: [
    ItemChatComponent,
    ItemEstadosComponent,
    ItemLlamadasComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [	
    ItemChatComponent,
    ItemEstadosComponent,
    ItemLlamadasComponent
  ]
})
export class ComponentsModule { }
