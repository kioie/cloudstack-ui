import {
  Component,
  Inject
} from '@angular/core';
import {
  MD_DIALOG_DATA,
  MdDialogRef
} from '@angular/material';
import { VirtualMachine } from '../../shared/vm.model';


@Component({
  selector: 'cs-vm-access-dialog',
  templateUrl: 'vm-access.component.html'
})
export class VmAccessComponent {
  public vm: VirtualMachine;
  public title = 'VM_PAGE.COMMANDS.VM_ACCESS_TITLE';

  constructor(
    public dialogRef: MdDialogRef<VmAccessComponent>,
    @Inject(MD_DIALOG_DATA) data
  ) {
    this.vm = data;
  }
}
