import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  // private _godMode: boolean = false;

  globalVars: { [key: string]: any } = {
    godMode: false,
    test: 123,
    test2: true,
    // Add more global variables here as needed
  };

  constructor() { 
    (window as any).openHiddenTerminal = this.openHiddenTerminal.bind(this);
  }

  // get godMode(): boolean {
  //   return this._godMode;
  // }

  // set godMode(value: boolean) {
  //   this._godMode = value;
  // }

 
  openHiddenTerminal() {

    const correctPassword = 'Hoth 1775'; // Set your password
    let passwordAttempts = 0;
    const maxAttempts = 3; // Maximum password attempts
  
    while (passwordAttempts < maxAttempts) {
      const enteredPassword = prompt('Please enter the password:');
      if (enteredPassword === null) {
        // User cancelled the prompt
        return;
      } else if (enteredPassword === correctPassword) {
        break; // Correct password entered, break out of the loop to continue
      } else {
        alert('Incorrect password, try again.');
        passwordAttempts++;
      }
    }
  
    if (passwordAttempts === maxAttempts) {
      alert('Maximum password attempts exceeded.');
      return; // Exit the function if max attempts reached
    }

    let running = true;

    while (running) {
      let command = prompt(`
Hidden Terminal Commands:
-------------------------------
1. View variables
2. Edit variables
3. Exit
-------------------------------
`);
      if (command === null) return; // Exit if prompt is cancelled

      switch (command) {
        case '1':
          this.viewVariables();
          break;
        case '2':
          this.editVariables();
          break;
        case '3':
          running = false;
          break;
        case 'x':
          running = false;
          break;
        default:
          alert('Invalid command.');
          break;
      }
    }
  }

  viewVariables() {
    let varsString = 'VARIABLES:\n-------------------------------\n';
    Object.keys(this.globalVars).forEach((key, index) => {
      varsString += `${index + 1}. ${key} - ${this.globalVars[key]}\n`;
    });

    varsString += '-------------------------------\n';
    
    alert(varsString);
  }

  editVariables() {
    let varsString = 'VARIABLES:\n-------------------------------\n';
    let varKeys = Object.keys(this.globalVars);
    varKeys.forEach((key, index) => {
      varsString += `${index + 1}. ${key} - ${this.globalVars[key]}\n`;
    });
    varsString += '-------------------------------\nSelect one of the variables above by entering the variable\'s corresponding number.\nOr press \'x\' to exit.\n-------------------------------';
    
    let variableToEdit = prompt(varsString);
    if (variableToEdit === null || variableToEdit.toLowerCase() === 'x') return; // Exit if prompt is cancelled or 'x' is pressed
    
    let index = parseInt(variableToEdit) - 1;
    if (index >= 0 && index < varKeys.length) {
      let key = varKeys[index];
      let newValue = prompt(`You have chosen the variable "${key}" to edit.\nPlease enter "${key}"'s new value below and press "Enter"\nonce done to change the variable.\nOr press 'x' to exit.\n-------------------------------`);
      if (newValue === null) return; // Exit if prompt is cancelled

      // Update the value, assuming all are boolean for simplicity; you might need more complex handling for different types
      this.globalVars[key] = newValue.toLowerCase() === 'true';
      alert(`\n-------------------------------\nThe variable '${key}' has been successfully changed to ${newValue}!\n-------------------------------`);
    } else {
      alert('\n-------------------------------\nInvalid selection.\n-------------------------------');
    }

    
  }
  
  
}
