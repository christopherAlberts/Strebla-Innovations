import { Component, OnInit, ViewChild, ElementRef, HostListener, NgZone, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.page.html',
  styleUrls: ['./terminal.page.scss'],
})
export class TerminalPage implements OnInit {
  @ViewChild('inputArea', { static: true }) inputArea!: ElementRef;
  @ViewChild('output', { static: true }) output!: ElementRef;
  @ViewChild('terminal', { static: true }) terminal!: ElementRef;
  @ViewChild('inputPrompt', { static: true }) inputPrompt!: ElementRef;
  currentFontSize: number = 14;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.postMessage('user> Enter help for all the commands');
    this.inputArea.nativeElement.focus();
  }

  // @HostListener('document:keydown', ['$event'])
  // handleKeyDown(event: KeyboardEvent) {
  //   if (event.key === 'Enter') {
  //     event.preventDefault();
  //     const command = this.inputArea.nativeElement.textContent.trim();
  //     this.postMessage('user> ' + command);
  //     this.handleCommand(command);
  //     this.inputArea.nativeElement.textContent = ''; // Clear the contenteditable area
  //     this.scrollToBottom();
  //   }
  // }

  postMessage(message: string) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message.replace(/\n/g, '<br>'); // Replace newlines with <br> tags
    messageElement.classList.add('line');
    this.output.nativeElement.appendChild(messageElement);
    this.scrollToBottom();
}


postFlickeringMessage(message: string) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = message.replace(/\n/g, '<br>');
  messageElement.classList.add('line', 'flicker');

  setTimeout(() => {
    this.output.nativeElement.appendChild(messageElement);
    this.scrollToBottom();
    this.cdr.detectChanges();  // Try moving detectChanges here after the DOM update
  }, 10); // short delay to ensure DOM is ready
}


  handleCommand(command: string) {
    switch (command.toLowerCase()) {
      case 'help':
        this.postMessage('user> \n- get weather\n- get news');
        break;
      case 'flicker':
        this.postFlickeringMessage('This text is flickering');
        break;
      default:
        // this.postMessage('Unknown command: ' + command);
        break;
    }
  }


  scrollToBottom() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.terminal.nativeElement.scrollTop = this.terminal.nativeElement.scrollHeight;
        this.cdr.detectChanges(); // Trigger change detection manually
      }, 0);
    });
  }

  increaseTextSize() {
    this.currentFontSize = Math.min(24, this.currentFontSize + 1); // Set a max font size limit
    this.updateFontSize();
  }


  decreaseTextSize() {
    this.currentFontSize = Math.max(10, this.currentFontSize - 1); // Set a min font size limit
    this.updateFontSize();
  }


  updateFontSize() {
    this.output.nativeElement.style.fontSize = `${this.currentFontSize}px`;
    this.inputArea.nativeElement.style.fontSize = `${this.currentFontSize}px`;
    this.inputPrompt.nativeElement.style.fontSize = `${this.currentFontSize}px`; 
  }
  

  @HostListener('document:keydown', ['$event'])
handleKeyDown(event: KeyboardEvent) {
  console.log(event);  // Log the event to see if it is being captured correctly
  if (event.key === 'Enter') {
    event.preventDefault();
    const command = this.inputArea.nativeElement.textContent.trim();
    this.postMessage('user> ' + command);
    this.handleCommand(command);
    this.inputArea.nativeElement.textContent = '';  // Clear the contenteditable area
    this.scrollToBottom();
  }
}

}
